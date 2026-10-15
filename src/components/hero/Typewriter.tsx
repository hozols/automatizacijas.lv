import { useLayoutEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export const MODEL_URL = '/models/typewriter.glb';
const TARGET_WIDTH = 2.4;
const STRIKE_DEPTH = 0.012;

/* Set to true if the Meshy texture clashes with the palette (checked in Task 8). */
export const PALETTE_OVERRIDE = false;
const INK = new THREE.Color('#1B2440');

interface Props {
  strike: React.MutableRefObject<number>;
  onClick?: () => void;
}

export default function Typewriter({ strike, onClick }: Props) {
  const { scene } = useGLTF(MODEL_URL);
  const group = useRef<THREE.Group>(null);

  const model = useMemo(() => {
    const clone = scene.clone(true);
    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());
    const s = TARGET_WIDTH / Math.max(size.x, 0.0001);
    clone.scale.setScalar(s);
    box.setFromObject(clone);
    const center = box.getCenter(new THREE.Vector3());
    clone.position.set(-center.x, -box.min.y, -center.z);
    clone.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh) return;
      m.castShadow = false;
      m.receiveShadow = false;
      const mat = m.material as THREE.MeshStandardMaterial;
      if (PALETTE_OVERRIDE && mat) {
        m.material = new THREE.MeshStandardMaterial({
          color: INK, roughness: 0.55, metalness: 0.1, normalMap: mat.normalMap ?? null,
        });
      } else if (mat) {
        mat.roughness = Math.max(mat.roughness ?? 0.5, 0.45);
      }
    });
    return clone;
  }, [scene]);

  useLayoutEffect(() => () => {
    model.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.isMesh) (m.material as THREE.Material).dispose?.();
    });
  }, [model]);

  useFrame(() => {
    if (!group.current) return;
    group.current.position.y = -STRIKE_DEPTH * strike.current;
  });

  return (
    <group
      ref={group}
      onClick={(e) => { e.stopPropagation(); onClick?.(); }}
      onPointerOver={() => { document.body.style.cursor = 'pointer'; }}
      onPointerOut={() => { document.body.style.cursor = ''; }}
    >
      <primitive object={model} />
    </group>
  );
}

useGLTF.preload(MODEL_URL);
