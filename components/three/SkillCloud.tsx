/* eslint-disable react-hooks/purity */
"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { skillCategories, Skill } from "@/data/skills";

function CloudNode({ position, skill, color }: { position: [number, number, number], skill: Skill, color: string }) {
  const ref = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (ref.current) {
      // Make the HTML nodes always face the camera
      ref.current.quaternion.copy(state.camera.quaternion);
    }
  });

  return (
    <group position={position} ref={ref}>
      <Html center transform zIndexRange={[100, 0]}>
        <div 
          className="px-3 py-1.5 rounded-lg border backdrop-blur-md whitespace-nowrap transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg"
          style={{ 
            backgroundColor: 'rgba(10, 15, 30, 0.6)',
            borderColor: color,
            color: '#fff',
            boxShadow: `0 4px 20px ${color}30`
          }}
        >
          <div className="text-xs font-bold">{skill.name}</div>
          <div className="text-[10px] text-slate-300 font-mono text-center opacity-80">{skill.level}</div>
        </div>
      </Html>
    </group>
  );
}

function CloudGroup() {
  const groupRef = useRef<THREE.Group>(null!);

  const nodes = useMemo(() => {
    const allSkills: (Skill & { catColor: string })[] = [];
    skillCategories.forEach((cat) => {
      cat.skills.forEach(skill => {
        const color = cat.color === "cyan" ? "#00d4ff" 
          : cat.color === "emerald" ? "#00ff88" 
          : cat.color === "purple" ? "#8b5cf6" 
          : cat.color === "blue" ? "#3b82f6" 
          : "#f59e0b";
        allSkills.push({ ...skill, catColor: color });
      });
    });

    const count = allSkills.length;
    return allSkills.map((skill, i) => {
      // Distribute evenly on a sphere using Fibonacci lattice
      const phi = Math.acos(1 - 2 * (i + 0.5) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
      const radius = 5;
      
      return {
        position: [
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        ] as [number, number, number],
        skill,
        color: skill.catColor
      };
    });
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <CloudNode key={i} position={node.position} skill={node.skill} color={node.color} />
      ))}
      
      {/* Central core */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#00d4ff" wireframe transparent opacity={0.1} />
      </mesh>
      
      {/* Connection lines (optional - can be performance intensive) */}
      <lineSegments>
        <edgesGeometry args={[new THREE.IcosahedronGeometry(3, 1)]} />
        <lineBasicMaterial color="#00d4ff" transparent opacity={0.05} />
      </lineSegments>
    </group>
  );
}

export default function SkillCloud() {
  return (
    <div className="w-full h-full min-h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <CloudGroup />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={false} 
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
