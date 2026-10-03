/* eslint-disable react-hooks/purity */
"use client";

import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

function PointCloudEarth() {
  const earthRef = useRef<THREE.Points>(null!);
  
  const { positions, colors } = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const colorA = new THREE.Color(0x00d4ff); // Cyan
    const colorB = new THREE.Color(0x00ff88); // Emerald

    for (let i = 0; i < count; i++) {
      // Golden spiral method for even distribution
      const phi = Math.acos(1 - 2 * (i + 0.5) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
      
      const r = 2.0;
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      
      // Randomly mix colors
      const mixRatio = Math.random();
      const mixedColor = colorA.clone().lerp(colorB, mixRatio);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    return { positions, colors };
  }, []);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
      earthRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group>
      {/* Point Cloud Sphere */}
      <points ref={earthRef}>
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
          size={0.03} 
          vertexColors 
          transparent 
          opacity={0.8} 
          sizeAttenuation 
        />
      </points>

      {/* Wireframe Core */}
      <mesh>
        <icosahedronGeometry args={[1.9, 2]} />
        <meshBasicMaterial 
          color={0x00d4ff} 
          wireframe 
          transparent 
          opacity={0.05} 
        />
      </mesh>
    </group>
  );
}

function OrbitRing({ radius, speed, tilt, color }: { radius: number; speed: number; tilt: number, color: number }) {
  const ref = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (ref.current) ref.current.rotation.z += speed;
  });

  return (
    <group ref={ref} rotation={[tilt, 0, 0]}>
      <mesh>
        <torusGeometry args={[radius, 0.005, 4, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
      {/* Satellite Node */}
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
}

function DataParticles() {
  const count = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 5 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color={0x88ccff} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      
      {/* Main interactive earth */}
      <PointCloudEarth />

      {/* Orbits representing satellites/data streams */}
      <OrbitRing radius={2.8} speed={0.008} tilt={0.3} color={0x00d4ff} />
      <OrbitRing radius={3.4} speed={-0.005} tilt={0.8} color={0x00ff88} />
      <OrbitRing radius={4.2} speed={0.003} tilt={1.2} color={0x88ccff} />

      {/* Floating ambient data points */}
      <DataParticles />
      
      {/* Interactive controls */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

export default function EarthGlobe() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

