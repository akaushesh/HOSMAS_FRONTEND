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
  onLoad: () => void; // Add the onLoad callback prop

}

export default function CHostel(props:ModelProps): React.JSX.Element {
 
  const { nodes, materials } = useGLTF('/r3f/chostel.glb') as GLTFResult;
  React.useEffect(() => {
	// Call the onLoad callback when the model has finished loading
	if (nodes && materials) {
	  props.onLoad();
	}
  }, [nodes, materials, props.onLoad]);

  return (
<group {...props} dispose={null}>
      <group position={[-7.638, 5.509, -8.409]} scale={[0.66, 0.73, 0.803]}>
        <mesh geometry={nodes.CTRL_Hole004.geometry} material={materials.hidden_material} />
        <mesh geometry={nodes.Window005_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window005_2.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Window005_3.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window005_4.geometry} material={materials.Marble} />
      </group>
      <group position={[-7.638, 1.991, -8.409]} scale={[0.66, 0.73, 0.803]}>
        <mesh geometry={nodes.CTRL_Hole005.geometry} material={materials.hidden_material} />
        <mesh geometry={nodes.Window005_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window005_2.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Window005_3.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window005_4.geometry} material={materials.Marble} />
      </group>
      <group position={[-5.959, -0.016, -0.013]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_1.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_1.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_1.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_1.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_1.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_1.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[-5.959, -0.016, -0.013]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_2.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_2.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_2.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_2.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_2.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_2.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[-11.929, -0.016, -0.013]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_3.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_3.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_3.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_3.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_3.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_3.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[-17.908, -0.016, -0.013]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_4.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_4.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_4.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_4.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_4.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_4.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[-38.976, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
        <mesh geometry={nodes.CTRL_Hole006.geometry} material={materials.hidden_material} />
        <mesh geometry={nodes.Window006_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window006_2.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Window006_3.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window006_4.geometry} material={materials.Marble} />
      </group>
      <group position={[-38.937, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
        <mesh geometry={nodes.CTRL_Hole007.geometry} material={materials.hidden_material} />
        <mesh geometry={nodes.Window006_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window006_2.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Window006_3.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window006_4.geometry} material={materials.Marble} />
      </group>
      <group position={[-42.198, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
        <mesh geometry={nodes.CTRL_Hole008.geometry} material={materials.hidden_material} />
        <mesh geometry={nodes.Window006_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window006_2.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Window006_3.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window006_4.geometry} material={materials.Marble} />
      </group>
      <group position={[-42.159, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
        <mesh geometry={nodes.CTRL_Hole009.geometry} material={materials.hidden_material} />
        <mesh geometry={nodes.Window006_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window006_2.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Window006_3.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window006_4.geometry} material={materials.Marble} />
      </group>
      <group position={[-65.199, 0.016, -5.631]} rotation={[0, -Math.PI / 2, 0]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_5.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_5.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_5.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_5.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_5.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_5.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[-65.199, 0.016, -11.609]} rotation={[0, -Math.PI / 2, 0]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_6.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_6.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_6.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_6.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_6.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_6.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[-65.199, 0.016, -17.596]} rotation={[0, -Math.PI / 2, 0]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_7.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_7.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_7.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_7.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_7.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_7.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[-65.199, 0.016, -39.493]} rotation={[0, -Math.PI / 2, 0]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_8.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_8.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_8.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_8.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_8.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_8.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[-65.199, 0.016, -45.471]} rotation={[0, -Math.PI / 2, 0]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_9.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_9.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_9.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_9.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_9.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_9.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[-65.199, 0.016, -51.458]} rotation={[0, -Math.PI / 2, 0]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_10.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_10.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_10.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_10.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_10.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_10.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[-65.199, 0.016, -57.468]} rotation={[0, -Math.PI / 2, 0]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_11.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_11.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_11.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_11.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_11.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_11.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[-64.43, -0.01, -97.446]} rotation={[-Math.PI, 0, -Math.PI]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_12.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_12.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_12.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_12.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_12.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_12.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[-58.461, -0.01, -97.446]} rotation={[-Math.PI, 0, -Math.PI]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_13.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_13.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_13.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_13.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_13.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_13.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[-52.472, -0.01, -97.446]} rotation={[-Math.PI, 0, -Math.PI]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_14.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_14.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_14.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_14.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_14.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_14.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[-46.504, -0.01, -97.446]} rotation={[-Math.PI, 0, -Math.PI]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_15.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_15.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_15.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_15.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_15.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_15.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[-40.631, -0.01, -97.446]} rotation={[-Math.PI, 0, -Math.PI]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_16.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_16.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_16.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_16.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_16.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_16.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[-34.662, -0.01, -97.446]} rotation={[-Math.PI, 0, -Math.PI]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_17.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_17.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_17.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_17.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_17.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_17.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[-21.336, -0.01, -100.533]} rotation={[-Math.PI, 0, -Math.PI]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_18.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_18.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_18.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_18.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_18.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_18.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[-15.367, -0.01, -100.533]} rotation={[-Math.PI, 0, -Math.PI]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_19.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_19.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_19.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_19.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_19.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_19.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[-9.378, -0.01, -100.533]} rotation={[-Math.PI, 0, -Math.PI]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_20.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_20.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_20.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_20.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_20.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_20.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[-3.41, -0.01, -100.533]} rotation={[-Math.PI, 0, -Math.PI]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_21.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_21.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_21.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_21.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_21.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_21.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[2.463, -0.01, -100.533]} rotation={[-Math.PI, 0, -Math.PI]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_22.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_22.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_22.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_22.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_22.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_22.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[8.432, -0.01, -100.533]} rotation={[-Math.PI, 0, -Math.PI]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_23.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_23.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_23.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_23.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_23.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_23.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[63.645, -0.01, -98.385]} rotation={[0, 1.571, 0]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_24.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_24.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_24.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_24.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_24.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_24.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[63.645, -0.01, -92.417]} rotation={[0, 1.571, 0]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_25.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_25.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_25.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_25.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_25.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_25.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[63.645, -0.01, -86.427]} rotation={[0, 1.571, 0]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_26.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_26.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_26.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_26.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_26.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_26.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[63.645, -0.01, -80.459]} rotation={[0, 1.571, 0]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_27.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_27.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_27.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_27.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_27.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_27.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[63.645, -0.01, -74.586]} rotation={[0, 1.571, 0]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_28.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_28.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_28.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_28.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_28.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_28.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[63.645, -0.01, -68.617]} rotation={[0, 1.571, 0]}>
        <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole_29.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole001_29.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole002_29.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
          <mesh geometry={nodes.CTRL_Hole003_29.geometry} material={materials.hidden_material} />
          <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
          <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
        </group>
        <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
          <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
          <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
        </group>
        <mesh geometry={nodes.Cube_29.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
        <mesh geometry={nodes.Cube006_29.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      </group>
      <group position={[6.675, 5.509, -8.409]} scale={[0.66, 0.73, 0.803]}>
        <mesh geometry={nodes.CTRL_Hole010.geometry} material={materials.hidden_material} />
        <mesh geometry={nodes.Window005_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window005_2.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Window005_3.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window005_4.geometry} material={materials.Marble} />
      </group>
      <group position={[11.55, 5.509, -8.409]} scale={[0.66, 0.73, 0.803]}>
        <mesh geometry={nodes.CTRL_Hole011.geometry} material={materials.hidden_material} />
        <mesh geometry={nodes.Window005_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window005_2.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Window005_3.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window005_4.geometry} material={materials.Marble} />
      </group>
      <group position={[11.55, 2.484, -8.409]} scale={[0.66, 0.73, 0.803]}>
        <mesh geometry={nodes.CTRL_Hole012.geometry} material={materials.hidden_material} />
        <mesh geometry={nodes.Window005_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window005_2.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Window005_3.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window005_4.geometry} material={materials.Marble} />
      </group>
      <group position={[-15.071, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
        <mesh geometry={nodes.CTRL_Hole.geometry} material={materials.hidden_material} />
        <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
      </group>
      <group position={[-17.676, 1.486, -8.41]} scale={[0.826, 0.914, 1.006]}>
        <mesh geometry={nodes.CTRL_Hole001.geometry} material={materials.hidden_material} />
        <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
      </group>
      <group position={[-15.032, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
        <mesh geometry={nodes.CTRL_Hole002.geometry} material={materials.hidden_material} />
        <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
      </group>
      <group position={[-17.68, 5.231, -8.41]} scale={[0.826, 0.914, 1.006]}>
        <mesh geometry={nodes.CTRL_Hole003.geometry} material={materials.hidden_material} />
        <mesh geometry={nodes.Window_30.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window_31.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Window_32.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Window_33.geometry} material={materials.Marble} />
      </group>
      <mesh geometry={nodes.Cube008.geometry} material={materials['gray.001']} position={[12.594, 2.125, -9.223]} scale={[0.399, 1, 0.334]} />
      <mesh geometry={nodes.Cube013.geometry} material={materials['gray.001']} position={[18.582, 3.508, -9.194]} scale={[0.497, 1.564, 0.415]} />
      <mesh geometry={nodes.Cube014.geometry} material={materials['gray.001']} position={[24.433, 3.508, -9.194]} scale={[0.497, 1.564, 0.415]} />
      <mesh geometry={nodes.Cube015.geometry} material={materials['gray.001']} position={[30.296, 3.508, -9.194]} scale={[0.497, 1.564, 0.415]} />
      <group position={[15.64, 1.481, -9.504]} rotation={[Math.PI / 2, 0, 0]} scale={[2.692, 1.245, 1.394]}>
        <mesh geometry={nodes.Plane005.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Plane005_1.geometry} material={materials.PVC} />
      </group>
      <group position={[21.346, 1.481, -9.504]} rotation={[Math.PI / 2, 0, 0]} scale={[2.692, 1.245, 1.394]}>
        <mesh geometry={nodes.Plane005.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Plane005_1.geometry} material={materials.PVC} />
      </group>
      <group position={[27.334, 1.481, -9.504]} rotation={[Math.PI / 2, 0, 0]} scale={[2.692, 1.245, 1.394]}>
        <mesh geometry={nodes.Plane005.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Plane005_1.geometry} material={materials.PVC} />
      </group>
      <mesh geometry={nodes.Cube018.geometry} material={materials['gray.001']} position={[13.601, 3.912, -9.124]} scale={[0.4, 0.115, 0.281]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['gray.001']} position={[-6.041, 7.328, -9.617]} scale={[0.362, 1.178, 1.178]} />
      <mesh geometry={nodes.Cube149.geometry} material={materials['gray.001']} position={[8.271, 7.328, -9.617]} scale={[0.362, 1.178, 1.178]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['gray.002']} position={[-6.769, 7.328, -9.617]} scale={[0.362, 1.178, 1.178]} />
      <mesh geometry={nodes.Cube150.geometry} material={materials['gray.002']} position={[7.543, 7.328, -9.617]} scale={[0.362, 1.178, 1.178]} />
      <mesh geometry={nodes.Cube152.geometry} material={materials['gray.002']} position={[12.887, 7.328, -9.617]} scale={[0.534, 1.178, 1.178]} />
      <group position={[-9.331, 7.328, -9.617]} scale={[1.413, 1.178, 1.178]}>
        <mesh geometry={nodes.Cube045_1.geometry} material={materials['gray.001']} />
        <mesh geometry={nodes.Cube045_2.geometry} material={materials['Glass.002']} />
      </group>
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.003']} position={[-10.927, 13.67, -8.68]} rotation={[0, 0, -Math.PI]} scale={[-0.032, -1.547, -0.032]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.003']} position={[-9.819, 13.67, -8.68]} rotation={[0, 0, -Math.PI]} scale={[-0.032, -1.547, -0.032]} />
      <mesh geometry={nodes.Cube142.geometry} material={materials['Material.003']} position={[-19.196, 6.682, -8.037]} rotation={[0, 0, -Math.PI]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials['Material.003']} position={[-19.196, 6.682, -8.037]} rotation={[0, 0, -Math.PI]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube009.geometry} material={materials['Material.003']} position={[-25.169, 6.682, -8.037]} rotation={[0, 0, -Math.PI]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube010.geometry} material={materials['Material.003']} position={[-31.099, 6.682, -8.037]} rotation={[0, 0, -Math.PI]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube023.geometry} material={materials['Material.003']} position={[-40.536, 6.682, -8.037]} rotation={[0, 0, -Math.PI]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube151.geometry} material={materials['Material.003']} position={[8.671, 5.992, -8.037]} rotation={[0, 0, -Math.PI]} scale={[-0.035, -1.534, -0.035]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['gray.002']} position={[-38.583, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]} />
      <mesh geometry={nodes.Plane002.geometry} material={materials['gray.002']} position={[-41.805, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]} />
      <mesh geometry={nodes.Cube011.geometry} material={materials['gray.003']} position={[-37.644, 8.394, -8.508]} scale={1.178} />
      <mesh geometry={nodes.Cube012.geometry} material={materials['gray.003']} position={[-40.442, 8.394, -8.508]} scale={1.178} />
      <mesh geometry={nodes.Cube016.geometry} material={materials['gray.003']} position={[-40.865, 8.394, -8.508]} scale={1.178} />
      <mesh geometry={nodes.Cube017.geometry} material={materials['gray.003']} position={[-43.664, 8.394, -8.508]} scale={1.178} />
      <mesh geometry={nodes.Cube024.geometry} material={materials['gray.001']} position={[-44.065, 7.328, -9.286]} scale={[0.362, 1.178, 1.178]} />
      <mesh geometry={nodes.Cube025.geometry} material={materials['Material.003']} position={[-56.856, 6.657, -9.023]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube026.geometry} material={materials['Material.003']} position={[-56.856, 6.657, -10.209]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube027.geometry} material={materials['Material.003']} position={[-56.856, 6.657, -11.374]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube028.geometry} material={materials['Material.003']} position={[-56.856, 6.657, -12.531]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube029.geometry} material={materials['Material.003']} position={[-56.856, 6.657, -13.696]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube030.geometry} material={materials['Material.003']} position={[-56.856, 6.657, -14.869]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube032.geometry} material={materials['Material.003']} position={[-57.126, 6.657, -24.874]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube033.geometry} material={materials['Material.003']} position={[-57.126, 6.657, -30.794]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube035.geometry} material={materials['Material.003']} position={[-57.126, 6.657, -58.736]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube036.geometry} material={materials['Material.003']} position={[-57.126, 6.657, -64.656]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube037.geometry} material={materials['Material.003']} position={[-57.126, 6.657, -70.739]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube038.geometry} material={materials['Material.003']} position={[-55.805, 6.64, -40.389]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube039.geometry} material={materials['Material.003']} position={[-55.805, 6.64, -41.575]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube040.geometry} material={materials['Material.003']} position={[-55.805, 6.64, -42.74]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube041.geometry} material={materials['Material.003']} position={[-55.805, 6.64, -43.897]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube042.geometry} material={materials['Material.003']} position={[-55.805, 6.64, -45.062]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube043.geometry} material={materials['Material.003']} position={[-55.805, 6.64, -46.235]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube044.geometry} material={materials['Material.003']} position={[-55.805, 6.64, -47.427]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube045.geometry} material={materials['Material.003']} position={[-55.805, 6.64, -48.6]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube047.geometry} material={materials['Material.003']} position={[-55.947, 6.64, -80.295]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube048.geometry} material={materials['Material.003']} position={[-55.947, 6.64, -81.481]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube049.geometry} material={materials['Material.003']} position={[-55.947, 6.64, -82.646]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube050.geometry} material={materials['Material.003']} position={[-55.947, 6.64, -83.803]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube051.geometry} material={materials['Material.003']} position={[-55.947, 6.64, -84.968]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube052.geometry} material={materials['Material.003']} position={[-55.947, 6.64, -86.141]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube053.geometry} material={materials['Material.003']} position={[-55.947, 6.64, -87.333]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube054.geometry} material={materials['Material.003']} position={[-55.947, 6.64, -88.506]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube055.geometry} material={materials['Material.003']} position={[-45.27, 6.657, -89.369]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube056.geometry} material={materials['Material.003']} position={[-39.304, 6.657, -89.369]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube057.geometry} material={materials['Material.003']} position={[-33.26, 6.657, -89.369]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube058.geometry} material={materials['Material.003']} position={[-27.334, 6.657, -89.369]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube059.geometry} material={materials['Material.003']} position={[-21.457, 6.657, -89.369]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube075.geometry} material={materials['Material.003']} position={[-2.176, 6.657, -92.456]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube076.geometry} material={materials['Material.003']} position={[3.79, 6.657, -92.456]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube077.geometry} material={materials['Material.003']} position={[9.834, 6.657, -92.456]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube078.geometry} material={materials['Material.003']} position={[15.76, 6.657, -92.456]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube079.geometry} material={materials['Material.003']} position={[21.637, 6.657, -92.456]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube082.geometry} material={materials['Material.003']} position={[31.598, 6.64, -83.61]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube083.geometry} material={materials['Material.003']} position={[31.598, 6.64, -84.796]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube084.geometry} material={materials['Material.003']} position={[31.598, 6.64, -85.961]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube085.geometry} material={materials['Material.003']} position={[31.598, 6.64, -87.118]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube086.geometry} material={materials['Material.003']} position={[31.598, 6.64, -88.283]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube087.geometry} material={materials['Material.003']} position={[31.598, 6.64, -89.456]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube088.geometry} material={materials['Material.003']} position={[31.598, 6.64, -90.648]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube089.geometry} material={materials['Material.003']} position={[31.598, 6.64, -91.821]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube090.geometry} material={materials['Material.003']} position={[40.583, 6.64, -83.244]} rotation={[0, 0, -Math.PI]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube091.geometry} material={materials['Material.003']} position={[39.397, 6.64, -83.244]} rotation={[0, 0, -Math.PI]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube092.geometry} material={materials['Material.003']} position={[38.232, 6.64, -83.244]} rotation={[0, 0, -Math.PI]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube093.geometry} material={materials['Material.003']} position={[37.075, 6.64, -83.244]} rotation={[0, 0, -Math.PI]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube094.geometry} material={materials['Material.003']} position={[35.91, 6.64, -83.244]} rotation={[0, 0, -Math.PI]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube095.geometry} material={materials['Material.003']} position={[34.737, 6.64, -83.244]} rotation={[0, 0, -Math.PI]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube096.geometry} material={materials['Material.003']} position={[33.545, 6.64, -83.244]} rotation={[0, 0, -Math.PI]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube097.geometry} material={materials['Material.003']} position={[32.372, 6.64, -83.244]} rotation={[0, 0, -Math.PI]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube098.geometry} material={materials['Material.003']} position={[42.916, 6.64, -83.244]} rotation={[0, 0, -Math.PI]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube099.geometry} material={materials['Material.003']} position={[41.73, 6.64, -83.244]} rotation={[0, 0, -Math.PI]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube103.geometry} material={materials['Material.003']} position={[47.957, 6.64, -92.863]} rotation={[0, 0, -Math.PI]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube104.geometry} material={materials['Material.003']} position={[46.801, 6.64, -92.863]} rotation={[0, 0, -Math.PI]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube105.geometry} material={materials['Material.003']} position={[45.635, 6.64, -92.863]} rotation={[0, 0, -Math.PI]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube106.geometry} material={materials['Material.003']} position={[44.462, 6.64, -92.863]} rotation={[0, 0, -Math.PI]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube109.geometry} material={materials['Material.003']} position={[55.569, 6.657, -79.225]} rotation={[-Math.PI, 1.571, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube110.geometry} material={materials['Material.003']} position={[55.569, 6.657, -73.259]} rotation={[-Math.PI, 1.571, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube111.geometry} material={materials['Material.003']} position={[55.569, 6.657, -67.215]} rotation={[-Math.PI, 1.571, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube112.geometry} material={materials['Material.003']} position={[55.569, 6.657, -61.289]} rotation={[-Math.PI, 1.571, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube113.geometry} material={materials['Material.003']} position={[55.569, 6.657, -55.412]} rotation={[-Math.PI, 1.571, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube117.geometry} material={materials['Material.003']} position={[44.083, 6.64, -41.541]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube118.geometry} material={materials['Material.003']} position={[45.239, 6.64, -41.541]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube119.geometry} material={materials['Material.003']} position={[46.404, 6.64, -41.541]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube120.geometry} material={materials['Material.003']} position={[47.577, 6.64, -41.541]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube021.geometry} material={materials['Material.003']} position={[34.713, 6.64, -44.566]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube022.geometry} material={materials['Material.003']} position={[35.87, 6.64, -44.566]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube124.geometry} material={materials['Material.003']} position={[37.035, 6.64, -44.566]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube125.geometry} material={materials['Material.003']} position={[38.208, 6.64, -44.566]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube127.geometry} material={materials['Material.003']} position={[39.2, 6.64, -44.585]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube128.geometry} material={materials['Material.003']} position={[40.357, 6.64, -44.585]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube129.geometry} material={materials['Material.003']} position={[41.522, 6.64, -44.585]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube130.geometry} material={materials['Material.003']} position={[42.695, 6.64, -44.585]} rotation={[-Math.PI, 0, 0]} scale={[-0.035, -1.716, -0.035]} />
      <mesh geometry={nodes.Cube131.geometry} material={materials['Material.003']} position={[34.221, 4.087, -29.384]} rotation={[Math.PI, -1.571, 0]} scale={[-0.035, -1.056, -0.035]} />
      <mesh geometry={nodes.Cube132.geometry} material={materials['Material.003']} position={[34.221, 4.087, -30.541]} rotation={[Math.PI, -1.571, 0]} scale={[-0.035, -1.056, -0.035]} />
      <mesh geometry={nodes.Cube133.geometry} material={materials['Material.003']} position={[34.221, 4.087, -31.706]} rotation={[Math.PI, -1.571, 0]} scale={[-0.035, -1.056, -0.035]} />
      <mesh geometry={nodes.Cube134.geometry} material={materials['Material.003']} position={[34.221, 4.087, -32.879]} rotation={[Math.PI, -1.571, 0]} scale={[-0.035, -1.056, -0.035]} />
      <group position={[-56.462, 5.208, -16.59]}>
        <mesh geometry={nodes.Cube053_1.geometry} material={materials['gray.001']} />
        <mesh geometry={nodes.Cube053_2.geometry} material={materials['Glass.002']} />
      </group>
      <mesh geometry={nodes.Cube034.geometry} material={materials['gray.001']} position={[-54.775, 4.78, -43.549]} scale={[1, 4.807, 3.466]} />
      <mesh geometry={nodes.Cube046.geometry} material={materials['gray.001']} position={[-54.775, 4.78, -83.38]} scale={[1, 4.807, 3.466]} />
      <group position={[-13.917, 5.208, -89.694]} scale={[1.33, 1, 1]}>
        <mesh geometry={nodes.Cube056_1.geometry} material={materials['gray.001']} />
        <mesh geometry={nodes.Cube056_2.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Cube056_3.geometry} material={materials.Marble} />
      </group>
      <mesh geometry={nodes.Cube061.geometry} material={materials['Material.003']} position={[-14.848, 16.422, -89.851]} rotation={[0, 0, -Math.PI]} scale={[-0.032, -1.547, -0.032]} />
      <mesh geometry={nodes.Cube062.geometry} material={materials['Material.003']} position={[-13.8, 16.422, -89.843]} rotation={[0, 0, -Math.PI]} scale={[-0.032, -1.547, -0.032]} />
      <mesh geometry={nodes.Cube063.geometry} material={materials['Material.003']} position={[-12.759, 16.422, -89.835]} rotation={[0, 0, -Math.PI]} scale={[-0.032, -1.547, -0.032]} />
      <mesh geometry={nodes.Cube064.geometry} material={materials['Material.003']} position={[-15.526, 16.422, -87.423]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[-0.032, -1.547, -0.032]} />
      <mesh geometry={nodes.Cube065.geometry} material={materials['Material.003']} position={[-15.518, 16.422, -88.472]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[-0.032, -1.547, -0.032]} />
      <mesh geometry={nodes.Cube066.geometry} material={materials['Material.003']} position={[-15.51, 16.422, -89.513]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[-0.032, -1.547, -0.032]} />
      <mesh geometry={nodes.Cube067.geometry} material={materials['Material.003']} position={[-15.529, 16.422, -86.388]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[-0.032, -1.547, -0.032]} />
      <mesh geometry={nodes.Cube068.geometry} material={materials['Material.003']} position={[-12.444, 16.422, -87.4]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[-0.032, -1.547, -0.032]} />
      <mesh geometry={nodes.Cube069.geometry} material={materials['Material.003']} position={[-12.436, 16.422, -88.448]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[-0.032, -1.547, -0.032]} />
      <mesh geometry={nodes.Cube070.geometry} material={materials['Material.003']} position={[-12.428, 16.422, -89.489]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[-0.032, -1.547, -0.032]} />
      <mesh geometry={nodes.Cube071.geometry} material={materials['Material.003']} position={[-12.447, 16.422, -86.364]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[-0.032, -1.547, -0.032]} />
      <mesh geometry={nodes.Cube072.geometry} material={materials['Material.003']} position={[-14.88, 16.422, -85.76]} rotation={[0, 0, -Math.PI]} scale={[-0.032, -1.547, -0.032]} />
      <mesh geometry={nodes.Cube073.geometry} material={materials['Material.003']} position={[-13.831, 16.422, -85.752]} rotation={[0, 0, -Math.PI]} scale={[-0.032, -1.547, -0.032]} />
      <mesh geometry={nodes.Cube074.geometry} material={materials['Material.003']} position={[-12.791, 16.422, -85.744]} rotation={[0, 0, -Math.PI]} scale={[-0.032, -1.547, -0.032]} />
      <mesh geometry={nodes.Cube080.geometry} material={materials['gray.001']} position={[28.822, 0.985, -91.396]} />
      <mesh geometry={nodes.Cube101.geometry} material={materials['gray.001']} position={[44.359, 0.985, -85.894]} rotation={[0, Math.PI / 2, 0]} scale={[2.826, 1, 1]} />
      <mesh geometry={nodes.Cube107.geometry} material={materials['gray.001']} position={[47.7, 0.985, -89.568]} rotation={[0, -Math.PI / 2, 0]} scale={[2.826, 1, 1]} />
      <mesh geometry={nodes.Cube108.geometry} material={materials['gray.001']} position={[50.302, 0.985, -84.019]} scale={[1.586, 1, 1]} />
      <mesh geometry={nodes.Cube114.geometry} material={materials['gray.001']} position={[52.378, 0.985, -50.329]} rotation={[Math.PI, 0, Math.PI]} scale={[1.586, 1, 1]} />
      <mesh geometry={nodes.Cube115.geometry} material={materials['gray.001']} position={[47.681, 0.985, -48.51]} rotation={[0, -Math.PI / 2, 0]} scale={[2.826, 1, 1]} />
      <mesh geometry={nodes.Cube121.geometry} material={materials['gray.001']} position={[44.34, 0.985, -44.836]} rotation={[0, 1.571, 0]} scale={[2.826, 1, 1]} />
      <mesh geometry={nodes.Cube081.geometry} material={materials['gray.003']} position={[31.246, 0.985, -91.599]} />
      <mesh geometry={nodes.Cube100.geometry} material={materials['gray.003']} position={[31.246, 0.985, -91.599]} />
      <mesh geometry={nodes.Cube102.geometry} material={materials['gray.003']} position={[46.052, 0.985, -92.489]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 2.269]} />
      <mesh geometry={nodes.Cube116.geometry} material={materials['gray.003']} position={[45.988, 0.985, -41.915]} rotation={[0, -Math.PI / 2, 0]} scale={[1, 1, 2.269]} />
      <mesh geometry={nodes.Cube020.geometry} material={materials['gray.003']} position={[36.618, 0.985, -44.94]} rotation={[0, -Math.PI / 2, 0]} scale={[1, 1, 2.269]} />
      <mesh geometry={nodes.Cube126.geometry} material={materials['gray.003']} position={[41.106, 0.985, -44.959]} rotation={[0, -Math.PI / 2, 0]} scale={[1, 1, 2.269]} />
      <mesh geometry={nodes.Cube122.geometry} material={materials['gray.001']} position={[39.855, 0.985, -81.953]} scale={[1.586, 1, 1]} />
      <mesh geometry={nodes.Cube123.geometry} material={materials['gray.001']} position={[30.304, 0.985, -86.749]} rotation={[0, Math.PI / 2, 0]} scale={[1.586, 1, 1]} />
      <mesh geometry={nodes.Cube019.geometry} material={materials['gray.001']} position={[31.992, 2.558, -38.238]} scale={2.377} />
      <mesh geometry={nodes.Cube135.geometry} material={materials['gray.002']} position={[35.868, 1.739, -27.366]} scale={1.698} />
      <mesh geometry={nodes.Cube153.geometry} material={materials['gray.002']} position={[34.126, 1.739, -11.175]} rotation={[Math.PI, 0, Math.PI]} scale={1.698} />
      <mesh geometry={nodes.Cube136.geometry} material={materials['Material.003']} position={[37.943, 4.534, -18.049]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[-0.035, -2.091, -0.035]} />
      <mesh geometry={nodes.Cube137.geometry} material={materials['Material.003']} position={[37.943, 4.534, -19.211]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[-0.035, -2.091, -0.035]} />
      <mesh geometry={nodes.Cube138.geometry} material={materials['Material.003']} position={[37.943, 4.534, -20.362]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[-0.035, -2.091, -0.035]} />
      <mesh geometry={nodes.Cube141.geometry} material={materials['Material.003']} position={[37.943, 4.534, -21.525]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[-0.035, -2.091, -0.035]} />
      <mesh geometry={nodes.Cube143.geometry} material={materials['Material.003']} position={[37.943, 4.534, -22.699]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[-0.035, -2.091, -0.035]} />
      <mesh geometry={nodes.Cube144.geometry} material={materials['Material.003']} position={[37.943, 4.534, -23.85]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[-0.035, -2.091, -0.035]} />
      <mesh geometry={nodes.Cube145.geometry} material={materials['Material.003']} position={[37.943, 4.534, -25.012]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[-0.035, -2.091, -0.035]} />
      <mesh geometry={nodes.Cube146.geometry} material={materials['Material.003']} position={[37.943, 4.534, -26.14]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[-0.035, -2.091, -0.035]} />
      <mesh geometry={nodes.Cube147.geometry} material={materials['Material.003']} position={[37.943, 1.763, -26.14]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[-0.035, -2.091, -0.035]} />
      <mesh geometry={nodes.Cube148.geometry} material={materials['Material.003']} position={[37.943, 1.763, -26.14]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={[-0.035, -2.091, -0.035]} />
      <mesh geometry={nodes.Cube155.geometry} material={materials['gray.001']} position={[24.433, 4.727, -9.143]} rotation={[0, 0, -Math.PI / 2]} scale={[0.497, 1.564, 0.415]} />
      <group position={[33.014, 1.481, -9.504]} rotation={[Math.PI / 2, 0, 0]} scale={[2.692, 1.245, 1.394]}>
        <mesh geometry={nodes.Plane017.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Plane017_1.geometry} material={materials.PVC} />
      </group>
      <mesh geometry={nodes.Cube139.geometry} material={materials['gray.001']} position={[-0.233, 4.931, -4.596]} scale={[1.045, 1, 1]} />
      <mesh geometry={nodes.Cube140.geometry} material={materials['gray.001']} position={[-0.2, -0.094, -1.416]} scale={[0.18, 1, 1]} />
      <mesh geometry={nodes.Plane305.geometry} material={materials['Glass.002']} position={[-2.022, 0.933, -1.416]} rotation={[Math.PI / 2, 0, 0]} scale={[1.019, 1, 1]} />
      <mesh geometry={nodes.Plane306.geometry} material={materials['Glass.002']} position={[2.258, 0.933, -1.554]} rotation={[Math.PI / 2, 0, 0]} scale={[1.019, 1, 1]} />
      <mesh geometry={nodes.Plane307.geometry} material={materials['Material.005']} position={[-2.022, 0.933, -1.416]} rotation={[Math.PI / 2, 0, 0]} scale={[1.019, 1, 1]} />
      <mesh geometry={nodes.Plane308.geometry} material={materials['Material.005']} position={[2.258, 0.933, -1.416]} rotation={[Math.PI / 2, 0, 0]} scale={[1.019, 1, 1]} />
      <group position={[-14.678, 6.588, -8.508]} rotation={[Math.PI / 2, 0, 0]} scale={[1.306, 1.306, 6.579]}>
        <mesh geometry={nodes.Plane_30.geometry} material={materials['gray.002']} />
        <mesh geometry={nodes.Plane_31.geometry} material={materials['gray.004']} />
      </group>
      <mesh geometry={nodes.Cube.geometry} material={materials['gray.003']} position={[-13.738, 8.394, -8.508]} scale={1.178} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['gray.003']} position={[-19.321, 8.394, -8.508]} scale={1.178} />
      <mesh geometry={nodes.Plane010.geometry} material={nodes.Plane010.material} position={[-1.196, -0.079, -44.701]} scale={[78.405, 61.03, 61.03]} />
      <mesh geometry={nodes.Text002.geometry} material={nodes.Text002.material} position={[-67.415, 0.016, -57.016]} rotation={[Math.PI / 2, 0, 1.588]} scale={6.696} />
      <mesh geometry={nodes.Text007.geometry} material={materials['Material.002']} position={[-0.927, 0.613, 6.796]} rotation={[Math.PI / 2, 0, 0]} scale={0.752} />
      <group position={[-0.933, 0.527, 6.61]}>
        <mesh geometry={nodes.Cube065_1.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Cube065_2.geometry} material={materials['Material.006']} />
      </group>
      <mesh geometry={nodes.Text001.geometry} material={nodes.Text001.material} position={[64.355, 0.016, -39.593]} rotation={[Math.PI / 2, 0, -1.553]} scale={6.696} />
      <mesh geometry={nodes.Text003.geometry} material={nodes.Text003.material} position={[9.282, -0.088, -97.683]} rotation={[Math.PI / 2, 0, -3.124]} scale={6.696} />
    </group>
  )
}

useGLTF.preload('/r3f/chostel.glb')

