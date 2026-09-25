"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { useRef, useMemo } from "react";
import type { Group, Points, BufferGeometry } from "three";

export default function Hero3D() {
  const points: [number, number, number][] = [];
  const waveLength = 200;
  const amplitude = 0.5;
  for (let i = 0; i < waveLength; i++) {
    const x = (i / waveLength) * 2 - 1;
    const y = Math.sin(x * 10) * amplitude * 0.5;
    const z = 0;
    points.push([x, y, z]);
  }

  return (
    <Canvas
      style={{ position: "relative", width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 4], fov: 45 }}
      shadows
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <AnimatedLine points={points} />
      <ParticleField />
    </Canvas>
  );
}

function AnimatedLine({ points }: { points: [number, number, number][] }) {
  const groupRef = useRef<Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      const s = 1 + Math.sin(Date.now() * 0.001) * 0.02;
      groupRef.current.scale.set(s, s, 1);
    }
  });

  return (
    <group ref={groupRef}>
      <Line color="#b45309" lineWidth={2} points={points} />
    </group>
  );
}

function ParticleField() {
  const particleCount = 200;
  const particleRef = useRef<Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Create positions/colors ONCE, not on every render
  const positions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      arr[i3] = (Math.random() - 0.5) * 5;
      arr[i3 + 1] = (Math.random() - 0.5) * 5;
      arr[i3 + 2] = (Math.random() - 0.5) * 5;
    }
    return arr;
  }, []);

  const colors = useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      arr[i3] = 0.9;
      arr[i3 + 1] = 0.95;
      arr[i3 + 2] = 1.0;
    }
    return arr;
  }, []);

  useMemo(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
    }
  }, []);

  useFrame((_state, delta) => {
    if (!particleRef.current) return;
    const mousePos = mouseRef.current;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3 + 1] -= delta * 0.1;
      if (positions[i3 + 1] < -3) {
        positions[i3 + 1] = 3;
        positions[i3] = (Math.random() - 0.5) * 5;
        positions[i3 + 2] = (Math.random() - 0.5) * 5;
      }

      const dx = mousePos.x * 2 - positions[i3];
      const dy = mousePos.y * 2 - positions[i3 + 1];
      const dz = -positions[i3 + 2];
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 0.01;

      const force = dist < 1 ? 0.05 / dist : 0.005;
      positions[i3] += (dx / dist) * force * delta;
      positions[i3 + 1] += (dy / dist) * force * delta;
      positions[i3 + 2] += (dz / dist) * force * delta;
    }

    const geometry = particleRef.current.geometry as BufferGeometry;
    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particleRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.6}
      />
    </points>
  );
}