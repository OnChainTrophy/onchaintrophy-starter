/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';

const Model1 = () => {
  const { nodes, materials } = useGLTF('/assets/sora.glb') as any;
  const ref = useRef<THREE.Mesh>(null);
  console.log(nodes, materials.values);

  const ref1 = useRef<THREE.Mesh>(null);
  const ref2 = useRef<THREE.Mesh>(null);
  const ref3 = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref1.current) ref1.current.rotation.y += 0.01; //main
    if (ref2.current) ref2.current.rotation.y += 0.01; // bottom
    if (ref3.current) ref3.current.rotation.y -= 0.005;
  });

  useThree((context) => {
    context.camera.position.y = 0.8;
    context.camera.position.z = 3.8;
    //context.camera.lookAt(0, 0, 0);
  });

  return (
    <scene scale={2.3} position={[0, -5, 0]}>
      <group {...nodes.Sora_Logo_Gold_Black_Sologltf}>
        <mesh
          ref={ref1}
          geometry={nodes.wing1.geometry}
          material={materials.logotop}
        />
        <mesh
          ref={ref2}
          geometry={nodes.wing2.geometry}
          material={materials.logoedges}
        />
      </group>
      <group {...nodes.Base_Updategltf}>
        <mesh
          ref={ref3}
          geometry={nodes.bottom1.geometry}
          material={materials.sidemesh}
        />
        <mesh
          geometry={nodes.bottom2.geometry}
          material={materials.topandbottom}
        />
        <mesh geometry={nodes.bottom3.geometry} material={materials.interior} />
        <mesh geometry={nodes.bottom3.geometry} material={materials.interior} />
      </group>

      <mesh
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        scale={[0.5, 1, 0.5]}
        position={[0, 1.5, 0]}
      />

      <pointLight
        position={[-0.651, 1.899, 0.311]}
        intensity={10}
        distance={10}
        decay={0}
        color={'#FFF'}
      />
      <pointLight
        position={[0, 4, 0]}
        intensity={10}
        distance={10}
        decay={0}
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

export default Model1;
