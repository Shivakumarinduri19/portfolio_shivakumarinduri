"use client";

import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Ring } from "@react-three/drei";
import * as THREE from "three";

function EarthSphere() {
  const earthRef = useRef<THREE.Mesh>(null!);
  const atmosphereRef = useRef<THREE.Mesh>(null!);

  const earthMaterial = useMemo(() => {
    // Create a procedural earth-like material using vertex colors
    const material = new THREE.MeshPhongMaterial({
      color: new THREE.Color(0x0a4a6e),
      emissive: new THREE.Color(0x001a2e),
      emissiveIntensity: 0.3,
      specular: new THREE.Color(0x00d4ff),
      shininess: 20,
      wireframe: false,
    });
    return material;
  }, []);

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group>
      {/* Main Earth sphere */}
      <mesh ref={earthRef} material={earthMaterial}>
        <sphereGeometry args={[2, 64, 64]} />
      </mesh>

      {/* Atmosphere glow */}
      <mesh ref={atmosphereRef} scale={1.05}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial
          color={new THREE.Color(0x00d4ff)}
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Outer glow layer */}
      <mesh scale={1.12}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial
          color={new THREE.Color(0x00d4ff)}
          transparent
          opacity={0.02}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Grid lines overlay */}
      <mesh rotation={[0, 0, 0]}>
        <sphereGeometry args={[2.01, 24, 12]} />
        <meshBasicMaterial
          color={new THREE.Color(0x00d4ff)}
          transparent
          opacity={0.08}
          wireframe
        />
      </mesh>
    </group>
  );
}

function OrbitRing({ radius, speed, tilt }: { radius: number; speed: number; tilt: number }) {
  const ref = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (ref.current) ref.current.rotation.z += speed;
  });

  return (
    <group ref={ref} rotation={[tilt, 0, 0]}>
      <mesh>
        <torusGeometry args={[radius, 0.005, 4, 80]} />
        <meshBasicMaterial color={0x00d4ff} transparent opacity={0.2} />
      </mesh>
      {/* Satellite dot */}
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial color={0x00ff88} />
      </mesh>
    </group>
  );
}

function Particles() {
  const count = 800;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 8;
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
      <pointsMaterial size={0.04} color={0x88ccff} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 5, 5]} intensity={1.5} color={0xffffff} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color={0x00d4ff} />
      <pointLight position={[0, 0, 8]} intensity={0.3} color={0x0066ff} />

      {/* Earth */}
      <EarthSphere />

      {/* Orbit rings */}
      <OrbitRing radius={3.0} speed={0.008} tilt={0.3} />
      <OrbitRing radius={3.5} speed={-0.005} tilt={0.8} />
      <OrbitRing radius={4.0} speed={0.004} tilt={1.2} />

      {/* Star particles */}
      <Particles />
    </>
  );
}

export default function EarthGlobe() {
  return (
    <div className="w-full h-full">
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
