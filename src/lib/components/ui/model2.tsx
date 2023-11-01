/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';

const Model2 = () => {
  const { nodes, materials } = useGLTF('/assets/ocm.glb') as any;
  const ref = useRef<THREE.Mesh>(null);

  const accumulatedRotation = useRef(0); // To keep track of total rotation
  const isPaused = useRef(false); // To check if the rotation is paused

  const ref1 = useRef<THREE.Mesh>(null);
  const ref2 = useRef<THREE.Mesh>(null);
  const ref3 = useRef<THREE.Mesh>(null);
  const ref4 = useRef<THREE.Mesh>(null);
  const ref5 = useRef<THREE.Mesh>(null);
  const ref6 = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (isPaused.current) return; // Don't rotate if paused

    // Check if ref1 has completed 2 full rotations
    if (ref1.current && accumulatedRotation.current >= 4 * Math.PI) {
      isPaused.current = true; // Pause rotations

      // Resume after 1.5 seconds
      setTimeout(() => {
        isPaused.current = false;
        accumulatedRotation.current = 0; // Reset accumulated rotation
      }, 1500);
      return;
    }

    // Normal rotation logic
    if (ref1.current) {
      ref1.current.rotation.y -= 0.0075;
      accumulatedRotation.current += 0.0075; // Update accumulated rotation
    }
    if (ref2.current) ref2.current.rotation.y += 0.0075; // bottom b
    if (ref3.current) ref3.current.rotation.y -= 0.015; //top b
    if (ref4.current) ref4.current.rotation.y += 0.0075; // ears
    if (ref5.current) ref5.current.rotation.y += 0.0075; // outer
    if (ref6.current) ref6.current.rotation.y -= 0.005; // base
  });

  useThree((context) => {
    context.camera.position.y = 0.8;
    context.camera.position.z = 3.8;
    //context.camera.lookAt(0, 2, 0);
  });

  return (
    <scene scale={2.3} position={[0, -0.5, 0]}>
      <group {...nodes.OCM_Trophygltf}>
        <group {...nodes.root}>
          <mesh
            ref={ref1}
            geometry={nodes.main.geometry}
            material={materials.Material5}
          />
          <mesh
            ref={ref2}
            geometry={nodes.main_point1.geometry}
            material={materials.Material7}
          />
          <mesh
            ref={ref3}
            geometry={nodes.main_point2.geometry}
            material={materials.Material10}
          />
          <mesh
            ref={ref4}
            geometry={nodes.point.geometry}
            material={materials.Material11}
          />
          <mesh
            ref={ref5}
            geometry={nodes.ring.geometry}
            material={materials.Material9}
          />
        </group>
      </group>
      <group {...nodes.New_Base_Testgltf}>
        <group {...nodes.root1}>
          <mesh
            ref={ref6}
            geometry={nodes.mesh_0.geometry}
            material={materials.Material8}
          />
          <mesh
            geometry={nodes.mesh_0_1.geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes.mesh_0_2.geometry}
            material={materials.Material3}
          />
          <mesh
            geometry={nodes.mesh_0_3.geometry}
            material={materials.Material6}
            scale={[1, 1.12, 1]}
          />
        </group>
      </group>

      <mesh
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        scale={[0.5, 1, 0.5]}
        position={[0, -0.498, 0]}
      />
      <pointLight
        position={[0.002, 1.655, 0.093]}
        intensity={0.1}
        distance={1.82}
        decay={6.86}
        color={'#FFF'}
      />
      <pointLight
        position={[0, 0.426, 0]}
        intensity={3.18}
        distance={0}
        decay={2.64}
        color={'#FFF'}
      />
      <pointLight
        position={[0.309, 0.172, 0.093]}
        intensity={0.36}
        distance={0.8}
        decay={4.86}
        color={'#FFF'}
      />
      <directionalLight
        position={[-0.502, -0.445, 0.936]}
        intensity={1.74}
        color={'#FFF'}
      />
    </scene>
  );
};

export default Model2;
