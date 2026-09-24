"use client";

import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { useRef } from "react";

export default function Hero3D() {
  // Create a simple audio waveform as a line
  const points = [];
  const waveLength = 200;
  const amplitude = 0.5;
  for (let i = 0; i < waveLength; i++) {
    const x = (i / waveLength) * 2 - 1; // -1 to 1
    const y = Math.sin(x * 10) * amplitude * 0.5;
    const z = 0;
    points.push(x, y, z);
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
    </Canvas>
  );
}

function AnimatedLine({ points }) {
  const lineRef = useRef(null);

  useFrame(() => {
    if (lineRef.current) {
      // Subtle rotation and pulse
      lineRef.current.rotation.y += 0.001;
      lineRef.current.scale.set(
        1 + Math.sin(Date.now() * 0.001) * 0.02,
        1 + Math.sin(Date.now() * 0.001) * 0.02,
        1
      );
    }
  });

  return (
    <Line
      ref={lineRef}
      color="#b45309"
      lineWidth={2}
      points={points}
    />
  );
}