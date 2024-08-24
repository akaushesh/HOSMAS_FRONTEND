import * as React from 'react';
import { useGLTF } from '@react-three/drei';
import type { Object3D,Material,Vector3 } from 'three';


interface GLTFResult {
  nodes: Record<string, Object3D>;
  materials: Record<string, Material>;
}


interface ModelProps {
  position: Vector3 | [number, number, number];
  // rotation: Vector3 | [number, number, number];
}

export default function OHostel(props:ModelProps): React.JSX.Element {
 
  const { nodes, materials } = useGLTF('/r3f/ohostel.glb') as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group position={[-0.001, 1.947, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane.geometry} material={materials['peach.001']} position={[2.48, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane001.geometry} material={materials['Material.004']} position={[0.241, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane002.geometry} material={materials['Material.004']} position={[4.778, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-0.001, 3.876, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane003.geometry} material={materials['peach.001']} position={[2.48, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane004.geometry} material={materials['Material.004']} position={[0.241, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane005.geometry} material={materials['Material.004']} position={[4.778, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-0.001, 5.805, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane006.geometry} material={materials['peach.001']} position={[2.48, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane007.geometry} material={materials['Material.004']} position={[0.241, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane008.geometry} material={materials['Material.004']} position={[4.778, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-0.001, 7.733, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane009.geometry} material={materials['peach.001']} position={[2.48, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane010.geometry} material={materials['Material.004']} position={[0.241, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane011.geometry} material={materials['Material.004']} position={[4.778, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-0.001, 9.662, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane012.geometry} material={materials['peach.001']} position={[2.48, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane013.geometry} material={materials['Material.004']} position={[0.241, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane014.geometry} material={materials['Material.004']} position={[4.778, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-0.001, 11.591, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane015.geometry} material={materials['peach.001']} position={[2.48, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane016.geometry} material={materials['Material.004']} position={[0.241, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane017.geometry} material={materials['Material.004']} position={[4.778, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-0.001, 13.52, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane018.geometry} material={materials['peach.001']} position={[2.48, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane019.geometry} material={materials['Material.004']} position={[0.241, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane020.geometry} material={materials['Material.004']} position={[4.778, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-0.001, 15.449, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane021.geometry} material={materials['peach.001']} position={[2.48, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane022.geometry} material={materials['Material.004']} position={[0.241, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane023.geometry} material={materials['Material.004']} position={[4.778, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[5.809, 0.161, -4.425]} rotation={[0, 1.571, 0]} scale={[1.319, 0.951, 0.951]}>
        <group position={[0, 0, 1.198]}>
          <mesh geometry={nodes.Window010_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window010_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window010_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window010_4.geometry} material={materials['Marble.001']} />
        </group>
      </group>
      <group position={[5.733, 0.194, -11.145]} rotation={[0, 1.571, 0]} scale={[0.642, 1.08, 0.823]}>
        <group position={[0, 0, 1.383]}>
          <mesh geometry={nodes.Window011_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window011_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window011_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window011_4.geometry} material={materials['Marble.002']} />
        </group>
      </group>
      <group position={[5.733, 0.194, -15.506]} rotation={[0, 1.571, 0]} scale={[0.642, 1.08, 0.823]}>
        <group position={[0, 0, 1.383]}>
          <mesh geometry={nodes.Window012_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window012_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window012_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window012_4.geometry} material={materials['Marble.002']} />
        </group>
      </group>
      <group position={[5.733, 0.194, -19.875]} rotation={[0, 1.571, 0]} scale={[0.642, 1.08, 0.823]}>
        <group position={[0, 0, 1.383]}>
          <mesh geometry={nodes.Window013_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window013_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window013_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window013_4.geometry} material={materials['Marble.002']} />
        </group>
      </group>
      <group position={[5.733, 0.194, -24.253]} rotation={[0, 1.571, 0]} scale={[0.642, 1.08, 0.823]}>
        <group position={[0, 0, 1.383]}>
          <mesh geometry={nodes.Window014_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window014_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window014_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window014_4.geometry} material={materials['Marble.002']} />
        </group>
      </group>
      <group position={[4.85, 2.332, -13.296]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane030.geometry} material={materials['peach.001']} position={[1.341, 1, 1.139]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane031.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane032.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[4.85, 4.329, -13.296]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane033.geometry} material={materials['peach.001']} position={[1.341, 1, 1.139]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane034.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane035.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[4.85, 6.271, -13.296]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane036.geometry} material={materials['peach.001']} position={[1.341, 1, 1.139]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane037.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane038.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[4.85, 8.12, -13.296]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane039.geometry} material={materials['peach.001']} position={[1.341, 1, 1.139]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane040.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane041.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[4.85, 10.045, -13.296]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane042.geometry} material={materials['peach.001']} position={[1.341, 1, 1.139]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane043.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane044.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[4.85, 11.972, -13.296]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane045.geometry} material={materials['peach.001']} position={[1.341, 1, 1.139]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane046.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane047.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[4.85, 13.838, -13.296]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane048.geometry} material={materials['peach.001']} position={[1.341, 1, 1.139]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane049.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane050.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[4.85, 15.782, -13.296]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane051.geometry} material={materials['peach.001']} position={[1.341, 1, 1.139]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane052.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane053.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[4.85, 2.332, -22.06]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane054.geometry} material={materials['peach.001']} position={[1.341, 1, 1.139]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane055.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane056.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[4.85, 4.329, -22.06]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane057.geometry} material={materials['peach.001']} position={[1.341, 1, 1.139]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane058.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane059.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[4.85, 6.271, -22.06]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane060.geometry} material={materials['peach.001']} position={[1.341, 1, 1.139]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane061.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane062.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[4.85, 8.12, -22.06]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane063.geometry} material={materials['peach.001']} position={[1.341, 1, 1.139]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane064.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane065.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[4.85, 10.045, -22.06]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane066.geometry} material={materials['peach.001']} position={[1.341, 1, 1.139]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane067.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane068.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[4.85, 11.972, -22.06]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane069.geometry} material={materials['peach.001']} position={[1.341, 1, 1.139]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane070.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane071.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[4.85, 13.838, -22.06]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane072.geometry} material={materials['peach.001']} position={[1.341, 1, 1.139]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane073.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane074.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[4.85, 15.782, -22.06]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.383]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane075.geometry} material={materials['peach.001']} position={[1.341, 1, 1.139]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane076.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane077.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.139]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[4.833, 0.194, -32.4]} scale={[0.923, 1.036, 0.823]}>
        <group position={[1.234, 0, 0]}>
          <mesh geometry={nodes.Window015_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window015_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window015_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window015_4.geometry} material={materials['Marble.002']} />
        </group>
      </group>
      <group position={[0.114, 2.254, -33.425]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane078.geometry} material={materials['peach.001']} position={[2.48, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane079.geometry} material={materials['Material.004']} position={[0.241, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane080.geometry} material={materials['Material.004']} position={[4.778, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[0.114, 4.182, -33.425]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane081.geometry} material={materials['peach.001']} position={[2.48, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane082.geometry} material={materials['Material.004']} position={[0.241, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane083.geometry} material={materials['Material.004']} position={[4.778, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[0.114, 6.111, -33.425]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane084.geometry} material={materials['peach.001']} position={[2.48, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane085.geometry} material={materials['Material.004']} position={[0.241, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane086.geometry} material={materials['Material.004']} position={[4.778, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[0.114, 8.04, -33.425]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane087.geometry} material={materials['peach.001']} position={[2.48, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane088.geometry} material={materials['Material.004']} position={[0.241, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane089.geometry} material={materials['Material.004']} position={[4.778, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[0.114, 9.969, -33.425]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane090.geometry} material={materials['peach.001']} position={[2.48, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane091.geometry} material={materials['Material.004']} position={[0.241, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane092.geometry} material={materials['Material.004']} position={[4.778, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[0.114, 11.898, -33.425]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane093.geometry} material={materials['peach.001']} position={[2.48, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane094.geometry} material={materials['Material.004']} position={[0.241, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane095.geometry} material={materials['Material.004']} position={[4.778, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[0.114, 13.826, -33.425]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane096.geometry} material={materials['peach.001']} position={[2.48, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane097.geometry} material={materials['Material.004']} position={[0.241, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane098.geometry} material={materials['Material.004']} position={[4.778, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[0.114, 15.755, -33.425]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.775, 0, 0]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane099.geometry} material={materials['peach.001']} position={[2.48, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane100.geometry} material={materials['Material.004']} position={[0.241, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane101.geometry} material={materials['Material.004']} position={[4.778, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[1.541, 2.332, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[-1.572, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[-0.655, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane103.geometry} material={materials['peach.001']} position={[0.789, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[5.006, 1, 1]} />
        <mesh geometry={nodes.Plane104.geometry} material={materials['Material.004']} position={[-1.743, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
        <mesh geometry={nodes.Plane105.geometry} material={materials['Material.004']} position={[3.389, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
      </group>
      <group position={[1.541, 4.329, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[-1.572, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[-0.655, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane106.geometry} material={materials['peach.001']} position={[0.789, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[5.006, 1, 1]} />
        <mesh geometry={nodes.Plane107.geometry} material={materials['Material.004']} position={[-1.743, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
        <mesh geometry={nodes.Plane108.geometry} material={materials['Material.004']} position={[3.389, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
      </group>
      <group position={[1.541, 6.271, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[-1.572, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[-0.655, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane109.geometry} material={materials['peach.001']} position={[0.789, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[5.006, 1, 1]} />
        <mesh geometry={nodes.Plane110.geometry} material={materials['Material.004']} position={[-1.743, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
        <mesh geometry={nodes.Plane111.geometry} material={materials['Material.004']} position={[3.389, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
      </group>
      <group position={[1.541, 8.12, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[-1.572, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[-0.655, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane112.geometry} material={materials['peach.001']} position={[0.789, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[5.006, 1, 1]} />
        <mesh geometry={nodes.Plane113.geometry} material={materials['Material.004']} position={[-1.743, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
        <mesh geometry={nodes.Plane114.geometry} material={materials['Material.004']} position={[3.389, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
      </group>
      <group position={[1.541, 10.045, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[-1.572, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[-0.655, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane115.geometry} material={materials['peach.001']} position={[0.789, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[5.006, 1, 1]} />
        <mesh geometry={nodes.Plane116.geometry} material={materials['Material.004']} position={[-1.743, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
        <mesh geometry={nodes.Plane117.geometry} material={materials['Material.004']} position={[3.389, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
      </group>
      <group position={[1.541, 11.972, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[-1.572, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[-0.655, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane118.geometry} material={materials['peach.001']} position={[0.789, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[5.006, 1, 1]} />
        <mesh geometry={nodes.Plane119.geometry} material={materials['Material.004']} position={[-1.743, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
        <mesh geometry={nodes.Plane120.geometry} material={materials['Material.004']} position={[3.389, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
      </group>
      <group position={[1.541, 13.838, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[-1.572, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[-0.655, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane121.geometry} material={materials['peach.001']} position={[0.789, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[5.006, 1, 1]} />
        <mesh geometry={nodes.Plane122.geometry} material={materials['Material.004']} position={[-1.743, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
        <mesh geometry={nodes.Plane123.geometry} material={materials['Material.004']} position={[3.389, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
      </group>
      <group position={[1.541, 15.782, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[-1.572, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[-0.655, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane124.geometry} material={materials['peach.001']} position={[0.789, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[5.006, 1, 1]} />
        <mesh geometry={nodes.Plane125.geometry} material={materials['Material.004']} position={[-1.743, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
        <mesh geometry={nodes.Plane126.geometry} material={materials['Material.004']} position={[3.389, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
      </group>
      <group position={[-7.223, 2.332, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0.216, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.133, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane127.geometry} material={materials['peach.001']} position={[1.937, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[5.006, 1, 1]} />
        <mesh geometry={nodes.Plane128.geometry} material={materials['Material.004']} position={[-0.595, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
        <mesh geometry={nodes.Plane129.geometry} material={materials['Material.004']} position={[4.536, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
      </group>
      <group position={[-7.223, 4.329, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0.216, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.133, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane130.geometry} material={materials['peach.001']} position={[1.937, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[5.006, 1, 1]} />
        <mesh geometry={nodes.Plane131.geometry} material={materials['Material.004']} position={[-0.595, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
        <mesh geometry={nodes.Plane132.geometry} material={materials['Material.004']} position={[4.536, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
      </group>
      <group position={[-7.223, 6.271, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0.216, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.133, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane133.geometry} material={materials['peach.001']} position={[1.937, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[5.006, 1, 1]} />
        <mesh geometry={nodes.Plane134.geometry} material={materials['Material.004']} position={[-0.595, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
        <mesh geometry={nodes.Plane135.geometry} material={materials['Material.004']} position={[4.536, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
      </group>
      <group position={[-7.223, 8.12, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0.216, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.133, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane136.geometry} material={materials['peach.001']} position={[1.937, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[5.006, 1, 1]} />
        <mesh geometry={nodes.Plane137.geometry} material={materials['Material.004']} position={[-0.595, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
        <mesh geometry={nodes.Plane138.geometry} material={materials['Material.004']} position={[4.536, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
      </group>
      <group position={[-7.223, 10.045, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0.216, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.133, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane139.geometry} material={materials['peach.001']} position={[1.937, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[5.006, 1, 1]} />
        <mesh geometry={nodes.Plane140.geometry} material={materials['Material.004']} position={[-0.595, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
        <mesh geometry={nodes.Plane141.geometry} material={materials['Material.004']} position={[4.536, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
      </group>
      <group position={[-7.223, 11.972, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0.216, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.133, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane142.geometry} material={materials['peach.001']} position={[1.937, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[5.006, 1, 1]} />
        <mesh geometry={nodes.Plane143.geometry} material={materials['Material.004']} position={[-0.595, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
        <mesh geometry={nodes.Plane144.geometry} material={materials['Material.004']} position={[4.536, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
      </group>
      <group position={[-7.223, 13.838, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0.216, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.133, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane145.geometry} material={materials['peach.001']} position={[1.937, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[5.006, 1, 1]} />
        <mesh geometry={nodes.Plane146.geometry} material={materials['Material.004']} position={[-0.595, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
        <mesh geometry={nodes.Plane147.geometry} material={materials['Material.004']} position={[4.536, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
      </group>
      <group position={[-7.223, 15.782, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0.216, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[1.133, 0, 0]} scale={[1.131, 1, 1]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane148.geometry} material={materials['peach.001']} position={[1.937, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[5.006, 1, 1]} />
        <mesh geometry={nodes.Plane149.geometry} material={materials['Material.004']} position={[-0.595, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
        <mesh geometry={nodes.Plane150.geometry} material={materials['Material.004']} position={[4.536, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.131, 1, 1]} />
      </group>
      <group position={[-17.806, 2.286, -40.601]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane151.geometry} material={materials['peach.001']} position={[1.341, 1, -1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane152.geometry} material={materials['Material.004']} position={[-0.898, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane153.geometry} material={materials['Material.004']} position={[3.639, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-17.806, 4.215, -40.601]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane154.geometry} material={materials['peach.001']} position={[1.341, 1, -1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane155.geometry} material={materials['Material.004']} position={[-0.898, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane156.geometry} material={materials['Material.004']} position={[3.639, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-17.806, 6.144, -40.601]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane157.geometry} material={materials['peach.001']} position={[1.341, 1, -1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane158.geometry} material={materials['Material.004']} position={[-0.898, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane159.geometry} material={materials['Material.004']} position={[3.639, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-17.806, 8.073, -40.601]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane160.geometry} material={materials['peach.001']} position={[1.341, 1, -1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane161.geometry} material={materials['Material.004']} position={[-0.898, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane162.geometry} material={materials['Material.004']} position={[3.639, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-17.806, 10.002, -40.601]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane163.geometry} material={materials['peach.001']} position={[1.341, 1, -1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane164.geometry} material={materials['Material.004']} position={[-0.898, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane165.geometry} material={materials['Material.004']} position={[3.639, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-17.806, 11.93, -40.601]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane166.geometry} material={materials['peach.001']} position={[1.341, 1, -1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane167.geometry} material={materials['Material.004']} position={[-0.898, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane168.geometry} material={materials['Material.004']} position={[3.639, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-17.806, 13.859, -40.601]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane169.geometry} material={materials['peach.001']} position={[1.341, 1, -1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane170.geometry} material={materials['Material.004']} position={[-0.898, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane171.geometry} material={materials['Material.004']} position={[3.639, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-17.806, 15.788, -40.601]} rotation={[0, 1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane172.geometry} material={materials['peach.001']} position={[1.341, 1, -1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane173.geometry} material={materials['Material.004']} position={[-0.898, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane174.geometry} material={materials['Material.004']} position={[3.639, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[0.024, 1.925, 0.006]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window016_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window016_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window016_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window016_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane177.geometry} material={nodes.Plane177.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane176.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[0.024, 3.873, 0.006]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window017_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window017_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window017_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window017_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane179.geometry} material={nodes.Plane179.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane178.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[0.024, 5.821, 0.006]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window018_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window018_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window018_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window018_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane181.geometry} material={nodes.Plane181.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane180.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[0.024, 7.769, 0.006]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window019_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window019_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window019_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window019_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane183.geometry} material={nodes.Plane183.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane182.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[0.024, 9.717, 0.006]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window020_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window020_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window020_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window020_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane185.geometry} material={nodes.Plane185.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane184.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[0.024, 11.665, 0.006]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window021_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window021_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window021_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window021_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane187.geometry} material={nodes.Plane187.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane186.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[0.024, 13.613, 0.006]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window022_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window022_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window022_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window022_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane189.geometry} material={nodes.Plane189.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane188.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[-29.419, 0.194, -32.726]} rotation={[0, -1.571, 0]} scale={[0.642, 1.08, 0.823]}>
        <group position={[0, 0, 1.521]}>
          <mesh geometry={nodes.Window023_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window023_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window023_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window023_4.geometry} material={materials['Marble.001']} />
        </group>
      </group>
      <group position={[-29.419, 0.194, -28.366]} rotation={[0, -1.571, 0]} scale={[0.642, 1.08, 0.823]}>
        <group position={[0, 0, 1.521]}>
          <mesh geometry={nodes.Window024_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window024_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window024_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window024_4.geometry} material={materials['Marble.001']} />
        </group>
      </group>
      <group position={[-29.419, 0.194, -23.997]} rotation={[0, -1.571, 0]} scale={[0.642, 1.08, 0.823]}>
        <group position={[0, 0, 1.521]}>
          <mesh geometry={nodes.Window025_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window025_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window025_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window025_4.geometry} material={materials['Marble.001']} />
        </group>
      </group>
      <group position={[-29.419, 0.194, -19.619]} rotation={[0, -1.571, 0]} scale={[0.642, 1.08, 0.823]}>
        <group position={[0, 0, 1.521]}>
          <mesh geometry={nodes.Window026_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window026_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window026_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window026_4.geometry} material={materials['Marble.001']} />
        </group>
      </group>
      <group position={[-28.536, 2.332, -30.575]} rotation={[0, -1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane195.geometry} material={materials['peach.001']} position={[1.341, 1, 1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane196.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane197.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-28.536, 4.329, -30.575]} rotation={[0, -1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane198.geometry} material={materials['peach.001']} position={[1.341, 1, 1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane199.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane200.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-28.536, 6.271, -30.575]} rotation={[0, -1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane201.geometry} material={materials['peach.001']} position={[1.341, 1, 1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane202.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane203.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-28.536, 8.12, -30.575]} rotation={[0, -1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane204.geometry} material={materials['peach.001']} position={[1.341, 1, 1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane205.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane206.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-28.536, 10.045, -30.575]} rotation={[0, -1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane207.geometry} material={materials['peach.001']} position={[1.341, 1, 1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane208.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane209.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-28.536, 11.972, -30.575]} rotation={[0, -1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane210.geometry} material={materials['peach.001']} position={[1.341, 1, 1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane211.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane212.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-28.536, 13.838, -30.575]} rotation={[0, -1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane213.geometry} material={materials['peach.001']} position={[1.341, 1, 1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane214.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane215.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-28.536, 15.782, -30.575]} rotation={[0, -1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane216.geometry} material={materials['peach.001']} position={[1.341, 1, 1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane217.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane218.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-28.536, 2.332, -21.812]} rotation={[0, -1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane219.geometry} material={materials['peach.001']} position={[1.341, 1, 1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane220.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane221.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-28.536, 4.329, -21.812]} rotation={[0, -1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane222.geometry} material={materials['peach.001']} position={[1.341, 1, 1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane223.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane224.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-28.536, 6.271, -21.812]} rotation={[0, -1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane225.geometry} material={materials['peach.001']} position={[1.341, 1, 1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane226.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane227.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-28.536, 8.12, -21.812]} rotation={[0, -1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane228.geometry} material={materials['peach.001']} position={[1.341, 1, 1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane229.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane230.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-28.536, 10.045, -21.812]} rotation={[0, -1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane231.geometry} material={materials['peach.001']} position={[1.341, 1, 1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane232.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane233.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-28.536, 11.972, -21.812]} rotation={[0, -1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane234.geometry} material={materials['peach.001']} position={[1.341, 1, 1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane235.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane236.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-28.536, 13.838, -21.812]} rotation={[0, -1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane237.geometry} material={materials['peach.001']} position={[1.341, 1, 1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane238.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane239.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-28.536, 15.782, -21.812]} rotation={[0, -1.571, 0]}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane240.geometry} material={materials['peach.001']} position={[1.341, 1, 1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane241.geometry} material={materials['Material.004']} position={[-0.898, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane242.geometry} material={materials['Material.004']} position={[3.639, 1.077, 1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[0.024, 1.925, 8.478]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window027_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window027_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window027_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window027_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane244.geometry} material={nodes.Plane244.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane243.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[0.024, 3.873, 8.478]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window028_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window028_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window028_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window028_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane246.geometry} material={nodes.Plane246.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane245.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[0.024, 5.821, 8.478]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window029_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window029_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window029_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window029_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane248.geometry} material={nodes.Plane248.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane247.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[0.024, 7.769, 8.478]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window030_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window030_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window030_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window030_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane250.geometry} material={nodes.Plane250.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane249.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[0.024, 9.717, 8.478]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window031_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window031_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window031_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window031_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane252.geometry} material={nodes.Plane252.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane251.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[0.024, 11.665, 8.478]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window032_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window032_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window032_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window032_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane254.geometry} material={nodes.Plane254.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane253.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[0.024, 13.613, 8.478]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window033_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window033_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window033_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window033_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane256.geometry} material={nodes.Plane256.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane255.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[-28.789, 2.444, -37.149]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
        <group position={[0, 0, 1.521]}>
          <mesh geometry={nodes.Window034_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window034_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window034_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window034_4.geometry} material={materials['Marble.001']} />
        </group>
      </group>
      <group position={[-29.42, 0.189, -37.104]} rotation={[0, -1.571, 0]} scale={[0.646, 1.088, 0.829]}>
        <group position={[0, 0, 1.51]}>
          <mesh geometry={nodes.Window035_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window035_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window035_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window035_4.geometry} material={materials['Marble.001']} />
        </group>
      </group>
      <group position={[-19.021, 2.286, -5.191]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={-1}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane262.geometry} material={materials['peach.001']} position={[1.341, 1, -1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane263.geometry} material={materials['Material.004']} position={[-0.898, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane264.geometry} material={materials['Material.004']} position={[3.639, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-19.021, 4.215, -5.191]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={-1}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane265.geometry} material={materials['peach.001']} position={[1.341, 1, -1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane266.geometry} material={materials['Material.004']} position={[-0.898, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane267.geometry} material={materials['Material.004']} position={[3.639, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-19.021, 6.144, -5.191]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={-1}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
          <mesh geometry={nodes.CTRL_Hole149.geometry} material={materials['hidden_material.001']} position={[0, 0, -1.521]} />
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <mesh geometry={nodes.CTRL_Hole150.geometry} material={materials['hidden_material.001']} position={[0, 0, -1.521]} />
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane268.geometry} material={materials['peach.001']} position={[1.341, 1, -1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane269.geometry} material={materials['Material.004']} position={[-0.898, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane270.geometry} material={materials['Material.004']} position={[3.639, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-19.021, 8.073, -5.191]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={-1}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane271.geometry} material={materials['peach.001']} position={[1.341, 1, -1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane272.geometry} material={materials['Material.004']} position={[-0.898, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane273.geometry} material={materials['Material.004']} position={[3.639, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-19.021, 10.002, -5.191]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={-1}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane274.geometry} material={materials['peach.001']} position={[1.341, 1, -1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane275.geometry} material={materials['Material.004']} position={[-0.898, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane276.geometry} material={materials['Material.004']} position={[3.639, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-19.021, 11.93, -5.191]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={-1}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane277.geometry} material={materials['peach.001']} position={[1.341, 1, -1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane278.geometry} material={materials['Material.004']} position={[-0.898, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane279.geometry} material={materials['Material.004']} position={[3.639, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-19.021, 13.859, -5.191]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={-1}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane280.geometry} material={materials['peach.001']} position={[1.341, 1, -1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane281.geometry} material={materials['Material.004']} position={[-0.898, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane282.geometry} material={materials['Material.004']} position={[3.639, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-19.021, 15.788, -5.191]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={-1}>
        <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, -1.521]}>
            <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane283.geometry} material={materials['peach.001']} position={[1.341, 1, -1.252]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
        <mesh geometry={nodes.Plane284.geometry} material={materials['Material.004']} position={[-0.898, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Plane285.geometry} material={materials['Material.004']} position={[3.639, 1.077, -1.252]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group position={[0.024, 1.925, 42.886]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window036_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window036_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window036_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window036_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane288.geometry} material={nodes.Plane288.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane287.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[0.024, 3.873, 42.886]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window037_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window037_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window037_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window037_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane290.geometry} material={nodes.Plane290.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane289.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[0.024, 5.821, 42.886]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window038_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window038_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window038_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window038_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane292.geometry} material={nodes.Plane292.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane291.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[0.024, 7.769, 42.886]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window039_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window039_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window039_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window039_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane294.geometry} material={nodes.Plane294.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane293.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[0.024, 9.717, 42.886]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window040_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window040_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window040_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window040_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane296.geometry} material={nodes.Plane296.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane295.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[0.024, 11.665, 42.886]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window041_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window041_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window041_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window041_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane298.geometry} material={nodes.Plane298.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane297.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[0.024, 13.613, 42.886]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window042_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window042_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window042_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window042_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane300.geometry} material={nodes.Plane300.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane299.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[0.024, 0.038, 42.886]}>
        <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
          <group position={[0, 0, 1.521]}>
            <mesh geometry={nodes.Window043_1.geometry} material={materials['PVC.001']} />
            <mesh geometry={nodes.Window043_2.geometry} material={materials['Plastic.001']} />
            <mesh geometry={nodes.Window043_3.geometry} material={materials['Glass.002']} />
            <mesh geometry={nodes.Window043_4.geometry} material={materials['Marble.001']} />
          </group>
        </group>
        <mesh geometry={nodes.Plane303.geometry} material={nodes.Plane303.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Plane302.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      </group>
      <group position={[-29.419, 0.194, -2.724]} rotation={[0, -1.571, 0]} scale={[0.642, 1.08, 0.823]}>
        <group position={[0, 0, 1.521]}>
          <mesh geometry={nodes.Window045_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window045_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window045_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window045_4.geometry} material={materials['Marble.001']} />
        </group>
      </group>
      <group position={[-29.818, 0.194, -10.477]} rotation={[0, -1.571, 0]} scale={[1.145, 1.08, 0.823]}>
        <group position={[0, 0, 1.521]}>
          <mesh geometry={nodes.Window046_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window046_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window046_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window046_4.geometry} material={materials['Marble.001']} />
        </group>
      </group>
      <group position={[-29.818, 2.692, -10.477]} rotation={[0, -1.571, 0]} scale={[1.145, 1.08, 0.823]}>
        <group position={[0, 0, 1.521]}>
          <mesh geometry={nodes.Window046_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window046_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window046_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window046_4.geometry} material={materials['Marble.001']} />
        </group>
      </group>
      <group position={[-29.818, 5.128, -10.477]} rotation={[0, -1.571, 0]} scale={[1.145, 1.08, 0.823]}>
        <group position={[0, 0, 1.521]}>
          <mesh geometry={nodes.Window046_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window046_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window046_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window046_4.geometry} material={materials['Marble.001']} />
        </group>
      </group>
      <group position={[-29.818, 7.542, -10.477]} rotation={[0, -1.571, 0]} scale={[1.145, 1.08, 0.823]}>
        <group position={[0, 0, 1.521]}>
          <mesh geometry={nodes.Window046_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window046_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window046_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window046_4.geometry} material={materials['Marble.001']} />
        </group>
      </group>
      <group position={[-29.818, 10.019, -10.477]} rotation={[0, -1.571, 0]} scale={[1.145, 1.08, 0.823]}>
        <group position={[0, 0, 1.521]}>
          <mesh geometry={nodes.Window046_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window046_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window046_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window046_4.geometry} material={materials['Marble.001']} />
        </group>
      </group>
      <group position={[-29.818, 12.564, -10.477]} rotation={[0, -1.571, 0]} scale={[1.145, 1.08, 0.823]}>
        <group position={[0, 0, 1.521]}>
          <mesh geometry={nodes.Window046_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window046_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window046_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window046_4.geometry} material={materials['Marble.001']} />
        </group>
      </group>
      <group position={[-29.818, 14.978, -10.477]} rotation={[0, -1.571, 0]} scale={[1.145, 1.08, 0.823]}>
        <group position={[0, 0, 1.521]}>
          <mesh geometry={nodes.Window046_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window046_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window046_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window046_4.geometry} material={materials['Marble.001']} />
        </group>
      </group>
      <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
        <group position={[1.775, 0, 0]}>
          <mesh geometry={nodes.Window008_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window008_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window008_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window008_4.geometry} material={materials['Marble.001']} />
        </group>
      </group>
      <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
        <mesh geometry={nodes.CTRL_Hole163.geometry} material={materials['hidden_material.001']} />
        <group position={[1.775, 0, 0]}>
          <mesh geometry={nodes.Window009_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window009_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window009_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window009_4.geometry} material={materials['Marble.001']} />
        </group>
      </group>
      <group position={[-28.789, 2.444, -45.622]} rotation={[0, -1.571, 0]} scale={[0.642, 0.823, 0.823]}>
        <group position={[0, 0, 1.521]}>
          <mesh geometry={nodes.Window047_1.geometry} material={materials['PVC.001']} />
          <mesh geometry={nodes.Window047_2.geometry} material={materials['Plastic.001']} />
          <mesh geometry={nodes.Window047_3.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window047_4.geometry} material={materials['Marble.001']} />
        </group>
      </group>
      <mesh geometry={nodes.Plane024.geometry} material={materials['peach.001']} position={[2.473, 18.448, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[4.42, 1, 1]} />
      <mesh geometry={nodes.Plane102.geometry} material={materials['peach.001']} position={[2.588, 18.373, -33.425]} rotation={[Math.PI / 2, 0, 0]} scale={[4.42, 1, 1]} />
      <mesh geometry={nodes.Plane175.geometry} material={materials['peach.001']} position={[-19.058, 18.406, -41.936]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[4.42, 1, 1]} />
      <mesh geometry={nodes.Plane286.geometry} material={materials['peach.001']} position={[-20.273, 18.406, -3.856]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[-4.42, -1, -1]} />
      <mesh geometry={nodes.Cube.geometry} material={materials['railing.001']} position={[0.277, 2.786, 0.887]} scale={[2.118, 0.024, 0.024]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['gray.001']} position={[2.48, 2.068, 0]} scale={[0.11, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['gray.001']} position={[-2.155, 2.068, 0]} scale={[0.11, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube013.geometry} material={materials['Material.002']} position={[4.637, 11.186, 0.954]} rotation={[-Math.PI, 0, 0]} scale={[-0.023, -1.126, -0.023]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.002']} position={[6.926, 11.354, -25.099]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.023, -1.126, -0.023]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.002']} position={[6.926, 11.354, -12.571]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[-0.023, -1.126, -0.023]} />
      <mesh geometry={nodes.Cube067.geometry} material={materials['Material.002']} position={[-11.08, 11.354, -46.664]} rotation={[0, 0, -Math.PI]} scale={[-0.026, -1.126, -0.023]} />
      <mesh geometry={nodes.Cube068.geometry} material={materials['Material.002']} position={[3.088, 11.354, -46.664]} rotation={[-Math.PI, 0, 0]} scale={[-0.026, -1.126, -0.023]} />
      <mesh geometry={nodes.Cube102.geometry} material={materials['Material.002']} position={[-30.726, 11.354, -18.773]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[-0.023, -1.126, -0.023]} />
      <mesh geometry={nodes.Cube103.geometry} material={materials['Material.002']} position={[-30.726, 11.354, -31.301]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.023, -1.126, -0.023]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['gray.001']} position={[6.727, 0.392, -3.196]} scale={0.421} />
      <group position={[6.727, 2.479, -3.196]} scale={0.421}>
        <mesh geometry={nodes.Cube038_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube038_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[6.727, 4.39, -3.196]} scale={0.421}>
        <mesh geometry={nodes.Cube038_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube038_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[6.727, 6.302, -3.196]} scale={0.421}>
        <mesh geometry={nodes.Cube038_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube038_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[6.727, 8.213, -3.196]} scale={0.421}>
        <mesh geometry={nodes.Cube038_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube038_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[6.727, 10.125, -3.196]} scale={0.421}>
        <mesh geometry={nodes.Cube038_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube038_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[6.727, 12.037, -3.196]} scale={0.421}>
        <mesh geometry={nodes.Cube038_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube038_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[6.727, 13.948, -3.196]} scale={0.421}>
        <mesh geometry={nodes.Cube038_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube038_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[6.727, 15.86, -3.196]} scale={0.421}>
        <mesh geometry={nodes.Cube038_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube038_2.geometry} material={materials['railing.002']} />
      </group>
      <mesh geometry={nodes.Cube024.geometry} material={materials['peach.001']} position={[6.582, 18.952, -3.196]} scale={0.421} />
      <mesh geometry={nodes.Cube025.geometry} material={materials['gray.001']} position={[6.059, 2.069, -6.186]} rotation={[0, 1.571, 0]} scale={[0.11, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube094.geometry} material={materials['gray.001']} position={[-29.929, 2.069, -42.095]} rotation={[0, -1.571, 0]} scale={[0.11, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube136.geometry} material={materials['gray.001']} position={[-29.929, 2.069, -7.736]} rotation={[0, -1.571, 0]} scale={[0.11, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube035.geometry} material={materials['gray.001']} position={[6.108, 2.068, -14.61]} rotation={[0, 1.571, 0]} scale={[0.11, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube036.geometry} material={materials['gray.001']} position={[6.108, 2.068, -18.97]} rotation={[0, 1.571, 0]} scale={[0.11, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube038.geometry} material={materials['gray.001']} position={[6.108, 2.068, -23.339]} rotation={[0, 1.571, 0]} scale={[0.11, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube061.geometry} material={materials['gray.001']} position={[0.782, 2.068, -45.846]} rotation={[Math.PI, 0, Math.PI]} scale={[0.125, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube062.geometry} material={materials['gray.001']} position={[-4.149, 2.068, -45.846]} rotation={[Math.PI, 0, Math.PI]} scale={[0.125, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube063.geometry} material={materials['gray.001']} position={[-9.091, 2.068, -45.846]} rotation={[Math.PI, 0, Math.PI]} scale={[0.125, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube069.geometry} material={materials['gray.001']} position={[5.753, 2.167, -45.846]} rotation={[Math.PI, 0, Math.PI]} scale={[0.125, 2.113, 0.943]} />
      <mesh geometry={nodes.Cube095.geometry} material={materials['gray.001']} position={[-29.908, 2.068, -29.262]} rotation={[0, -1.571, 0]} scale={[0.11, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube097.geometry} material={materials['gray.001']} position={[-29.908, 2.068, -24.901]} rotation={[0, -1.571, 0]} scale={[0.11, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube098.geometry} material={materials['gray.001']} position={[-29.908, 2.068, -20.532]} rotation={[0, -1.571, 0]} scale={[0.11, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube104.geometry} material={materials['gray.001']} position={[-29.908, 2.068, -33.599]} rotation={[0, -1.571, 0]} scale={[0.11, 2.101, 0.943]} />
      <mesh geometry={nodes.Plane025.geometry} material={materials['Material.006']} position={[-12.26, -0.094, -24.945]} scale={[28.727, 28.727, 34.732]} />
      <mesh geometry={nodes.Cube037.geometry} material={materials['gray.001']} position={[6.575, 0.393, -10.763]} scale={0.421} />
      <mesh geometry={nodes.Cube096.geometry} material={materials['gray.001']} position={[-30.375, 0.393, -33.109]} rotation={[Math.PI, 0, Math.PI]} scale={0.421} />
      <mesh geometry={nodes.Plane026.geometry} material={nodes.Plane026.material} position={[6.575, 1.254, -12.453]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 1.214]} />
      <mesh geometry={nodes.Plane027.geometry} material={nodes.Plane027.material} position={[6.575, 1.254, -16.813]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 1.214]} />
      <mesh geometry={nodes.Plane028.geometry} material={nodes.Plane028.material} position={[6.575, 1.254, -21.182]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 1.214]} />
      <mesh geometry={nodes.Plane029.geometry} material={nodes.Plane029.material} position={[6.575, 1.254, -25.56]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 1.214]} />
      <mesh geometry={nodes.Plane191.geometry} material={nodes.Plane191.material} position={[-30.512, 1.254, -31.458]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 1.214]} />
      <mesh geometry={nodes.Plane192.geometry} material={nodes.Plane192.material} position={[-30.512, 1.254, -27.097]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 1.214]} />
      <mesh geometry={nodes.Plane193.geometry} material={nodes.Plane193.material} position={[-30.512, 1.254, -22.728]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 1.214]} />
      <mesh geometry={nodes.Plane194.geometry} material={nodes.Plane194.material} position={[-30.512, 1.254, -18.35]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 1.214]} />
      <mesh geometry={nodes.Plane260.geometry} material={nodes.Plane260.material} position={[-30.512, 1.257, -35.826]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1.007, 1.007, 1.223]} />
      <mesh geometry={nodes.Plane304.geometry} material={nodes.Plane304.material} position={[-30.512, 1.254, -1.455]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 1.214]} />
      <mesh geometry={nodes.Cube040.geometry} material={materials['railing.001']} position={[6.876, 3.17, -12.434]} rotation={[0, 1.571, 0]} scale={[2.118, 0.024, 0.024]} />
      <mesh geometry={nodes.Cube041.geometry} material={materials['railing.001']} position={[6.876, 3.17, -21.198]} rotation={[0, 1.571, 0]} scale={[2.118, 0.024, 0.024]} />
      <mesh geometry={nodes.Cube042.geometry} material={materials['gray.001']} position={[6.108, 2.068, -27.718]} rotation={[0, 1.571, 0]} scale={[0.11, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube066.geometry} material={materials['gray.001']} position={[-14.042, 2.068, -45.846]} rotation={[Math.PI, 0, Math.PI]} scale={[0.125, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube101.geometry} material={materials['gray.001']} position={[-29.908, 2.068, -16.154]} rotation={[0, -1.571, 0]} scale={[0.11, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube043.geometry} material={nodes.Cube043.material} position={[6.714, 0.392, -32.668]} rotation={[0, Math.PI / 2, 0]} scale={0.421} />
      <mesh geometry={nodes.Cube080.geometry} material={nodes.Cube080.material} position={[-18.301, 0.425, -46.062]} rotation={[Math.PI, 0, Math.PI]} scale={0.421} />
      <mesh geometry={nodes.Cube119.geometry} material={nodes.Cube119.material} position={[-19.516, 0.425, 0.27]} rotation={[-Math.PI, 0, 0]} scale={-0.421} />
      <mesh geometry={nodes.Cube044.geometry} material={materials['railing.001']} position={[3.841, 3.57, -30.04]} rotation={[0, 1.571, 0]} scale={[2.248, 0.025, 0.025]} />
      <mesh geometry={nodes.Cube045.geometry} material={materials['railing.001']} position={[0.391, 3.092, -32.538]} scale={[2.118, 0.024, 0.024]} />
      <mesh geometry={nodes.Cube046.geometry} material={materials['gray.001']} position={[7.239, 2.051, -33.196]} rotation={[Math.PI, 0, Math.PI]} scale={[0.11, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube082.geometry} material={materials['gray.001']} position={[-18.829, 2.083, -46.587]} rotation={[0, -Math.PI / 2, 0]} scale={[0.11, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['gray.001']} position={[7.239, 2.051, -41.439]} rotation={[Math.PI, 0, Math.PI]} scale={[0.11, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube083.geometry} material={materials['gray.001']} position={[-25.672, 2.083, -46.587]} rotation={[0, -Math.PI / 2, 0]} scale={[0.11, 2.101, 0.943]} />
      <mesh geometry={nodes.Cube056.geometry} material={materials['railing.001']} position={[3.841, 3.548, -39.62]} rotation={[0, 1.571, 0]} scale={[2.248, 0.025, 0.025]} />
      <mesh geometry={nodes.Cube057.geometry} material={materials['Material.003']} position={[7.345, 10.111, -45.784]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.046, -2.224, -0.046]} />
      <mesh geometry={nodes.Cube141.geometry} material={materials['Material.003']} position={[-5.389, 5.056, -0.843]} rotation={[0, 0, -Math.PI]} scale={[-0.027, -1.314, -0.027]} />
      <mesh geometry={nodes.Cube142.geometry} material={materials['Material.003']} position={[-19.38, 5.056, -0.843]} rotation={[0, 0, -Math.PI]} scale={[-0.027, -1.314, -0.027]} />
      <mesh geometry={nodes.Cube143.geometry} material={materials['Material.003']} position={[-18.45, 6.946, -46.363]} rotation={[0, 0, -Math.PI]} scale={[-0.037, -1.793, -0.037]} />
      <mesh geometry={nodes.Cube058.geometry} material={materials['Material.003']} position={[5.191, 10.111, -40.436]} rotation={[0, 0, -Math.PI]} scale={[-0.046, -2.224, -0.046]} />
      <mesh geometry={nodes.Cube059.geometry} material={materials['Material.003']} position={[6.633, 10.111, -46.657]} rotation={[0, 0, -Math.PI]} scale={[-0.046, -2.224, -0.046]} />
      <mesh geometry={nodes.Cube064.geometry} material={materials['railing.001']} position={[3.242, 3.17, -46.614]} rotation={[Math.PI, 0, Math.PI]} scale={[2.395, 0.024, 0.024]} />
      <mesh geometry={nodes.Cube065.geometry} material={materials['railing.001']} position={[-6.669, 3.17, -46.614]} rotation={[Math.PI, 0, Math.PI]} scale={[2.395, 0.024, 0.024]} />
      <mesh geometry={nodes.Cube081.geometry} material={materials['railing.001']} position={[-18.172, 3.125, -39.74]} rotation={[0, 1.571, 0]} scale={[2.118, 0.024, 0.024]} />
      <mesh geometry={nodes.Cube084.geometry} material={materials['railing.001']} position={[-24.368, 3.581, -43.189]} rotation={[Math.PI, 0, Math.PI]} scale={[2.248, 0.025, 0.025]} />
      <mesh geometry={nodes.Plane190.geometry} material={materials['peach.001']} position={[-29.936, 18.273, -44.333]} rotation={[0, 0, -Math.PI / 2]} scale={[0.386, 1, 1]} />
      <mesh geometry={nodes.Plane257.geometry} material={materials['peach.001']} position={[-29.936, 18.273, -35.861]} rotation={[0, 0, -Math.PI / 2]} scale={[0.386, 1, 1]} />
      <mesh geometry={nodes.Plane301.geometry} material={materials['peach.001']} position={[-29.936, 18.273, -1.453]} rotation={[0, 0, -Math.PI / 2]} scale={[0.386, 1, 1]} />
      <mesh geometry={nodes.Cube099.geometry} material={materials['railing.001']} position={[-30.675, 3.17, -31.437]} rotation={[0, -1.571, 0]} scale={[2.118, 0.024, 0.024]} />
      <mesh geometry={nodes.Cube100.geometry} material={materials['railing.001']} position={[-30.675, 3.17, -22.674]} rotation={[0, -1.571, 0]} scale={[2.118, 0.024, 0.024]} />
      <mesh geometry={nodes.Plane258.geometry} material={nodes.Plane258.material} position={[-29.961, 3.338, -35.852]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
      <mesh geometry={nodes.Plane335.geometry} material={nodes.Plane335.material} position={[-29.961, 3.338, -44.325]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
      <mesh geometry={nodes.Plane259.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -38.097]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      <mesh geometry={nodes.Plane334.geometry} material={materials['peach.001']} position={[-29.961, 3.261, -46.623]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[4.427, 1, 1]} />
      <mesh geometry={nodes.Cube105.geometry} material={materials['railing.001']} position={[-30.675, 3.17, -35.81]} rotation={[0, -1.571, 0]} scale={[2.118, 0.024, 0.024]} />
      <mesh geometry={nodes.Cube106.geometry} material={materials['railing.001']} position={[-30.675, 3.17, -44.324]} rotation={[0, -1.571, 0]} scale={[2.118, 0.024, 0.024]} />
      <mesh geometry={nodes.Cube107.geometry} material={materials['Material.002']} position={[-30.726, 11.354, -35.585]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.023, -1.126, -0.023]} />
      <mesh geometry={nodes.Cube108.geometry} material={materials['Material.002']} position={[-30.726, 11.354, -44.036]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.023, -1.126, -0.023]} />
      <mesh geometry={nodes.Cube122.geometry} material={materials['Material.002']} position={[-30.726, 11.354, -1.155]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.023, -1.126, -0.023]} />
      <mesh geometry={nodes.Cube109.geometry} material={materials['gray.001']} position={[-29.908, 2.068, -16.154]} rotation={[0, -1.571, 0]} scale={[0.11, 2.101, 0.943]} />
      <mesh geometry={nodes.Plane261.geometry} material={materials['gray.001']} position={[-30.788, 0.885, -45.693]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.Cube120.geometry} material={materials['railing.001']} position={[-19.386, 3.125, -6.053]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-2.118, -0.024, -0.024]} />
      <mesh geometry={nodes.Cube123.geometry} material={materials['railing.001']} position={[-25.064, 3.581, -2.603]} rotation={[-Math.PI, 0, 0]} scale={[-2.248, -0.025, -0.025]} />
      <mesh geometry={nodes.Cube124.geometry} material={materials['gray.001']} position={[-19.524, 2.083, 0.795]} rotation={[Math.PI, 1.571, 0]} scale={[-0.11, -2.101, -0.943]} />
      <mesh geometry={nodes.Cube125.geometry} material={materials['gray.001']} position={[-26.367, 2.083, 0.795]} rotation={[Math.PI, 1.571, 0]} scale={[-0.11, -2.101, -0.943]} />
      <mesh geometry={nodes.Cube121.geometry} material={materials['railing.001']} position={[-30.675, 3.17, -1.444]} rotation={[0, -1.571, 0]} scale={[2.118, 0.024, 0.024]} />
      <mesh geometry={nodes.Cube138.geometry} material={materials['gray.001']} position={[-30.375, 0.393, -16.056]} rotation={[Math.PI, 0, Math.PI]} scale={0.421} />
      <mesh geometry={nodes.Cube139.geometry} material={materials['gray.001']} position={[-10.569, 4.931, -4.596]} scale={[1.045, 1, 1]} />
      <mesh geometry={nodes.Cube140.geometry} material={materials['gray.001']} position={[-10.536, -0.094, -1.416]} scale={[0.18, 1, 1]} />
      <mesh geometry={nodes.Plane305.geometry} material={materials['Glass.002']} position={[-12.359, 0.933, -1.416]} rotation={[Math.PI / 2, 0, 0]} scale={[1.019, 1, 1]} />
      <mesh geometry={nodes.Plane306.geometry} material={materials['Glass.002']} position={[-8.079, 0.933, -1.554]} rotation={[Math.PI / 2, 0, 0]} scale={[1.019, 1, 1]} />
      <mesh geometry={nodes.Plane307.geometry} material={materials['Material.005']} position={[-12.359, 0.933, -1.416]} rotation={[Math.PI / 2, 0, 0]} scale={[1.019, 1, 1]} />
      <mesh geometry={nodes.Plane308.geometry} material={materials['Material.005']} position={[-8.079, 0.933, -1.416]} rotation={[Math.PI / 2, 0, 0]} scale={[1.019, 1, 1]} />
      <group position={[6.519, 3.088, -8.219]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[6.519, 5.156, -8.219]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[6.519, 7.223, -8.219]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[6.519, 9.291, -8.219]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[6.519, 11.359, -8.219]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[6.519, 13.427, -8.219]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[6.519, 15.495, -8.219]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[6.519, 17.563, -8.219]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[-30.389, 3.088, -40.062]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[-30.389, 5.156, -40.062]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[-30.389, 7.223, -40.062]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[-30.389, 9.291, -40.062]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[-30.389, 11.359, -40.062]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[-30.389, 13.427, -40.062]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[-30.389, 15.495, -40.062]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[-30.389, 17.563, -40.062]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[-30.389, 3.088, -5.703]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[-30.389, 5.156, -5.703]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[-30.389, 7.223, -5.703]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[-30.389, 9.291, -5.703]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[-30.389, 11.359, -5.703]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[-30.389, 13.427, -5.703]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[-30.389, 15.495, -5.703]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <group position={[-30.389, 17.563, -5.703]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
        <mesh geometry={nodes.Cube073_1.geometry} material={materials['peach.001']} />
        <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
      </group>
      <mesh geometry={nodes.Cube027.geometry} material={materials['peach.001']} position={[6.519, 1.015, -8.219]} scale={[0.472, 0.268, 1.943]} />
      <mesh geometry={nodes.Cube086.geometry} material={materials['peach.001']} position={[-30.389, 1.015, -40.062]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]} />
      <mesh geometry={nodes.Cube127.geometry} material={materials['peach.001']} position={[-30.389, 1.015, -5.703]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]} />
      <mesh geometry={nodes.Plane309.geometry} material={materials['peach.001']} position={[6.732, 1.22, -12.348]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 1.151]} />
      <mesh geometry={nodes.Plane310.geometry} material={materials['peach.001']} position={[6.732, 1.22, -16.708]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 1.151]} />
      <mesh geometry={nodes.Plane311.geometry} material={materials['peach.001']} position={[6.732, 1.22, -21.077]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 1.151]} />
      <mesh geometry={nodes.Plane312.geometry} material={materials['peach.001']} position={[6.732, 1.22, -25.455]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 1.151]} />
      <mesh geometry={nodes.Plane322.geometry} material={materials['peach.001']} position={[-30.532, 1.22, -31.524]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 1.151]} />
      <mesh geometry={nodes.Plane323.geometry} material={materials['peach.001']} position={[-30.532, 1.22, -27.164]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 1.151]} />
      <mesh geometry={nodes.Plane324.geometry} material={materials['peach.001']} position={[-30.532, 1.22, -22.794]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 1.151]} />
      <mesh geometry={nodes.Plane325.geometry} material={materials['peach.001']} position={[-30.532, 1.22, -18.416]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 1.151]} />
      <mesh geometry={nodes.Plane327.geometry} material={materials['peach.001']} position={[-30.532, 1.223, -35.893]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1.007, 1.007, 1.16]} />
      <mesh geometry={nodes.Plane330.geometry} material={materials['peach.001']} position={[-30.532, 1.22, -1.521]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 1.151]} />
      <mesh geometry={nodes.Plane313.geometry} material={materials['peach.001']} position={[5.981, 18.26, -18.904]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[8.849, 1, 0.48]} />
      <mesh geometry={nodes.Plane319.geometry} material={materials['peach.001']} position={[-4.074, 18.26, -45.719]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[10.008, 1, 0.48]} />
      <mesh geometry={nodes.Plane326.geometry} material={materials['peach.001']} position={[-29.781, 18.26, -25.145]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[8.849, 1, 0.48]} />
      <mesh geometry={nodes.Plane314.geometry} material={materials['peach.001']} position={[3.22, 0.972, -30.035]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[2.206, 1, 1]} />
      <mesh geometry={nodes.Plane318.geometry} material={materials['peach.001']} position={[3.22, 0.951, -39.615]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[2.206, 1, 1]} />
      <mesh geometry={nodes.Plane320.geometry} material={materials['peach.001']} position={[-24.364, 0.983, -42.569]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[2.206, 1, 1]} />
      <mesh geometry={nodes.Plane328.geometry} material={materials['peach.001']} position={[-25.059, 0.983, -3.224]} rotation={[-Math.PI / 2, 0, 0]} scale={[-2.206, -1, -1]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials['peach.001']} position={[3.6, 2.569, -30.035]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube008.geometry} material={materials['peach.001']} position={[3.6, 4.616, -30.035]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube009.geometry} material={materials['peach.001']} position={[3.6, 6.662, -30.035]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube010.geometry} material={materials['peach.001']} position={[3.6, 8.607, -30.035]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube011.geometry} material={materials['peach.001']} position={[3.6, 10.564, -30.035]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube012.geometry} material={materials['peach.001']} position={[3.6, 12.52, -30.035]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube014.geometry} material={materials['peach.001']} position={[3.6, 14.194, -30.035]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube015.geometry} material={materials['peach.001']} position={[3.6, 16.01, -30.035]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube039.geometry} material={materials['peach.001']} position={[3.6, 18.274, -30.035]} scale={[0.389, 0.631, 2.207]} />
      <mesh geometry={nodes.Cube047.geometry} material={materials['peach.001']} position={[3.6, 2.548, -39.615]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube048.geometry} material={materials['peach.001']} position={[3.6, 4.594, -39.615]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube049.geometry} material={materials['peach.001']} position={[3.6, 6.429, -39.615]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube050.geometry} material={materials['peach.001']} position={[3.6, 8.374, -39.615]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube051.geometry} material={materials['peach.001']} position={[3.6, 10.331, -39.615]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube052.geometry} material={materials['peach.001']} position={[3.6, 12.287, -39.615]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube053.geometry} material={materials['peach.001']} position={[3.6, 13.961, -39.615]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube054.geometry} material={materials['peach.001']} position={[3.6, 15.988, -39.615]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube055.geometry} material={materials['peach.001']} position={[3.6, 18.252, -39.615]} scale={[0.389, 0.631, 2.207]} />
      <mesh geometry={nodes.Cube071.geometry} material={materials['peach.001']} position={[-24.364, 2.58, -42.949]} rotation={[0, 1.571, 0]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube072.geometry} material={materials['peach.001']} position={[-24.364, 4.627, -42.949]} rotation={[0, 1.571, 0]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube073.geometry} material={materials['peach.001']} position={[-24.364, 6.462, -42.949]} rotation={[0, 1.571, 0]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube074.geometry} material={materials['peach.001']} position={[-24.364, 8.407, -42.949]} rotation={[0, 1.571, 0]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube075.geometry} material={materials['peach.001']} position={[-24.364, 10.363, -42.949]} rotation={[0, 1.571, 0]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube076.geometry} material={materials['peach.001']} position={[-24.364, 12.32, -42.949]} rotation={[0, 1.571, 0]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube077.geometry} material={materials['peach.001']} position={[-24.364, 13.994, -42.949]} rotation={[0, 1.571, 0]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube078.geometry} material={materials['peach.001']} position={[-24.364, 16.021, -42.949]} rotation={[0, 1.571, 0]} scale={[0.389, 0.359, 2.207]} />
      <mesh geometry={nodes.Cube079.geometry} material={materials['peach.001']} position={[-24.364, 18.285, -42.949]} rotation={[0, 1.571, 0]} scale={[0.389, 0.631, 2.207]} />
      <mesh geometry={nodes.Cube111.geometry} material={materials['peach.001']} position={[-25.059, 2.58, -2.844]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.389, -0.359, -2.207]} />
      <mesh geometry={nodes.Cube112.geometry} material={materials['peach.001']} position={[-25.059, 4.627, -2.844]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.389, -0.359, -2.207]} />
      <mesh geometry={nodes.Cube113.geometry} material={materials['peach.001']} position={[-25.059, 6.462, -2.844]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.389, -0.359, -2.207]} />
      <mesh geometry={nodes.Cube114.geometry} material={materials['peach.001']} position={[-25.059, 8.407, -2.844]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.389, -0.359, -2.207]} />
      <mesh geometry={nodes.Cube115.geometry} material={materials['peach.001']} position={[-25.059, 10.363, -2.844]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.389, -0.359, -2.207]} />
      <mesh geometry={nodes.Cube116.geometry} material={materials['peach.001']} position={[-25.059, 12.32, -2.844]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.389, -0.359, -2.207]} />
      <mesh geometry={nodes.Cube117.geometry} material={materials['peach.001']} position={[-25.059, 13.994, -2.844]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.389, -0.359, -2.207]} />
      <mesh geometry={nodes.Cube118.geometry} material={materials['peach.001']} position={[-25.059, 18.285, -2.844]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.389, -0.631, -2.207]} />
      <mesh geometry={nodes.Plane315.geometry} material={materials['gray.001']} position={[4.012, 1.035, -30.035]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[2.62, 1, 1.272]} />
      <mesh geometry={nodes.Plane316.geometry} material={materials['gray.001']} position={[4.561, 1.035, -27.734]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.509, 1, 1.272]} />
      <mesh geometry={nodes.Plane317.geometry} material={materials['gray.001']} position={[4.431, 1.035, -32.276]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.509, 1, 1.272]} />
      <mesh geometry={nodes.Cube060.geometry} material={materials['peach.002']} position={[4.687, 2.069, -6.186]} />
      <mesh geometry={nodes.Cube070.geometry} material={materials['gray.001']} position={[4.489, 0.978, -45.616]} scale={[1.131, 1, 1]} />
      <mesh geometry={nodes.Plane321.geometry} material={materials['peach.001']} position={[-18.21, 1.217, -41.188]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[4.987, 1, 1.133]} />
      <mesh geometry={nodes.Plane329.geometry} material={materials['peach.001']} position={[-19.424, 1.217, -4.604]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[-4.987, -1, -1.133]} />
      <mesh geometry={nodes.Cube110.geometry} material={materials['peach.002']} position={[-27.961, 2.069, -40.157]} />
      <mesh geometry={nodes.Cube135.geometry} material={materials['peach.002']} position={[-27.961, 2.069, -5.798]} />
      <mesh geometry={nodes.Cube137.geometry} material={materials['gray.001']} position={[-27.961, 2.069, -11.87]} />
      <mesh geometry={nodes.Plane331.geometry} material={materials['peach.001']} position={[2.48, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[4.427, 1, 1]} />
      <mesh geometry={nodes.Plane332.geometry} material={materials['Material.004']} position={[0.241, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Plane333.geometry} material={materials['Material.004']} position={[4.778, 1.077, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text.geometry} material={nodes.Text.material} position={[13.552, 0.016, -14.258]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={6.696} />
      <mesh geometry={nodes.Text001.geometry} material={nodes.Text001.material} position={[-1.663, 0.016, -54.512]} rotation={[Math.PI / 2, 0, Math.PI]} scale={6.696} />
      <mesh geometry={nodes.Text002.geometry} material={nodes.Text002.material} position={[-36.149, 0.016, -32.641]} rotation={[Math.PI / 2, 0, 1.588]} scale={6.696} />
      <mesh geometry={nodes.Text003.geometry} material={nodes.Text003.material} position={[7.055, 16.57, 0.344]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.901} />
      <mesh geometry={nodes.Text004.geometry} material={nodes.Text004.material} position={[7.802, 16.57, -32.882]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.901} />
      <mesh geometry={nodes.Text005.geometry} material={nodes.Text005.material} position={[-30.804, 16.57, -15.343]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.901} />
      <mesh geometry={nodes.Text006.geometry} material={nodes.Text006.material} position={[-18.517, 16.709, -46.703]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.901} />
    </group>
  );
}

useGLTF.preload('/r3f/ohostel.glb');

