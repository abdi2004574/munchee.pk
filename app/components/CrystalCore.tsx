'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Crystal() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y = -state.clock.elapsedTime * 0.1;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      glowRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <group>
        {/* Main Crystal */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.4, 1]} />
          <MeshTransmissionMaterial
            backside
            samples={6}
            resolution={512}
            transmission={0.95}
            roughness={0.05}
            thickness={0.5}
            ior={1.5}
            chromaticAberration={0.3}
            anisotropy={0.3}
            distortion={0.2}
            distortionScale={0.2}
            color="#D4A843"
          />
        </mesh>

        {/* Inner Glow Core */}
        <mesh ref={glowRef} scale={0.6}>
          <icosahedronGeometry args={[1, 0]} />
          <meshBasicMaterial color="#D4A843" transparent opacity={0.15} />
        </mesh>

        {/* Outer Ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.2, 0.02, 16, 100]} />
          <meshBasicMaterial color="#D4A843" transparent opacity={0.3} />
        </mesh>

        {/* Second Ring */}
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[2.5, 0.015, 16, 100]} />
          <meshBasicMaterial color="#0A4DA6" transparent opacity={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

function ParticleField() {
  const count = 200;
  const particlesRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const isGold = Math.random() > 0.5;
      cols[i * 3] = isGold ? 0.83 : 0.04;
      cols[i * 3 + 1] = isGold ? 0.66 : 0.3;
      cols[i * 3 + 2] = isGold ? 0.26 : 0.65;
    }
    return cols;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function CrystalCore() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#D4A843" />
        <pointLight position={[-5, -3, 3]} intensity={0.4} color="#0A4DA6" />
        <spotLight position={[0, 10, 0]} intensity={0.5} color="#FFD24D" angle={0.3} penumbra={1} />
        <Crystal />
        <ParticleField />
        <Stars radius={50} depth={50} count={1000} factor={3} saturation={0} fade speed={1} />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
