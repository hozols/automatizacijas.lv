import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import Typewriter from './Typewriter';
import PlatenSheet from './PlatenSheet';
import { useTypingLoop } from './useTypingLoop';

export interface TypewriterSceneProps {
  /* first line fully typed, no animation (fallback capture, reduced motion) */
  staticLine?: boolean;
  onReady?: () => void;
  onContextLost?: () => void;
}

const MAX_YAW = THREE.MathUtils.degToRad(8);
const MAX_PITCH = THREE.MathUtils.degToRad(4);

function Rig({ pointer, staticLine, onReady }: { pointer: React.MutableRefObject<{ x: number; y: number }>; staticLine: boolean; onReady?: () => void }) {
  const group = useRef<THREE.Group>(null);
  const loop = useTypingLoop(staticLine);
  const readyRef = useRef(false);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, -0.35 + pointer.current.x * MAX_YAW, 6, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, 0.08 - pointer.current.y * MAX_PITCH, 6, delta);
    if (!readyRef.current && state.clock.elapsedTime > 0.05) {
      readyRef.current = true;
      onReady?.();
    }
  });

  return (
    <group ref={group} rotation={[0.08, -0.35, 0]}>
      <Typewriter strike={loop.strike} onClick={loop.skipLine} />
      <PlatenSheet text={loop.text} chars={loop.chars} phase={loop.phase} />
    </group>
  );
}

function ContextLossWatcher({ onLost }: { onLost?: () => void }) {
  const gl = useThree((s) => s.gl);
  useEffect(() => {
    const el = gl.domElement;
    const handler = (e: Event) => { e.preventDefault(); onLost?.(); };
    el.addEventListener('webglcontextlost', handler);
    return () => el.removeEventListener('webglcontextlost', handler);
  }, [gl, onLost]);
  return null;
}

export default function TypewriterScene({ staticLine = false, onReady, onContextLost }: TypewriterSceneProps) {
  const pointer = useRef({ x: 0, y: 0 });
  const wrapper = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={wrapper}
      className="absolute inset-0"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        pointer.current.x = ((e.clientX - r.left) / r.width) * 2 - 1;
        pointer.current.y = ((e.clientY - r.top) / r.height) * 2 - 1;
      }}
      onPointerLeave={() => { pointer.current.x = 0; pointer.current.y = 0; }}
    >
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 1.75, 5.3], fov: 30 }}
        frameloop={inView ? 'always' : 'never'}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
        onCreated={({ gl, camera }) => { gl.setClearColor(0x000000, 0); camera.lookAt(0, 0.85, 0); }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[-3, 5, 3]} intensity={1.9} color="#fffaf2" />
        <directionalLight position={[3, 2, -2]} intensity={0.6} />
        <directionalLight position={[0, 3, -4]} intensity={1.2} color="#f6f5f0" />
        <Suspense fallback={null}>
          <Rig pointer={pointer} staticLine={staticLine} onReady={onReady} />
          <ContactShadows position={[0, -0.005, 0]} opacity={0.45} scale={6} blur={2.2} far={2} resolution={256} frames={1} />
        </Suspense>
        <ContextLossWatcher onLost={onContextLost} />
      </Canvas>
    </div>
  );
}
