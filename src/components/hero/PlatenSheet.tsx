import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PAPER_FONT_PX, PAPER_H, PAPER_W, drawPaper, readPaperColors } from './paperTexture';

interface Props {
  text: string;
  chars: number;
  phase: 'typing' | 'hold' | 'return';
  /* world units the carriage moves per character; tuned against the model */
  charStep?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  width?: number;
}

const FONT = `500 ${PAPER_FONT_PX}px "JetBrains Mono Variable", ui-monospace, Menlo, monospace`;

export default function PlatenSheet({
  text, chars, phase, charStep = 0.03, position = [0, 1.24, -0.62], rotation = [-0.3, 0, 0], width = 1.4,
}: Props) {
  const group = useRef<THREE.Group>(null);
  const canvas = useMemo(() => {
    const c = document.createElement('canvas');
    c.width = PAPER_W;
    c.height = PAPER_H;
    return c;
  }, []);
  const texture = useMemo(() => {
    const t = new THREE.CanvasTexture(canvas);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    return t;
  }, [canvas]);

  useEffect(() => {
    let alive = true;
    const paint = () => {
      if (!alive) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      drawPaper(ctx, PAPER_W, PAPER_H, text, readPaperColors(), FONT);
      texture.needsUpdate = true;
    };
    if (document.fonts?.load) document.fonts.load(FONT).then(paint, paint);
    else paint();
    return () => {
      alive = false;
    };
  }, [canvas, texture, text]);

  useEffect(() => () => texture.dispose(), [texture]);

  // carriage travel: paper moves left as characters are typed, returns on 'return'
  useFrame((_, delta) => {
    if (!group.current) return;
    const target = phase === 'return' ? 0 : -chars * charStep;
    const speed = phase === 'return' ? 10 : 18;
    group.current.position.x = THREE.MathUtils.damp(group.current.position.x, position[0] + target, speed, delta);
  });

  const height = width * (PAPER_H / PAPER_W);
  return (
    <group ref={group} position={position} rotation={rotation}>
      <mesh>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial map={texture} roughness={0.95} metalness={0} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}
