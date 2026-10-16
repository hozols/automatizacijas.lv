import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface Props {
  slug: string;
  onReady?: () => void;
  onContextLost?: () => void;
}

const SPIN = 0.25; // rad/s

/* Hidden-line wireframe: a black fill that occludes, white edges on top. Same look as scripts/objects-render.mjs. */
function Blueprint({ slug, onReady }: { slug: string; onReady?: () => void }) {
  const { scene } = useGLTF(`/objects/${slug}.glb`);
  const group = useRef<THREE.Group>(null);
  const announced = useRef(false);

  const model = useMemo(() => {
    const clone = scene.clone(true);
    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const s = 1 / Math.max(size.x, size.y, size.z, 0.0001);
    clone.scale.setScalar(s);
    clone.position.set(-center.x * s, -center.y * s, -center.z * s);
    clone.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh) return;
      m.material = new THREE.MeshBasicMaterial({ color: 0x000000, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
      const lines = new THREE.LineSegments(
        new THREE.WireframeGeometry(m.geometry),
        new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 }),
      );
      m.add(lines);
    });
    return clone;
  }, [scene]);

  useEffect(() => {
    announced.current = false;
    return () => {
      model.traverse((o) => {
        const m = o as THREE.Mesh;
        if (m.isMesh) (m.material as THREE.Material).dispose?.();
        if ((o as THREE.LineSegments).isLineSegments) {
          (o as THREE.LineSegments).geometry.dispose();
          ((o as THREE.LineSegments).material as THREE.Material).dispose();
        }
      });
    };
  }, [model]);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += SPIN * delta;
    if (!announced.current && state.clock.elapsedTime > 0.05) {
      announced.current = true;
      onReady?.();
    }
  });

  return (
    <group ref={group} rotation={[0, -0.6, 0]}>
      <primitive object={model} />
    </group>
  );
}

function ContextLossWatcher({ onLost }: { onLost?: () => void }) {
  const gl = useThree((s) => s.gl);
  useEffect(() => {
    const el = gl.domElement;
    const handler = (e: Event) => {
      e.preventDefault();
      onLost?.();
    };
    el.addEventListener('webglcontextlost', handler);
    return () => el.removeEventListener('webglcontextlost', handler);
  }, [gl, onLost]);
  return null;
}

export default function ObjectScene({ slug, onReady, onContextLost }: Props) {
  const wrapper = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapper} className="absolute inset-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.9, 3.1], fov: 26 }}
        frameloop={inView ? 'always' : 'never'}
        gl={{ alpha: false, antialias: true, powerPreference: 'low-power' }}
        onCreated={({ gl, camera }) => {
          gl.setClearColor(0x000000, 1);
          camera.lookAt(0, -0.02, 0);
        }}
      >
        <Blueprint slug={slug} onReady={onReady} />
        <ContextLossWatcher onLost={onContextLost} />
      </Canvas>
    </div>
  );
}
