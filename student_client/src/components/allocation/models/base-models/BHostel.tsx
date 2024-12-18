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

export default function BHostel(props:ModelProps): React.JSX.Element {
 
  const { nodes, materials } = useGLTF('/r3f/bhostel.glb') as GLTFResult;
  React.useEffect(() => {
	// Call the onLoad callback when the model has finished loading
	if (nodes && materials) {
	  props.onLoad();
	}
  }, [nodes, materials, props.onLoad]);

  return (
	<group {...props} dispose={null}>
	<group position={[-4.571, 0.001, 0]}>
	  <group position={[-6.704, 0.748, -9.485]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-9.453, 0.748, -9.485]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole001_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-6.674, 3.992, -9.485]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole002_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-9.456, 3.992, -9.485]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole003_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane_1.geometry} material={materials['gray.002']} position={[-6.766, 5.031, -9.56]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube_1.geometry} material={materials['gray.001']} position={[-8.073, 6.349, -9.239]} scale={[0.478, 0.478, 0.244]} />
	  <mesh geometry={nodes.Cube142_1.geometry} material={materials['Material.003']} position={[-7.924, 5.063, -9.02]} rotation={[0, 0, -Math.PI]} scale={[-0.027, -1.314, -0.027]} />
	</group>
	<group position={[-9.157, 0.001, 0]}>
	  <group position={[-6.704, 0.748, -9.485]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-9.453, 0.748, -9.485]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole001_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-6.674, 3.992, -9.485]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole002_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-9.456, 3.992, -9.485]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole003_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane_2.geometry} material={materials['gray.002']} position={[-6.766, 5.031, -9.56]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube_2.geometry} material={materials['gray.001']} position={[-8.073, 6.349, -9.239]} scale={[0.478, 0.478, 0.244]} />
	  <mesh geometry={nodes.Cube142_2.geometry} material={materials['Material.003']} position={[-7.924, 5.063, -9.02]} rotation={[0, 0, -Math.PI]} scale={[-0.027, -1.314, -0.027]} />
	</group>
	<group position={[-13.743, 0.001, 0]}>
	  <group position={[-6.704, 0.748, -9.485]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-9.453, 0.748, -9.485]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole001_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-6.674, 3.992, -9.485]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole002_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-9.456, 3.992, -9.485]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole003_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane_3.geometry} material={materials['gray.002']} position={[-6.766, 5.031, -9.56]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube_3.geometry} material={materials['gray.001']} position={[-8.073, 6.349, -9.239]} scale={[0.478, 0.478, 0.244]} />
	  <mesh geometry={nodes.Cube142_3.geometry} material={materials['Material.003']} position={[-7.924, 5.063, -9.02]} rotation={[0, 0, -Math.PI]} scale={[-0.027, -1.314, -0.027]} />
	</group>
	<group position={[-18.329, 0.001, 0]}>
	  <group position={[-6.704, 0.748, -9.485]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-9.453, 0.748, -9.485]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole001_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-6.674, 3.992, -9.485]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole002_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-9.456, 3.992, -9.485]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole003_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane_4.geometry} material={materials['gray.002']} position={[-6.766, 5.031, -9.56]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube_4.geometry} material={materials['gray.001']} position={[-8.073, 6.349, -9.239]} scale={[0.478, 0.478, 0.244]} />
	  <mesh geometry={nodes.Cube142_4.geometry} material={materials['Material.003']} position={[-7.924, 5.063, -9.02]} rotation={[0, 0, -Math.PI]} scale={[-0.027, -1.314, -0.027]} />
	</group>
	<group position={[-22.917, 0.001, 0]}>
	  <group position={[-6.704, 0.748, -9.485]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-9.453, 0.748, -9.485]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole001_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-6.674, 3.992, -9.485]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole002_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-9.456, 3.992, -9.485]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole003_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane_5.geometry} material={materials['gray.002']} position={[-6.766, 5.031, -9.56]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube_5.geometry} material={materials['gray.001']} position={[-8.073, 6.349, -9.239]} scale={[0.478, 0.478, 0.244]} />
	  <mesh geometry={nodes.Cube142_5.geometry} material={materials['Material.003']} position={[-7.924, 5.063, -9.02]} rotation={[0, 0, -Math.PI]} scale={[-0.027, -1.314, -0.027]} />
	</group>
	<group position={[4.675, 0.003, -0.001]}>
	  <group position={[8.934, 3.71, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole004_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[11.637, 3.71, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole005_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[8.914, 7.042, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole006_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[11.614, 7.042, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole007_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane004_1.geometry} material={materials['gray.002']} position={[11.472, 6.535, -9.483]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube012_1.geometry} material={materials['Material.003']} position={[10.37, 4.572, -9.094]} rotation={[0, 0, -3.138]} scale={[-0.027, -1.314, -0.027]} />
	  <mesh geometry={nodes.Cube007_1.geometry} material={materials['gray.001']} position={[8.466, 8.538, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube009_1.geometry} material={materials['gray.001']} position={[8.466, 5.22, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube033_1.geometry} material={materials['gray.001']} position={[8.466, 8.538, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube010_1.geometry} material={materials['gray.001']} position={[8.016, 5.22, -9.267]} scale={[0.112, 1, 0.189]} />
	  <mesh geometry={nodes.Cube011_1.geometry} material={materials['gray.001']} position={[12.473, 5.22, -9.267]} rotation={[-Math.PI, 0, 0]} scale={[-0.112, -1, -0.189]} />
	</group>
	<group position={[9.359, 0.003, -0.001]}>
	  <group position={[8.934, 3.71, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole004_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[11.637, 3.71, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole005_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[8.914, 7.042, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole006_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[11.614, 7.042, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole007_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane004_2.geometry} material={materials['gray.002']} position={[11.472, 6.535, -9.483]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube012_2.geometry} material={materials['Material.003']} position={[10.37, 4.572, -9.094]} rotation={[0, 0, -3.138]} scale={[-0.027, -1.314, -0.027]} />
	  <mesh geometry={nodes.Cube007_2.geometry} material={materials['gray.001']} position={[8.466, 8.538, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube009_2.geometry} material={materials['gray.001']} position={[8.466, 5.22, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube033_2.geometry} material={materials['gray.001']} position={[8.466, 8.538, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube010_2.geometry} material={materials['gray.001']} position={[8.016, 5.22, -9.267]} scale={[0.112, 1, 0.189]} />
	  <mesh geometry={nodes.Cube011_2.geometry} material={materials['gray.001']} position={[12.473, 5.22, -9.267]} rotation={[-Math.PI, 0, 0]} scale={[-0.112, -1, -0.189]} />
	</group>
	<group position={[14.043, 0.003, -0.001]}>
	  <group position={[8.934, 3.71, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole004_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[11.637, 3.71, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole005_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[8.914, 7.042, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole006_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[11.614, 7.042, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole007_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane004_3.geometry} material={materials['gray.002']} position={[11.472, 6.535, -9.483]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube012_3.geometry} material={materials['Material.003']} position={[10.37, 4.572, -9.094]} rotation={[0, 0, -3.138]} scale={[-0.027, -1.314, -0.027]} />
	  <mesh geometry={nodes.Cube007_3.geometry} material={materials['gray.001']} position={[8.466, 8.538, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube009_3.geometry} material={materials['gray.001']} position={[8.466, 5.22, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube033_3.geometry} material={materials['gray.001']} position={[8.466, 8.538, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube010_3.geometry} material={materials['gray.001']} position={[8.016, 5.22, -9.267]} scale={[0.112, 1, 0.189]} />
	  <mesh geometry={nodes.Cube011_3.geometry} material={materials['gray.001']} position={[12.473, 5.22, -9.267]} rotation={[-Math.PI, 0, 0]} scale={[-0.112, -1, -0.189]} />
	</group>
	<group position={[18.727, 0.003, -0.001]}>
	  <group position={[8.934, 3.71, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole004_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[11.637, 3.71, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole005_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[8.914, 7.042, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole006_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[11.614, 7.042, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole007_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane004_4.geometry} material={materials['gray.002']} position={[11.472, 6.535, -9.483]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube012_4.geometry} material={materials['Material.003']} position={[10.37, 4.572, -9.094]} rotation={[0, 0, -3.138]} scale={[-0.027, -1.314, -0.027]} />
	  <mesh geometry={nodes.Cube007_4.geometry} material={materials['gray.001']} position={[8.466, 8.538, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube009_4.geometry} material={materials['gray.001']} position={[8.466, 5.22, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube033_4.geometry} material={materials['gray.001']} position={[8.466, 8.538, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube010_4.geometry} material={materials['gray.001']} position={[8.016, 5.22, -9.267]} scale={[0.112, 1, 0.189]} />
	  <mesh geometry={nodes.Cube011_4.geometry} material={materials['gray.001']} position={[12.473, 5.22, -9.267]} rotation={[-Math.PI, 0, 0]} scale={[-0.112, -1, -0.189]} />
	</group>
	<group position={[23.413, 0.003, -0.001]}>
	  <group position={[8.934, 3.71, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole004_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[11.637, 3.71, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole005_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[8.914, 7.042, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole006_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[11.614, 7.042, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole007_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane004_5.geometry} material={materials['gray.002']} position={[11.472, 6.535, -9.483]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube012_5.geometry} material={materials['Material.003']} position={[10.37, 4.572, -9.094]} rotation={[0, 0, -3.138]} scale={[-0.027, -1.314, -0.027]} />
	  <mesh geometry={nodes.Cube007_5.geometry} material={materials['gray.001']} position={[8.466, 8.538, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube009_5.geometry} material={materials['gray.001']} position={[8.466, 5.22, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube033_5.geometry} material={materials['gray.001']} position={[8.466, 8.538, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube010_5.geometry} material={materials['gray.001']} position={[8.016, 5.22, -9.267]} scale={[0.112, 1, 0.189]} />
	  <mesh geometry={nodes.Cube011_5.geometry} material={materials['gray.001']} position={[12.473, 5.22, -9.267]} rotation={[-Math.PI, 0, 0]} scale={[-0.112, -1, -0.189]} />
	</group>
	<group position={[49.547, 0.055, -10.817]} rotation={[0, Math.PI / 2, 0]}>
	  <group position={[8.934, 3.71, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole004_6.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[11.637, 3.71, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole005_6.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[8.914, 7.042, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole006_6.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[11.614, 7.042, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole007_6.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane004_6.geometry} material={materials['gray.002']} position={[11.472, 6.535, -9.483]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube012_6.geometry} material={materials['Material.003']} position={[10.37, 4.572, -9.094]} rotation={[0, 0, -3.138]} scale={[-0.027, -1.314, -0.027]} />
	  <mesh geometry={nodes.Cube007_6.geometry} material={materials['gray.001']} position={[8.466, 8.538, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube009_6.geometry} material={materials['gray.001']} position={[8.466, 5.22, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube033_6.geometry} material={materials['gray.001']} position={[8.466, 8.538, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube010_6.geometry} material={materials['gray.001']} position={[8.016, 5.22, -9.267]} scale={[0.112, 1, 0.189]} />
	  <mesh geometry={nodes.Cube011_6.geometry} material={materials['gray.001']} position={[12.473, 5.22, -9.267]} rotation={[-Math.PI, 0, 0]} scale={[-0.112, -1, -0.189]} />
	</group>
	<group position={[49.547, 0.055, -15.501]} rotation={[0, Math.PI / 2, 0]}>
	  <group position={[8.934, 3.71, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole004_7.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[11.637, 3.71, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole005_7.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[8.914, 7.042, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole006_7.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[11.614, 7.042, -9.449]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole007_7.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane004_7.geometry} material={materials['gray.002']} position={[11.472, 6.535, -9.483]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube012_7.geometry} material={materials['Material.003']} position={[10.37, 4.572, -9.094]} rotation={[0, 0, -3.138]} scale={[-0.027, -1.314, -0.027]} />
	  <mesh geometry={nodes.Cube007_7.geometry} material={materials['gray.001']} position={[8.466, 8.538, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube009_7.geometry} material={materials['gray.001']} position={[8.466, 5.22, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube033_7.geometry} material={materials['gray.001']} position={[8.466, 8.538, -9.395]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube010_7.geometry} material={materials['gray.001']} position={[8.016, 5.22, -9.267]} scale={[0.112, 1, 0.189]} />
	  <mesh geometry={nodes.Cube011_7.geometry} material={materials['gray.001']} position={[12.473, 5.22, -9.267]} rotation={[-Math.PI, 0, 0]} scale={[-0.112, -1, -0.189]} />
	</group>
	<group position={[-0.005, 0.013, -4.693]}>
	  <group position={[40.08, 3.789, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole012_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 3.789, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole013_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -31.811]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole014_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -29.069]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole015_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole016_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole017_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane013_1.geometry} material={nodes.Plane013_1.material} position={[40.047, 6.614, -31.669]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube036_1.geometry} material={materials['Material.003']} position={[40.436, 4.65, -30.567]} rotation={[-3.138, Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	  <mesh geometry={nodes.Cube037_1.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube038_1.geometry} material={materials['gray.001']} position={[40.135, 5.298, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube041_1.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube039_1.geometry} material={materials['gray.001']} position={[40.262, 5.298, -28.213]} rotation={[0, Math.PI / 2, 0]} scale={[0.112, 1, 0.189]} />
	  <mesh geometry={nodes.Cube040_1.geometry} material={materials['gray.001']} position={[40.262, 5.298, -32.67]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.112, -1, -0.189]} />
	</group>
	<group position={[-0.005, 0.013, -12.222]}>
	  <group position={[40.08, 3.789, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole012_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 3.789, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole013_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -31.811]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole014_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -29.069]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole015_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole016_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole017_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane013_2.geometry} material={nodes.Plane013_2.material} position={[40.047, 6.614, -31.669]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube036_2.geometry} material={materials['Material.003']} position={[40.436, 4.65, -30.567]} rotation={[-3.138, Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	  <mesh geometry={nodes.Cube037_2.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube038_2.geometry} material={materials['gray.001']} position={[40.135, 5.298, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube041_2.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube039_2.geometry} material={materials['gray.001']} position={[40.262, 5.298, -28.213]} rotation={[0, Math.PI / 2, 0]} scale={[0.112, 1, 0.189]} />
	  <mesh geometry={nodes.Cube040_2.geometry} material={materials['gray.001']} position={[40.262, 5.298, -32.67]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.112, -1, -0.189]} />
	</group>
	<group position={[-0.005, 0.013, -16.929]}>
	  <group position={[40.08, 3.789, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole012_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 3.789, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole013_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -31.811]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole014_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -29.069]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole015_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole016_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole017_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane013_3.geometry} material={nodes.Plane013_3.material} position={[40.047, 6.614, -31.669]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube036_3.geometry} material={materials['Material.003']} position={[40.436, 4.65, -30.567]} rotation={[-3.138, Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	  <mesh geometry={nodes.Cube037_3.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube038_3.geometry} material={materials['gray.001']} position={[40.135, 5.298, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube041_3.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube039_3.geometry} material={materials['gray.001']} position={[40.262, 5.298, -28.213]} rotation={[0, Math.PI / 2, 0]} scale={[0.112, 1, 0.189]} />
	  <mesh geometry={nodes.Cube040_3.geometry} material={materials['gray.001']} position={[40.262, 5.298, -32.67]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.112, -1, -0.189]} />
	</group>
	<group position={[-0.005, 0.013, -21.624]}>
	  <group position={[40.08, 3.789, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole012_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 3.789, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole013_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -31.811]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole014_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -29.069]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole015_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole016_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole017_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane013_4.geometry} material={nodes.Plane013_4.material} position={[40.047, 6.614, -31.669]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube036_4.geometry} material={materials['Material.003']} position={[40.436, 4.65, -30.567]} rotation={[-3.138, Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	  <mesh geometry={nodes.Cube037_4.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube038_4.geometry} material={materials['gray.001']} position={[40.135, 5.298, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube041_4.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube039_4.geometry} material={materials['gray.001']} position={[40.262, 5.298, -28.213]} rotation={[0, Math.PI / 2, 0]} scale={[0.112, 1, 0.189]} />
	  <mesh geometry={nodes.Cube040_4.geometry} material={materials['gray.001']} position={[40.262, 5.298, -32.67]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.112, -1, -0.189]} />
	</group>
	<group position={[-0.005, 0.013, -26.332]}>
	  <group position={[40.08, 3.789, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole012_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 3.789, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole013_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -31.811]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole014_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -29.069]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole015_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole016_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole017_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane013_5.geometry} material={nodes.Plane013_5.material} position={[40.047, 6.614, -31.669]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube036_5.geometry} material={materials['Material.003']} position={[40.436, 4.65, -30.567]} rotation={[-3.138, Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	  <mesh geometry={nodes.Cube037_5.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube038_5.geometry} material={materials['gray.001']} position={[40.135, 5.298, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube041_5.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube039_5.geometry} material={materials['gray.001']} position={[40.262, 5.298, -28.213]} rotation={[0, Math.PI / 2, 0]} scale={[0.112, 1, 0.189]} />
	  <mesh geometry={nodes.Cube040_5.geometry} material={materials['gray.001']} position={[40.262, 5.298, -32.67]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.112, -1, -0.189]} />
	</group>
	<group position={[0.006, 0, -4.57]}>
	  <group position={[-38.465, 0.748, -13.478]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole018_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 0.748, -16.226]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole019_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 3.992, -13.448]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole020_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 3.992, -16.229]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole021_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane014_1.geometry} material={nodes.Plane014_1.material} position={[-38.39, 5.031, -13.54]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube053_1.geometry} material={materials['gray.001']} position={[-38.711, 6.349, -14.847]} rotation={[0, -Math.PI / 2, 0]} scale={[0.478, 0.478, 0.244]} />
	  <mesh geometry={nodes.Cube054_1.geometry} material={materials['Material.003']} position={[-38.93, 5.063, -14.698]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	</group>
	<group position={[0.006, 0, -9.167]}>
	  <group position={[-38.465, 0.748, -13.478]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole018_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 0.748, -16.226]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole019_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 3.992, -13.448]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole020_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 3.992, -16.229]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole021_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane014_2.geometry} material={nodes.Plane014_2.material} position={[-38.39, 5.031, -13.54]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube053_2.geometry} material={materials['gray.001']} position={[-38.711, 6.349, -14.847]} rotation={[0, -Math.PI / 2, 0]} scale={[0.478, 0.478, 0.244]} />
	  <mesh geometry={nodes.Cube054_2.geometry} material={materials['Material.003']} position={[-38.93, 5.063, -14.698]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	</group>
	<group position={[0.006, 0, -13.747]}>
	  <group position={[-38.465, 0.748, -13.478]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole018_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 0.748, -16.226]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole019_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 3.992, -13.448]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole020_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 3.992, -16.229]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole021_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane014_3.geometry} material={nodes.Plane014_3.material} position={[-38.39, 5.031, -13.54]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube053_3.geometry} material={materials['gray.001']} position={[-38.711, 6.349, -14.847]} rotation={[0, -Math.PI / 2, 0]} scale={[0.478, 0.478, 0.244]} />
	  <mesh geometry={nodes.Cube054_3.geometry} material={materials['Material.003']} position={[-38.93, 5.063, -14.698]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	</group>
	<group position={[0.006, 0, -18.344]}>
	  <group position={[-38.465, 0.748, -13.478]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole018_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 0.748, -16.226]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole019_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 3.992, -13.448]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole020_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 3.992, -16.229]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole021_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane014_4.geometry} material={nodes.Plane014_4.material} position={[-38.39, 5.031, -13.54]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube053_4.geometry} material={materials['gray.001']} position={[-38.711, 6.349, -14.847]} rotation={[0, -Math.PI / 2, 0]} scale={[0.478, 0.478, 0.244]} />
	  <mesh geometry={nodes.Cube054_4.geometry} material={materials['Material.003']} position={[-38.93, 5.063, -14.698]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	</group>
	<group position={[0.006, 0, -27.553]}>
	  <group position={[-38.465, 0.748, -13.478]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole018_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 0.748, -16.226]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole019_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 3.992, -13.448]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole020_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 3.992, -16.229]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole021_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane014_5.geometry} material={nodes.Plane014_5.material} position={[-38.39, 5.031, -13.54]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube053_5.geometry} material={materials['gray.001']} position={[-38.711, 6.349, -14.847]} rotation={[0, -Math.PI / 2, 0]} scale={[0.478, 0.478, 0.244]} />
	  <mesh geometry={nodes.Cube054_5.geometry} material={materials['Material.003']} position={[-38.93, 5.063, -14.698]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	</group>
	<group position={[0.006, 0, -32.15]}>
	  <group position={[-38.465, 0.748, -13.478]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole018_6.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 0.748, -16.226]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole019_6.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 3.992, -13.448]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole020_6.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 3.992, -16.229]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole021_6.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane014_6.geometry} material={nodes.Plane014_6.material} position={[-38.39, 5.031, -13.54]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube053_6.geometry} material={materials['gray.001']} position={[-38.711, 6.349, -14.847]} rotation={[0, -Math.PI / 2, 0]} scale={[0.478, 0.478, 0.244]} />
	  <mesh geometry={nodes.Cube054_6.geometry} material={materials['Material.003']} position={[-38.93, 5.063, -14.698]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	</group>
	<group position={[0.006, 0, -36.73]}>
	  <group position={[-38.465, 0.748, -13.478]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole018_7.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 0.748, -16.226]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole019_7.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 3.992, -13.448]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole020_7.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 3.992, -16.229]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole021_7.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane014_7.geometry} material={nodes.Plane014_7.material} position={[-38.39, 5.031, -13.54]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube053_7.geometry} material={materials['gray.001']} position={[-38.711, 6.349, -14.847]} rotation={[0, -Math.PI / 2, 0]} scale={[0.478, 0.478, 0.244]} />
	  <mesh geometry={nodes.Cube054_7.geometry} material={materials['Material.003']} position={[-38.93, 5.063, -14.698]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	</group>
	<group position={[0.006, 0, -41.327]}>
	  <group position={[-38.465, 0.748, -13.478]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole018_8.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 0.748, -16.226]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole019_8.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 3.992, -13.448]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole020_8.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 3.992, -16.229]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole021_8.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane014_8.geometry} material={nodes.Plane014_8.material} position={[-38.39, 5.031, -13.54]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube053_8.geometry} material={materials['gray.001']} position={[-38.711, 6.349, -14.847]} rotation={[0, -Math.PI / 2, 0]} scale={[0.478, 0.478, 0.244]} />
	  <mesh geometry={nodes.Cube054_8.geometry} material={materials['Material.003']} position={[-38.93, 5.063, -14.698]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	</group>
	<group position={[0.006, 0, -22.947]}>
	  <group position={[-38.465, 0.748, -13.478]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole018_9.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 0.748, -16.226]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole019_9.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 3.992, -13.448]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole020_9.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-38.465, 3.992, -16.229]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole021_9.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane014_9.geometry} material={nodes.Plane014_9.material} position={[-38.39, 5.031, -13.54]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube053_9.geometry} material={materials['gray.001']} position={[-38.711, 6.349, -14.847]} rotation={[0, -Math.PI / 2, 0]} scale={[0.478, 0.478, 0.244]} />
	  <mesh geometry={nodes.Cube054_9.geometry} material={materials['Material.003']} position={[-38.93, 5.063, -14.698]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	</group>
	<group position={[4.585, -0.001, 0.202]}>
	  <group position={[-32.428, 0.748, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole022_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-29.68, 0.748, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole023_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-32.458, 3.992, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole024_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-29.677, 3.992, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole025_1.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane016_1.geometry} material={materials['gray.002']} position={[-32.366, 5.031, -63.844]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube060_1.geometry} material={materials['gray.001']} position={[-31.059, 6.349, -64.165]} rotation={[Math.PI, 0, Math.PI]} scale={[0.478, 0.478, 0.244]} />
	  <mesh geometry={nodes.Cube062_1.geometry} material={materials['Material.003']} position={[-31.208, 5.063, -64.384]} rotation={[-Math.PI, 0, 0]} scale={[-0.027, -1.314, -0.027]} />
	</group>
	<group position={[9.186, -0.001, 0.202]}>
	  <group position={[-32.428, 0.748, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole022_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-29.68, 0.748, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole023_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-32.458, 3.992, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole024_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-29.677, 3.992, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole025_2.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane016_2.geometry} material={materials['gray.002']} position={[-32.366, 5.031, -63.844]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube060_2.geometry} material={materials['gray.001']} position={[-31.059, 6.349, -64.165]} rotation={[Math.PI, 0, Math.PI]} scale={[0.478, 0.478, 0.244]} />
	  <mesh geometry={nodes.Cube062_2.geometry} material={materials['Material.003']} position={[-31.208, 5.063, -64.384]} rotation={[-Math.PI, 0, 0]} scale={[-0.027, -1.314, -0.027]} />
	</group>
	<group position={[13.779, -0.001, 0.202]}>
	  <group position={[-32.428, 0.748, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole022_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-29.68, 0.748, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole023_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-32.458, 3.992, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole024_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-29.677, 3.992, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole025_3.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane016_3.geometry} material={materials['gray.002']} position={[-32.366, 5.031, -63.844]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube060_3.geometry} material={materials['gray.001']} position={[-31.059, 6.349, -64.165]} rotation={[Math.PI, 0, Math.PI]} scale={[0.478, 0.478, 0.244]} />
	  <mesh geometry={nodes.Cube062_3.geometry} material={materials['Material.003']} position={[-31.208, 5.063, -64.384]} rotation={[-Math.PI, 0, 0]} scale={[-0.027, -1.314, -0.027]} />
	</group>
	<group position={[18.38, -0.001, 0.202]}>
	  <group position={[-32.428, 0.748, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole022_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-29.68, 0.748, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole023_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-32.458, 3.992, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole024_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-29.677, 3.992, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole025_4.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane016_4.geometry} material={materials['gray.002']} position={[-32.366, 5.031, -63.844]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube060_4.geometry} material={materials['gray.001']} position={[-31.059, 6.349, -64.165]} rotation={[Math.PI, 0, Math.PI]} scale={[0.478, 0.478, 0.244]} />
	  <mesh geometry={nodes.Cube062_4.geometry} material={materials['Material.003']} position={[-31.208, 5.063, -64.384]} rotation={[-Math.PI, 0, 0]} scale={[-0.027, -1.314, -0.027]} />
	</group>
	<group position={[22.982, -0.001, 0.202]}>
	  <group position={[-32.428, 0.748, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole022_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-29.68, 0.748, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole023_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-32.458, 3.992, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole024_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	  </group>
	  <group position={[-29.677, 3.992, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole025_5.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane016_5.geometry} material={materials['gray.002']} position={[-32.366, 5.031, -63.844]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube060_5.geometry} material={materials['gray.001']} position={[-31.059, 6.349, -64.165]} rotation={[Math.PI, 0, Math.PI]} scale={[0.478, 0.478, 0.244]} />
	  <mesh geometry={nodes.Cube062_5.geometry} material={materials['Material.003']} position={[-31.208, 5.063, -64.384]} rotation={[-Math.PI, 0, 0]} scale={[-0.027, -1.314, -0.027]} />
	</group>
	<group position={[63.59, 0.013, -23.897]} rotation={[0, Math.PI / 2, 0]}>
	  <group position={[40.08, 3.789, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole012_6.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 3.789, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole013_6.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -31.811]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole014_6.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -29.069]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole015_6.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole016_6.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole017_6.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane013_6.geometry} material={nodes.Plane013_6.material} position={[40.047, 6.614, -31.669]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube036_6.geometry} material={materials['Material.003']} position={[40.436, 4.65, -30.567]} rotation={[-3.138, Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	  <mesh geometry={nodes.Cube037_6.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube038_6.geometry} material={materials['gray.001']} position={[40.135, 5.298, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube041_6.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube039_6.geometry} material={materials['gray.001']} position={[40.262, 5.298, -28.213]} rotation={[0, Math.PI / 2, 0]} scale={[0.112, 1, 0.189]} />
	  <mesh geometry={nodes.Cube040_6.geometry} material={materials['gray.001']} position={[40.262, 5.298, -32.67]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.112, -1, -0.189]} />
	</group>
	<group position={[58.891, 0.013, -23.897]} rotation={[0, Math.PI / 2, 0]}>
	  <group position={[40.08, 3.789, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole012_7.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 3.789, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole013_7.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -31.811]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole014_7.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -29.069]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole015_7.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole016_7.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole017_7.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane013_7.geometry} material={nodes.Plane013_7.material} position={[40.047, 6.614, -31.669]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube036_7.geometry} material={materials['Material.003']} position={[40.436, 4.65, -30.567]} rotation={[-3.138, Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	  <mesh geometry={nodes.Cube037_7.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube038_7.geometry} material={materials['gray.001']} position={[40.135, 5.298, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube041_7.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube039_7.geometry} material={materials['gray.001']} position={[40.262, 5.298, -28.213]} rotation={[0, Math.PI / 2, 0]} scale={[0.112, 1, 0.189]} />
	  <mesh geometry={nodes.Cube040_7.geometry} material={materials['gray.001']} position={[40.262, 5.298, -32.67]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.112, -1, -0.189]} />
	</group>
	<group position={[54.197, 0.013, -23.897]} rotation={[0, Math.PI / 2, 0]}>
	  <group position={[40.08, 3.789, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole012_8.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 3.789, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole013_8.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -31.811]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole014_8.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -29.069]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole015_8.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole016_8.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole017_8.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane013_8.geometry} material={nodes.Plane013_8.material} position={[40.047, 6.614, -31.669]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube036_8.geometry} material={materials['Material.003']} position={[40.436, 4.65, -30.567]} rotation={[-3.138, Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	  <mesh geometry={nodes.Cube037_8.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube038_8.geometry} material={materials['gray.001']} position={[40.135, 5.298, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube041_8.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube039_8.geometry} material={materials['gray.001']} position={[40.262, 5.298, -28.213]} rotation={[0, Math.PI / 2, 0]} scale={[0.112, 1, 0.189]} />
	  <mesh geometry={nodes.Cube040_8.geometry} material={materials['gray.001']} position={[40.262, 5.298, -32.67]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.112, -1, -0.189]} />
	</group>
	<group position={[49.499, 0.013, -23.897]} rotation={[0, Math.PI / 2, 0]}>
	  <group position={[40.08, 3.789, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole012_9.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 3.789, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole013_9.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -31.811]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole014_9.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -29.069]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole015_9.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole016_9.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole017_9.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane013_9.geometry} material={nodes.Plane013_9.material} position={[40.047, 6.614, -31.669]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube036_9.geometry} material={materials['Material.003']} position={[40.436, 4.65, -30.567]} rotation={[-3.138, Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	  <mesh geometry={nodes.Cube037_9.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube038_9.geometry} material={materials['gray.001']} position={[40.135, 5.298, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube041_9.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube039_9.geometry} material={materials['gray.001']} position={[40.262, 5.298, -28.213]} rotation={[0, Math.PI / 2, 0]} scale={[0.112, 1, 0.189]} />
	  <mesh geometry={nodes.Cube040_9.geometry} material={materials['gray.001']} position={[40.262, 5.298, -32.67]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.112, -1, -0.189]} />
	</group>
	<group position={[44.789, 0.013, -23.897]} rotation={[0, Math.PI / 2, 0]}>
	  <group position={[40.08, 3.789, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole012_10.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 3.789, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole013_10.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -31.811]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole014_10.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -29.069]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole015_10.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole016_10.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole017_10.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane013_10.geometry} material={nodes.Plane013_10.material} position={[40.047, 6.614, -31.669]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube036_10.geometry} material={materials['Material.003']} position={[40.436, 4.65, -30.567]} rotation={[-3.138, Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	  <mesh geometry={nodes.Cube037_10.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube038_10.geometry} material={materials['gray.001']} position={[40.135, 5.298, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube041_10.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube039_10.geometry} material={materials['gray.001']} position={[40.262, 5.298, -28.213]} rotation={[0, Math.PI / 2, 0]} scale={[0.112, 1, 0.189]} />
	  <mesh geometry={nodes.Cube040_10.geometry} material={materials['gray.001']} position={[40.262, 5.298, -32.67]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.112, -1, -0.189]} />
	</group>
	<group position={[40.091, 0.013, -23.897]} rotation={[0, Math.PI / 2, 0]}>
	  <group position={[40.08, 3.789, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole012_11.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 3.789, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole013_11.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -31.811]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole014_11.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 7.121, -29.069]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole015_11.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole016_11.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <group position={[40.08, 1.287, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
		<mesh geometry={nodes.CTRL_Hole017_11.geometry} material={materials.hidden_material} />
		<mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
		<mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
		<mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
		<mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	  </group>
	  <mesh geometry={nodes.Plane013_11.geometry} material={nodes.Plane013_11.material} position={[40.047, 6.614, -31.669]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 5.038]} />
	  <mesh geometry={nodes.Cube036_11.geometry} material={materials['Material.003']} position={[40.436, 4.65, -30.567]} rotation={[-3.138, Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	  <mesh geometry={nodes.Cube037_11.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube038_11.geometry} material={materials['gray.001']} position={[40.135, 5.298, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube041_11.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	  <mesh geometry={nodes.Cube039_11.geometry} material={materials['gray.001']} position={[40.262, 5.298, -28.213]} rotation={[0, Math.PI / 2, 0]} scale={[0.112, 1, 0.189]} />
	  <mesh geometry={nodes.Cube040_11.geometry} material={materials['gray.001']} position={[40.262, 5.298, -32.67]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.112, -1, -0.189]} />
	</group>
	<group position={[40.222, -0.051, -20.046]} rotation={[0, Math.PI / 2, 0]}>
	  <mesh geometry={nodes.CTRL_Baseboard.geometry} material={materials.hidden_material} position={[0, -0.1, 0.177]} />
	  <mesh geometry={nodes.CTRL_Hole009.geometry} material={materials.hidden_material} position={[0, -0.002, 0.12]} />
	  <mesh geometry={nodes.DoorFrame.geometry} material={materials.Door_material}>
		<mesh geometry={nodes.Door.geometry} material={materials.Door_material} position={[0.418, 1.05, 0.022]}>
		  <mesh geometry={nodes.Handle_Back.geometry} material={materials.Handle_material} position={[-0.764, 0, -0.005]} />
		  <mesh geometry={nodes.Handle_Front.geometry} material={materials.Handle_material} position={[-0.764, 0, -0.029]} rotation={[-Math.PI, 0, 0]} />
		</mesh>
	  </mesh>
	</group>
	<group position={[40.588, -0.051, -17.723]} rotation={[0, Math.PI / 2, 0]}>
	  <mesh geometry={nodes.CTRL_Baseboard001.geometry} material={materials.hidden_material} position={[0, -0.1, 0.177]} />
	  <mesh geometry={nodes.CTRL_Hole010.geometry} material={materials.hidden_material} position={[0, -0.002, 0.12]} />
	  <mesh geometry={nodes.DoorFrame001.geometry} material={materials.Door_material}>
		<mesh geometry={nodes.Door001.geometry} material={materials.Door_material} position={[0.418, 1.05, 0.022]}>
		  <mesh geometry={nodes.Handle_Back001.geometry} material={materials.Handle_material} position={[-0.764, 0, -0.005]} />
		  <mesh geometry={nodes.Handle_Front001.geometry} material={materials.Handle_material} position={[-0.764, 0, -0.029]} rotation={[-Math.PI, 0, 0]} />
		</mesh>
	  </mesh>
	</group>
	<group position={[40.588, -0.051, -15.095]} rotation={[0, Math.PI / 2, 0]}>
	  <mesh geometry={nodes.CTRL_Baseboard002.geometry} material={materials.hidden_material} position={[0, -0.1, 0.177]} />
	  <mesh geometry={nodes.CTRL_Hole011.geometry} material={materials.hidden_material} position={[0, -0.002, 0.12]} />
	  <mesh geometry={nodes.DoorFrame002.geometry} material={materials.Door_material}>
		<mesh geometry={nodes.Door002.geometry} material={materials.Door_material} position={[0.418, 1.05, 0.022]}>
		  <mesh geometry={nodes.Handle_Back002.geometry} material={materials.Handle_material} position={[-0.764, 0, -0.005]} />
		  <mesh geometry={nodes.Handle_Front002.geometry} material={materials.Handle_material} position={[-0.764, 0, -0.029]} rotation={[-Math.PI, 0, 0]} />
		</mesh>
	  </mesh>
	</group>
	<group position={[-6.704, 0.748, -9.485]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	</group>
	<group position={[-9.453, 0.748, -9.485]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole001.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	</group>
	<group position={[-6.674, 3.992, -9.485]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole002.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	</group>
	<group position={[-9.456, 3.992, -9.485]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole003.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window_6.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window_7.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window_9.geometry} material={materials.Marble} />
	</group>
	<group position={[8.934, 3.71, -9.449]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole004.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
	  <mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	</group>
	<group position={[11.637, 3.71, -9.449]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole005.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
	  <mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	</group>
	<group position={[8.914, 7.042, -9.449]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole006.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
	  <mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	</group>
	<group position={[11.614, 7.042, -9.449]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole007.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window001_6.geometry} material={materials.PVC} />
	  <mesh geometry={nodes.Window001_7.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window001_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window001_9.geometry} material={materials.Marble} />
	</group>
	<group position={[40.08, 3.789, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole012.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
	  <mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	</group>
	<group position={[40.08, 3.789, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole013.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
	  <mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	</group>
	<group position={[40.08, 7.121, -31.811]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole014.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
	  <mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	</group>
	<group position={[40.08, 7.121, -29.069]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole015.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
	  <mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	</group>
	<group position={[40.08, 1.287, -29.131]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole016.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
	  <mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	</group>
	<group position={[40.08, 1.287, -31.834]} rotation={[0, Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole017.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window002_6.geometry} material={materials.PVC} />
	  <mesh geometry={nodes.Window002_7.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window002_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window002_9.geometry} material={materials.Marble} />
	</group>
	<group position={[-38.465, 0.748, -13.478]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole018.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	</group>
	<group position={[-38.465, 0.748, -16.226]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole019.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	</group>
	<group position={[-38.465, 3.992, -13.448]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole020.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	</group>
	<group position={[-38.465, 3.992, -16.229]} rotation={[0, -Math.PI / 2, 0]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole021.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window003_6.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window003_7.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window003_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window003_9.geometry} material={materials.Marble} />
	</group>
	<group position={[-32.428, 0.748, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole022.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	</group>
	<group position={[-29.68, 0.748, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole023.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	</group>
	<group position={[-32.458, 3.992, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole024.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	</group>
	<group position={[-29.677, 3.992, -63.919]} rotation={[Math.PI, 0, Math.PI]} scale={[0.633, 0.7, 0.771]}>
	  <mesh geometry={nodes.CTRL_Hole025.geometry} material={materials.hidden_material} />
	  <mesh geometry={nodes.Window004_8.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window004_9.geometry} material={materials.Plastic} />
	  <mesh geometry={nodes.Window004_10.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Window004_11.geometry} material={materials.Marble} />
	</group>
	<mesh geometry={nodes.Cube001.geometry} material={materials['gray.001']} position={[-6.65, 9.453, -9.324]} scale={[0.819, 0.819, 0.252]} />
	<mesh geometry={nodes.Plane001.geometry} material={materials['gray.001']} position={[-34.265, 1.002, -9.535]} rotation={[-Math.PI / 2, 0, 0]} />
	<mesh geometry={nodes.Cube002.geometry} material={materials['gray.001']} position={[-34.555, 8.203, -9.304]} scale={[1, 1, 0.263]} />
	<mesh geometry={nodes.Cube055.geometry} material={materials['gray.001']} position={[-38.631, 8.203, -10.055]} rotation={[0, -Math.PI / 2, 0]} scale={[1, 1, 0.263]} />
	<mesh geometry={nodes.Cube003.geometry} material={materials['gray.001']} position={[-38.28, 6.339, -60.769]} rotation={[0, -Math.PI / 2, 0]} scale={[0.478, 0.478, 0.244]} />
	<mesh geometry={nodes.Cube057.geometry} material={materials['gray.001']} position={[-38.28, 6.339, -61.514]} rotation={[Math.PI, Math.PI / 2, 0]} scale={[-0.478, -0.478, -0.244]} />
	<mesh geometry={nodes.Plane002.geometry} material={materials['gray.001']} position={[6.126, 4.407, -9.39]} rotation={[-Math.PI / 2, -0.018, 0]} />
	<mesh geometry={nodes.Plane003.geometry} material={materials['gray.001']} position={[7.399, 4.407, -9.603]} rotation={[-Math.PI / 2, 0, 0]} />
	<mesh geometry={nodes.Cube004.geometry} material={materials['gray.001']} position={[9.104, 9.453, -9.324]} scale={[0.826, 0.819, 0.252]} />
	<mesh geometry={nodes.Cube005.geometry} material={materials['Material.003']} position={[6.155, 5.063, -8.857]} rotation={[0, 0, -3.138]} scale={[-0.027, -1.314, -0.027]} />
	<mesh geometry={nodes.Cube006.geometry} material={materials['Material.003']} position={[7.261, 5.063, -9.018]} rotation={[0, 0, -3.138]} scale={[-0.027, -1.314, -0.027]} />
	<mesh geometry={nodes.Cube008.geometry} material={materials['gray.001']} position={[12.594, 2.125, -9.223]} scale={[0.399, 1, 0.334]} />
	<mesh geometry={nodes.Cube013.geometry} material={materials['gray.001']} position={[17.295, 2.125, -9.223]} scale={[0.399, 1, 0.334]} />
	<mesh geometry={nodes.Cube014.geometry} material={materials['gray.001']} position={[21.993, 2.125, -9.223]} scale={[0.399, 1, 0.334]} />
	<mesh geometry={nodes.Cube015.geometry} material={materials['gray.001']} position={[26.701, 2.125, -9.223]} scale={[0.399, 1, 0.334]} />
	<mesh geometry={nodes.Cube016.geometry} material={materials['gray.001']} position={[31.368, 2.125, -9.223]} />
	<mesh geometry={nodes.Cube017.geometry} material={materials['Material.003']} position={[10.372, 4.549, -9.15]} rotation={[0, 0, -3.138]} scale={[-0.027, -1.314, -0.027]} />
	<mesh geometry={nodes.Plane005.geometry} material={materials['gray.002']} position={[10.044, 1.019, -9.472]} rotation={[Math.PI / 2, 0, 0]} scale={[2.162, 1, 1]} />
	<mesh geometry={nodes.CTRL_Hole008.geometry} material={materials.hidden_material} />
	<group position={[14.933, 0.829, -9.472]} rotation={[Math.PI / 2, 0, 0]} scale={[2.162, 1, 0.891]}>
	  <mesh geometry={nodes.Plane005_1.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Plane005_2.geometry} material={materials.PVC} />
	</group>
	<group position={[19.515, 0.829, -9.472]} rotation={[Math.PI / 2, 0, 0]} scale={[2.162, 1, 0.891]}>
	  <mesh geometry={nodes.Plane005_1.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Plane005_2.geometry} material={materials.PVC} />
	</group>
	<group position={[24.322, 0.829, -9.472]} rotation={[Math.PI / 2, 0, 0]} scale={[2.162, 1, 0.891]}>
	  <mesh geometry={nodes.Plane005_1.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Plane005_2.geometry} material={materials.PVC} />
	</group>
	<group position={[28.883, 0.829, -9.472]} rotation={[Math.PI / 2, 0, 0]} scale={[2.162, 1, 0.891]}>
	  <mesh geometry={nodes.Plane005_1.geometry} material={materials['Glass.002']} />
	  <mesh geometry={nodes.Plane005_2.geometry} material={materials.PVC} />
	</group>
	<mesh geometry={nodes.Cube018.geometry} material={materials['gray.001']} position={[13.297, 2.383, -9.166]} scale={[0.321, 0.074, 0.226]} />
	<mesh geometry={nodes.Cube019.geometry} material={materials['Material.003']} position={[14.597, 2.574, -9.071]} rotation={[0, 0, 1.575]} scale={[-0.021, -1.314, -0.027]} />
	<mesh geometry={nodes.Cube020.geometry} material={materials['Material.003']} position={[20.272, 2.574, -9.071]} rotation={[0, 0, 1.575]} scale={[-0.021, -1.314, -0.027]} />
	<mesh geometry={nodes.Cube021.geometry} material={materials['Material.003']} position={[20.272, 2.574, -9.071]} rotation={[0, 0, 1.575]} scale={[-0.021, -1.314, -0.027]} />
	<mesh geometry={nodes.Cube022.geometry} material={materials['Material.003']} position={[25.971, 2.574, -9.071]} rotation={[0, 0, 1.575]} scale={[-0.021, -1.314, -0.027]} />
	<mesh geometry={nodes.Cube023.geometry} material={materials.Plastic} position={[36.941, 4.351, -9.223]} scale={[1, 0.043, 0.043]} />
	<mesh geometry={nodes.Cube026.geometry} material={materials.Plastic} position={[36.941, 7.237, -9.223]} scale={[1, 0.043, 0.043]} />
	<mesh geometry={nodes.Cube025.geometry} material={materials.Plastic} position={[36.152, 3.349, -9.223]} rotation={[0, 0, -Math.PI / 2]} scale={[1, 0.02, 0.02]} />
	<mesh geometry={nodes.Cube027.geometry} material={materials.Plastic} position={[36.152, 6.234, -9.223]} rotation={[0, 0, -Math.PI / 2]} scale={[1, 0.02, 0.02]} />
	<mesh geometry={nodes.Cube024.geometry} material={materials['gray.001']} position={[36.941, 5.617, -9.347]} scale={[1, 0.043, 0.205]} />
	<mesh geometry={nodes.Cube028.geometry} material={materials['gray.001']} position={[39.919, 2.14, -11.349]} scale={[0.541, 0.308, 2.227]} />
	<group position={[39.902, 4.357, -11.451]} scale={[0.561, 0.319, 2.31]}>
	  <mesh geometry={nodes.Cube073_1.geometry} material={materials['gray.001']} />
	  <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
	</group>
	<group position={[39.902, 7.291, -11.451]} scale={[0.561, 0.319, 2.31]}>
	  <mesh geometry={nodes.Cube073_1.geometry} material={materials['gray.001']} />
	  <mesh geometry={nodes.Cube073_2.geometry} material={materials['railing.002']} />
	</group>
	<mesh geometry={nodes.Cube031.geometry} material={materials['railing.002']} position={[40.338, 2.601, -9.463]} scale={[0.021, 1.056, 0.021]} />
	<mesh geometry={nodes.Cube032.geometry} material={materials['gray.001']} position={[40.211, 9.495, -28.806]} rotation={[0, -1.571, 0]} />
	<group position={[40.222, 6.98, -17.706]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
	  <mesh geometry={nodes.Plane007_1.geometry} material={materials['gray.002']} />
	  <mesh geometry={nodes.Plane007_2.geometry} material={nodes.Plane007_2.material} />
	  <mesh geometry={nodes.Plane007_3.geometry} material={materials['Glass.002']} />
	</group>
	<mesh geometry={nodes.Cube034.geometry} material={materials['gray.001']} position={[40.247, 8.562, -14.473]} rotation={[0, Math.PI / 2, 0]} scale={[1.065, 0.106, 0.106]} />
	<mesh geometry={nodes.Cube035.geometry} material={materials['gray.001']} position={[40.211, 2.166, -28.806]} rotation={[0, -1.571, 0]} scale={[15, 0.819, 0.252]} />
	<mesh geometry={nodes.Plane012.geometry} material={materials['gray.002']} position={[40.222, 1.362, -21.144]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
	<mesh geometry={nodes.Cube042.geometry} material={materials['gray.001']} position={[39.056, 9.303, -36.521]} />
	<mesh geometry={nodes.Cube044.geometry} material={materials['gray.001']} position={[39.056, 9.303, -41.276]} />
	<mesh geometry={nodes.Cube046.geometry} material={materials['gray.001']} position={[39.056, 9.303, -58.123]} />
	<mesh geometry={nodes.Cube043.geometry} material={materials['gray.001']} position={[37.853, 9.303, -38.473]} />
	<mesh geometry={nodes.Cube047.geometry} material={materials['gray.001']} position={[37.853, 9.303, -60.075]} />
	<mesh geometry={nodes.Cube045.geometry} material={materials['gray.001']} position={[40.211, 9.495, -61.605]} rotation={[0, -1.571, 0]} />
	<mesh geometry={nodes.Cube069.geometry} material={materials['gray.001']} position={[3.671, 9.513, -64.047]} scale={[1.495, 1, 1]} />
	<mesh geometry={nodes.Cube048.geometry} material={materials['gray.001']} position={[40.112, 2.125, -55.226]} rotation={[0, Math.PI / 2, 0]} />
	<mesh geometry={nodes.Cube063.geometry} material={materials['gray.001']} position={[2.618, 2.125, -55.226]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 0.926]} />
	<mesh geometry={nodes.Cube049.geometry} material={materials['gray.001']} position={[37.986, 2.14, -63.776]} rotation={[0, 1.571, 0]} scale={[0.541, 0.308, 2.227]} />
	<mesh geometry={nodes.Cube064.geometry} material={materials['gray.001']} position={[0.65, 2.14, -63.776]} rotation={[0, 1.571, 0]} scale={[0.541, 0.308, 2.062]} />
	<group position={[37.884, 4.357, -63.76]} rotation={[0, 1.571, 0]} scale={[0.561, 0.319, 2.31]}>
	  <mesh geometry={nodes.Cube030_1.geometry} material={materials['gray.001']} />
	  <mesh geometry={nodes.Cube030_2.geometry} material={materials['railing.002']} />
	</group>
	<group position={[37.884, 7.291, -63.76]} rotation={[0, 1.571, 0]} scale={[0.561, 0.319, 2.31]}>
	  <mesh geometry={nodes.Cube030_1.geometry} material={materials['gray.001']} />
	  <mesh geometry={nodes.Cube030_2.geometry} material={materials['railing.002']} />
	</group>
	<group position={[0.555, 4.357, -63.76]} rotation={[0, 1.571, 0]} scale={[0.561, 0.319, 2.139]}>
	  <mesh geometry={nodes.Cube030_1.geometry} material={materials['gray.001']} />
	  <mesh geometry={nodes.Cube030_2.geometry} material={materials['railing.002']} />
	</group>
	<group position={[0.555, 7.291, -63.76]} rotation={[0, 1.571, 0]} scale={[0.561, 0.319, 2.139]}>
	  <mesh geometry={nodes.Cube030_1.geometry} material={materials['gray.001']} />
	  <mesh geometry={nodes.Cube030_2.geometry} material={materials['railing.002']} />
	</group>
	<mesh geometry={nodes.Cube052.geometry} material={materials['railing.002']} position={[39.872, 2.601, -64.195]} rotation={[0, Math.PI / 2, 0]} scale={[0.021, 1.056, 0.021]} />
	<mesh geometry={nodes.Cube067.geometry} material={materials['railing.002']} position={[2.395, 2.601, -64.195]} rotation={[0, Math.PI / 2, 0]} scale={[0.021, 1.056, 0.019]} />
	<mesh geometry={nodes.Plane015.geometry} material={materials['gray.001']} position={[-38.28, 1.002, -59.396]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
	<mesh geometry={nodes.Cube056.geometry} material={materials['gray.001']} position={[-35.579, 6.349, -9.239]} scale={[0.478, 0.478, 0.244]} />
	<mesh geometry={nodes.Cube058.geometry} material={materials['Material.003']} position={[-38.93, 5.063, -59.974]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	<mesh geometry={nodes.Cube059.geometry} material={materials['Material.003']} position={[-38.93, 5.063, -61.993]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	<mesh geometry={nodes.Cube061.geometry} material={materials['gray.001']} position={[-35.636, 6.323, -64.006]} scale={[0.478, 0.478, 0.244]} />
	<mesh geometry={nodes.Cube068.geometry} material={materials['gray.001']} position={[-4.785, 0.982, -63.13]} />
	<mesh geometry={nodes.Cube070.geometry} material={materials['gray.001']} position={[3.937, 0.982, -63.314]} />
	<mesh geometry={nodes.Plane017.geometry} material={materials['gray.001']} position={[-22.318, 6.97, -43.407]} scale={15.951} />
	<mesh geometry={nodes.Plane018.geometry} material={materials['gray.001']} position={[19.574, 9.967, -43.407]} scale={15.951} />
	<mesh geometry={nodes.Cube071.geometry} material={materials['Material.003']} position={[-37.517, 7.579, -9.015]} rotation={[0, 0, Math.PI / 2]} scale={[-0.027, -1.314, -0.027]} />
	<mesh geometry={nodes.Cube072.geometry} material={materials['Material.003']} position={[-37.517, 8.473, -9.015]} rotation={[0, 0, Math.PI / 2]} scale={[-0.027, -1.314, -0.027]} />
	<mesh geometry={nodes.Cube073.geometry} material={materials['Material.003']} position={[-37.517, 9.368, -9.015]} rotation={[0, 0, Math.PI / 2]} scale={[-0.027, -1.314, -0.027]} />
	<mesh geometry={nodes.Cube074.geometry} material={materials['Material.003']} position={[-38.929, 7.579, -10.449]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	<mesh geometry={nodes.Cube075.geometry} material={materials['Material.003']} position={[-38.929, 8.473, -10.449]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	<mesh geometry={nodes.Cube076.geometry} material={materials['Material.003']} position={[-38.929, 9.368, -10.449]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	<mesh geometry={nodes.Cube139.geometry} material={materials['gray.001']} position={[-0.233, 4.931, -4.596]} scale={[1.045, 1, 1]} />
	<mesh geometry={nodes.Cube140.geometry} material={materials['gray.001']} position={[-0.2, -0.094, -1.416]} scale={[0.18, 1, 1]} />
	<mesh geometry={nodes.Plane305.geometry} material={materials['Glass.002']} position={[-2.022, 0.933, -1.416]} rotation={[Math.PI / 2, 0, 0]} scale={[1.019, 1, 1]} />
	<mesh geometry={nodes.Plane306.geometry} material={materials['Glass.002']} position={[2.258, 0.933, -1.554]} rotation={[Math.PI / 2, 0, 0]} scale={[1.019, 1, 1]} />
	<mesh geometry={nodes.Plane307.geometry} material={materials['Material.005']} position={[-2.022, 0.933, -1.416]} rotation={[Math.PI / 2, 0, 0]} scale={[1.019, 1, 1]} />
	<mesh geometry={nodes.Plane308.geometry} material={materials['Material.005']} position={[2.258, 0.933, -1.416]} rotation={[Math.PI / 2, 0, 0]} scale={[1.019, 1, 1]} />
	<mesh geometry={nodes.Plane.geometry} material={materials['gray.002']} position={[-6.766, 5.031, -9.56]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 5.038]} />
	<mesh geometry={nodes.Cube.geometry} material={materials['gray.001']} position={[-8.073, 6.349, -9.239]} scale={[0.478, 0.478, 0.244]} />
	<mesh geometry={nodes.Cube142.geometry} material={materials['Material.003']} position={[-7.924, 5.063, -9.02]} rotation={[0, 0, -Math.PI]} scale={[-0.027, -1.314, -0.027]} />
	<mesh geometry={nodes.Plane004.geometry} material={materials['gray.002']} position={[11.472, 6.535, -9.483]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 5.038]} />
	<mesh geometry={nodes.Cube012.geometry} material={materials['Material.003']} position={[10.37, 4.572, -9.094]} rotation={[0, 0, -3.138]} scale={[-0.027, -1.314, -0.027]} />
	<mesh geometry={nodes.Cube007.geometry} material={materials['gray.001']} position={[8.466, 8.538, -9.395]} scale={[1, 0.106, 0.106]} />
	<mesh geometry={nodes.Cube009.geometry} material={materials['gray.001']} position={[8.466, 5.22, -9.395]} scale={[1, 0.106, 0.106]} />
	<mesh geometry={nodes.Cube033.geometry} material={materials['gray.001']} position={[8.466, 8.538, -9.395]} scale={[1, 0.106, 0.106]} />
	<mesh geometry={nodes.Cube010.geometry} material={materials['gray.001']} position={[8.016, 5.22, -9.267]} scale={[0.112, 1, 0.189]} />
	<mesh geometry={nodes.Cube011.geometry} material={materials['gray.001']} position={[12.473, 5.22, -9.267]} rotation={[-Math.PI, 0, 0]} scale={[-0.112, -1, -0.189]} />
	<mesh geometry={nodes.Plane013.geometry} material={nodes.Plane013.material} position={[40.047, 6.614, -31.669]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 5.038]} />
	<mesh geometry={nodes.Cube036.geometry} material={materials['Material.003']} position={[40.436, 4.65, -30.567]} rotation={[-3.138, Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	<mesh geometry={nodes.Cube037.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	<mesh geometry={nodes.Cube038.geometry} material={materials['gray.001']} position={[40.135, 5.298, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	<mesh geometry={nodes.Cube041.geometry} material={materials['gray.001']} position={[40.135, 8.617, -28.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.106, 0.106]} />
	<mesh geometry={nodes.Cube039.geometry} material={materials['gray.001']} position={[40.262, 5.298, -28.213]} rotation={[0, Math.PI / 2, 0]} scale={[0.112, 1, 0.189]} />
	<mesh geometry={nodes.Cube040.geometry} material={materials['gray.001']} position={[40.262, 5.298, -32.67]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.112, -1, -0.189]} />
	<mesh geometry={nodes.Plane014.geometry} material={nodes.Plane014.material} position={[-38.39, 5.031, -13.54]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[1, 1, 5.038]} />
	<mesh geometry={nodes.Cube053.geometry} material={materials['gray.001']} position={[-38.711, 6.349, -14.847]} rotation={[0, -Math.PI / 2, 0]} scale={[0.478, 0.478, 0.244]} />
	<mesh geometry={nodes.Cube054.geometry} material={materials['Material.003']} position={[-38.93, 5.063, -14.698]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.027, -1.314, -0.027]} />
	<mesh geometry={nodes.Plane016.geometry} material={materials['gray.002']} position={[-32.366, 5.031, -63.844]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[1, 1, 5.038]} />
	<mesh geometry={nodes.Cube060.geometry} material={materials['gray.001']} position={[-31.059, 6.349, -64.165]} rotation={[Math.PI, 0, Math.PI]} scale={[0.478, 0.478, 0.244]} />
	<mesh geometry={nodes.Cube062.geometry} material={materials['Material.003']} position={[-31.208, 5.063, -64.384]} rotation={[-Math.PI, 0, 0]} scale={[-0.027, -1.314, -0.027]} />
	<mesh geometry={nodes.Plane010.geometry} material={nodes.Plane010.material} position={[-0.588, -0.079, -33.516]} scale={61.03} />
	<mesh geometry={nodes.Text002.geometry} material={nodes.Text002.material} position={[-47.429, 0.016, -51.441]} rotation={[Math.PI / 2, 0, 1.588]} scale={6.696} />
	<mesh geometry={nodes.Text007.geometry} material={materials['Material.007']} position={[-0.282, 0.613, 7.35]} rotation={[Math.PI / 2, 0, 0]} scale={0.752} />
	<group position={[-0.288, 0.527, 7.164]}>
	  <mesh geometry={nodes.Cube042_1.geometry} material={materials.Material} />
	  <mesh geometry={nodes.Cube042_2.geometry} material={materials['Material.001']} />
	</group>
	<mesh geometry={nodes.Text001.geometry} material={nodes.Text001.material} position={[50.33, 0.016, -25.077]} rotation={[Math.PI / 2, 0, -1.553]} scale={6.696} />
	<mesh geometry={nodes.Text003.geometry} material={nodes.Text003.material} position={[13.031, 1.284, -74.753]} rotation={[Math.PI / 2, 0, -3.124]} scale={6.696} />
  </group>
)
}

useGLTF.preload('/r3f/bhostel.glb');
