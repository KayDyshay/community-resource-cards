
import React, { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Text } from "@react-three/drei";
import { Character } from "./types";
import * as THREE from "three";

interface GameWorldProps {
  character: Character | null;
}

// Create a simple city layout
const City = () => {
  return (
    <group>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      
      {/* Buildings */}
      {Array.from({ length: 20 }).map((_, i) => {
        const x = (Math.random() - 0.5) * 60;
        const z = (Math.random() - 0.5) * 60;
        const height = 3 + Math.random() * 10;
        const width = 2 + Math.random() * 4;
        const depth = 2 + Math.random() * 4;
        const color = new THREE.Color().setHSL(Math.random() * 0.2 + 0.5, 0.5, 0.5);
        
        return (
          <mesh key={i} position={[x, height / 2, z]} castShadow receiveShadow>
            <boxGeometry args={[width, height, depth]} />
            <meshStandardMaterial color={color.getHex()} />
          </mesh>
        );
      })}
      
      {/* Roads */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[10, 100]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[100, 10]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
    </group>
  );
};

// Fixed: Using forwardRef to properly handle the ref
const PlayerCharacter = React.forwardRef<THREE.Group, { position: [number, number, number] }>(
  function PlayerCharacter({ position }, ref) {
    useFrame((state, delta) => {
      if (ref && typeof ref === 'object' && ref.current) {
        ref.current.rotation.y += delta * 0.5;
      }
    });

    return (
      <group ref={ref} position={position}>
        {/* Body */}
        <mesh castShadow>
          <capsuleGeometry args={[0.5, 1, 4, 8]} />
          <meshStandardMaterial color="#9b87f5" />
        </mesh>
        
        {/* Head */}
        <mesh position={[0, 1.2, 0]} castShadow>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#f5d787" />
        </mesh>
      </group>
    );
  }
);

// NPC for quest giver
const QuestGiver = ({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.2;
    }
  });
  
  return (
    <group ref={ref} position={position}>
      <Text
        position={[0, 2.5, 0]}
        fontSize={0.5}
        color="yellow"
        anchorX="center"
        anchorY="middle"
      >
        QUEST GIVER
      </Text>
      <mesh castShadow>
        <capsuleGeometry args={[0.5, 1, 4, 8]} />
        <meshStandardMaterial color="#f57887" />
      </mesh>
      <mesh position={[0, 1.2, 0]} castShadow>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#f5d787" />
      </mesh>
    </group>
  );
};

const GameWorld: React.FC<GameWorldProps> = ({ character }) => {
  const { camera } = useThree();
  const playerRef = useRef<THREE.Group>(null);
  
  // Player position state
  const [playerPosition, setPlayerPosition] = useState<[number, number, number]>([0, 0.8, 0]);
  
  // Keyboard state
  const [keys, setKeys] = useState({
    w: false,
    a: false,
    s: false,
    d: false
  });
  
  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['w', 'a', 's', 'd'].includes(e.key.toLowerCase())) {
        setKeys(prevKeys => ({ ...prevKeys, [e.key.toLowerCase()]: true }));
      }
    };
    
    const handleKeyUp = (e: KeyboardEvent) => {
      if (['w', 'a', 's', 'd'].includes(e.key.toLowerCase())) {
        setKeys(prevKeys => ({ ...prevKeys, [e.key.toLowerCase()]: false }));
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  
  // Update player position based on key presses
  useFrame((state, delta) => {
    const moveSpeed = 5 * delta;
    let newX = playerPosition[0];
    let newZ = playerPosition[2];
    
    if (keys.w) newZ -= moveSpeed;
    if (keys.s) newZ += moveSpeed;
    if (keys.a) newX -= moveSpeed;
    if (keys.d) newX += moveSpeed;
    
    if (newX !== playerPosition[0] || newZ !== playerPosition[2]) {
      setPlayerPosition([newX, playerPosition[1], newZ]);
      
      // Update camera to follow player
      camera.position.x = newX + 5;
      camera.position.z = newZ + 10;
      camera.lookAt(newX, 0, newZ);
    }
  });
  
  // Set initial camera position
  React.useEffect(() => {
    camera.position.set(5, 5, 10);
    camera.lookAt(0, 0, 0);
  }, [camera]);
  
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      
      {/* World elements */}
      <City />
      <PlayerCharacter position={playerPosition} ref={playerRef} />
      <QuestGiver position={[4, 0.8, 4]} />
    </>
  );
};

export default GameWorld;
