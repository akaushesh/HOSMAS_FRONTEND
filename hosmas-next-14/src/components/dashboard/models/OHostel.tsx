// import React, { useEffect, useRef, useState } from 'react';
// import { Html, useAnimations, useGLTF } from '@react-three/drei';


// interface GLTFResult {
//   nodes: any;
//   materials: any;
//   animations: any;
// }

// interface ModelProps {
//   position: any;
//   rotation: any;
// }

// const OHostel = (props:ModelProps): React.JSX.Element => {
//   const { nodes, materials, animations } = useGLTF('/r3f/ohostel.glb') as GLTFResult;

//   return (
//     <group {...props} dispose={null}>
//       <group position={[-0.001, 1.947, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_1.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_1.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_1.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_1.geometry}
//           material={nodes.Plane001_1.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_1.geometry}
//           material={nodes.Plane002_1.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-0.001, 3.876, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_2.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_2.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_2.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_2.geometry}
//           material={nodes.Plane001_2.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_2.geometry}
//           material={nodes.Plane002_2.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-0.001, 5.805, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_3.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_3.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_3.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_3.geometry}
//           material={nodes.Plane001_3.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_3.geometry}
//           material={nodes.Plane002_3.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-0.001, 7.733, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_4.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_4.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_4.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_4.geometry}
//           material={nodes.Plane001_4.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_4.geometry}
//           material={nodes.Plane002_4.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-0.001, 9.662, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_5.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_5.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_5.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_5.geometry}
//           material={nodes.Plane001_5.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_5.geometry}
//           material={nodes.Plane002_5.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-0.001, 11.591, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_6.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_6.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_6.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_6.geometry}
//           material={nodes.Plane001_6.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_6.geometry}
//           material={nodes.Plane002_6.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-0.001, 13.52, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_7.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_7.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_7.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_7.geometry}
//           material={nodes.Plane001_7.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_7.geometry}
//           material={nodes.Plane002_7.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-0.001, 15.449, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_8.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_8.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_8.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_8.geometry}
//           material={nodes.Plane001_8.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_8.geometry}
//           material={nodes.Plane002_8.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[5.809, 0.161, -4.425]} rotation={[0, Math.PI / 2, 0]} scale={[1.319, 0.951, 0.951]}>
//         <mesh geometry={nodes.CTRL_Hole002.geometry} material={materials.hidden_material} />
//         <mesh geometry={nodes.Window003_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window003_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window003_3.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window003_4.geometry} material={materials.Marble} />
//       </group>
//       <group position={[5.733, 0.194, -11.145]} rotation={[0, Math.PI / 2, 0]} scale={[0.642, 1.08, 0.823]}>
//         <mesh geometry={nodes.Window006_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window006_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window006_3.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window006_4.geometry} material={materials.Marble} />
//       </group>
//       <group position={[5.733, 0.194, -15.506]} rotation={[0, Math.PI / 2, 0]} scale={[0.642, 1.08, 0.823]}>
//         <mesh geometry={nodes.Window006_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window006_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window006_3.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window006_4.geometry} material={materials.Marble} />
//       </group>
//       <group position={[5.733, 0.194, -19.875]} rotation={[0, Math.PI / 2, 0]} scale={[0.642, 1.08, 0.823]}>
//         <mesh geometry={nodes.Window006_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window006_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window006_3.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window006_4.geometry} material={materials.Marble} />
//       </group>
//       <group position={[5.733, 0.194, -24.253]} rotation={[0, Math.PI / 2, 0]} scale={[0.642, 1.08, 0.823]}>
//         <mesh geometry={nodes.Window006_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window006_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window006_3.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window006_4.geometry} material={materials.Marble} />
//       </group>
//       <group position={[4.85, 2.332, -13.296]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_9.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_9.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_9.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_9.geometry}
//           material={nodes.Plane001_9.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_9.geometry}
//           material={nodes.Plane002_9.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[4.85, 4.329, -13.296]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_10.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_10.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_10.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_10.geometry}
//           material={nodes.Plane001_10.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_10.geometry}
//           material={nodes.Plane002_10.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[4.85, 6.271, -13.296]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_11.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_11.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_11.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_11.geometry}
//           material={nodes.Plane001_11.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_11.geometry}
//           material={nodes.Plane002_11.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[4.85, 8.12, -13.296]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_12.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_12.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_12.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_12.geometry}
//           material={nodes.Plane001_12.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_12.geometry}
//           material={nodes.Plane002_12.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[4.85, 10.045, -13.296]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_13.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_13.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_13.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_13.geometry}
//           material={nodes.Plane001_13.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_13.geometry}
//           material={nodes.Plane002_13.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[4.85, 11.972, -13.296]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_14.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_14.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_14.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_14.geometry}
//           material={nodes.Plane001_14.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_14.geometry}
//           material={nodes.Plane002_14.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[4.85, 13.838, -13.296]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_15.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_15.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_15.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_15.geometry}
//           material={nodes.Plane001_15.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_15.geometry}
//           material={nodes.Plane002_15.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[4.85, 15.782, -13.296]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_16.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_16.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_16.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_16.geometry}
//           material={nodes.Plane001_16.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_16.geometry}
//           material={nodes.Plane002_16.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[4.85, 2.332, -22.06]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_17.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_17.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_17.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_17.geometry}
//           material={nodes.Plane001_17.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_17.geometry}
//           material={nodes.Plane002_17.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[4.85, 4.329, -22.06]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_18.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_18.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_18.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_18.geometry}
//           material={nodes.Plane001_18.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_18.geometry}
//           material={nodes.Plane002_18.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[4.85, 6.271, -22.06]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_19.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_19.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_19.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_19.geometry}
//           material={nodes.Plane001_19.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_19.geometry}
//           material={nodes.Plane002_19.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[4.85, 8.12, -22.06]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_20.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_20.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_20.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_20.geometry}
//           material={nodes.Plane001_20.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_20.geometry}
//           material={nodes.Plane002_20.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[4.85, 10.045, -22.06]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_21.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_21.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_21.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_21.geometry}
//           material={nodes.Plane001_21.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_21.geometry}
//           material={nodes.Plane002_21.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[4.85, 11.972, -22.06]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_22.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_22.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_22.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_22.geometry}
//           material={nodes.Plane001_22.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_22.geometry}
//           material={nodes.Plane002_22.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[4.85, 13.838, -22.06]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_23.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_23.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_23.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_23.geometry}
//           material={nodes.Plane001_23.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_23.geometry}
//           material={nodes.Plane002_23.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[4.85, 15.782, -22.06]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_24.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_24.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_24.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_24.geometry}
//           material={nodes.Plane001_24.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_24.geometry}
//           material={nodes.Plane002_24.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[4.833, 0.194, -32.4]} scale={[0.923, 1.036, 0.823]}>
//         <mesh geometry={nodes.Window007_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window007_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window007_3.geometry} material={materials.Glass} />
//         <mesh geometry={nodes.Window007_4.geometry} material={materials.Marble} />
//       </group>
//       <group position={[0.114, 2.254, -33.425]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_25.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_25.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_25.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_25.geometry}
//           material={nodes.Plane001_25.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_25.geometry}
//           material={nodes.Plane002_25.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[0.114, 4.182, -33.425]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_26.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_26.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_26.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_26.geometry}
//           material={nodes.Plane001_26.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_26.geometry}
//           material={nodes.Plane002_26.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[0.114, 6.111, -33.425]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_27.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_27.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_27.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_27.geometry}
//           material={nodes.Plane001_27.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_27.geometry}
//           material={nodes.Plane002_27.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[0.114, 8.04, -33.425]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_28.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_28.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_28.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_28.geometry}
//           material={nodes.Plane001_28.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_28.geometry}
//           material={nodes.Plane002_28.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[0.114, 9.969, -33.425]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_29.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_29.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_29.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_29.geometry}
//           material={nodes.Plane001_29.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_29.geometry}
//           material={nodes.Plane002_29.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[0.114, 11.898, -33.425]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_30.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_30.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_30.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_30.geometry}
//           material={nodes.Plane001_30.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_30.geometry}
//           material={nodes.Plane002_30.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[0.114, 13.826, -33.425]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_31.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_31.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_31.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_31.geometry}
//           material={nodes.Plane001_31.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_31.geometry}
//           material={nodes.Plane002_31.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[0.114, 15.755, -33.425]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_32.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_32.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_32.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_32.geometry}
//           material={nodes.Plane001_32.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_32.geometry}
//           material={nodes.Plane002_32.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[1.541, 2.332, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_33.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_33.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_33.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_33.geometry}
//           material={nodes.Plane001_33.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_33.geometry}
//           material={nodes.Plane002_33.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[1.541, 4.329, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_34.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_34.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_34.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_34.geometry}
//           material={nodes.Plane001_34.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_34.geometry}
//           material={nodes.Plane002_34.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[1.541, 6.271, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_35.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_35.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_35.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_35.geometry}
//           material={nodes.Plane001_35.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_35.geometry}
//           material={nodes.Plane002_35.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[1.541, 8.12, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_36.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_36.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_36.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_36.geometry}
//           material={nodes.Plane001_36.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_36.geometry}
//           material={nodes.Plane002_36.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[1.541, 10.045, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_37.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_37.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_37.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_37.geometry}
//           material={nodes.Plane001_37.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_37.geometry}
//           material={nodes.Plane002_37.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[1.541, 11.972, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_38.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_38.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_38.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_38.geometry}
//           material={nodes.Plane001_38.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_38.geometry}
//           material={nodes.Plane002_38.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[1.541, 13.838, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_39.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_39.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_39.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_39.geometry}
//           material={nodes.Plane001_39.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_39.geometry}
//           material={nodes.Plane002_39.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[1.541, 15.782, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_40.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_40.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_40.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_40.geometry}
//           material={nodes.Plane001_40.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_40.geometry}
//           material={nodes.Plane002_40.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-7.223, 2.332, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_41.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_41.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_41.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_41.geometry}
//           material={nodes.Plane001_41.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_41.geometry}
//           material={nodes.Plane002_41.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-7.223, 4.329, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_42.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_42.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_42.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_42.geometry}
//           material={nodes.Plane001_42.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_42.geometry}
//           material={nodes.Plane002_42.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-7.223, 6.271, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_43.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_43.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_43.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_43.geometry}
//           material={nodes.Plane001_43.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_43.geometry}
//           material={nodes.Plane002_43.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-7.223, 8.12, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_44.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_44.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_44.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_44.geometry}
//           material={nodes.Plane001_44.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_44.geometry}
//           material={nodes.Plane002_44.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-7.223, 10.045, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_45.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_45.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_45.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_45.geometry}
//           material={nodes.Plane001_45.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_45.geometry}
//           material={nodes.Plane002_45.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-7.223, 11.972, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_46.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_46.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_46.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_46.geometry}
//           material={nodes.Plane001_46.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_46.geometry}
//           material={nodes.Plane002_46.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-7.223, 13.838, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_47.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_47.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_47.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_47.geometry}
//           material={nodes.Plane001_47.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_47.geometry}
//           material={nodes.Plane002_47.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-7.223, 15.782, -45.727]} rotation={[Math.PI, 0, Math.PI]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_48.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_48.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_48.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_48.geometry}
//           material={nodes.Plane001_48.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_48.geometry}
//           material={nodes.Plane002_48.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-17.806, 2.286, -40.601]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_49.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_49.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_49.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_49.geometry}
//           material={nodes.Plane001_49.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_49.geometry}
//           material={nodes.Plane002_49.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-17.806, 4.215, -40.601]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_50.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_50.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_50.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_50.geometry}
//           material={nodes.Plane001_50.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_50.geometry}
//           material={nodes.Plane002_50.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-17.806, 6.144, -40.601]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_51.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_51.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_51.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_51.geometry}
//           material={nodes.Plane001_51.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_51.geometry}
//           material={nodes.Plane002_51.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-17.806, 8.073, -40.601]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_52.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_52.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_52.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_52.geometry}
//           material={nodes.Plane001_52.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_52.geometry}
//           material={nodes.Plane002_52.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-17.806, 10.002, -40.601]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_53.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_53.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_53.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_53.geometry}
//           material={nodes.Plane001_53.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_53.geometry}
//           material={nodes.Plane002_53.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-17.806, 11.93, -40.601]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_54.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_54.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_54.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_54.geometry}
//           material={nodes.Plane001_54.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_54.geometry}
//           material={nodes.Plane002_54.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-17.806, 13.859, -40.601]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_55.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_55.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_55.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_55.geometry}
//           material={nodes.Plane001_55.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_55.geometry}
//           material={nodes.Plane002_55.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-17.806, 15.788, -40.601]} rotation={[0, Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_56.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_56.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_56.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_56.geometry}
//           material={nodes.Plane001_56.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_56.geometry}
//           material={nodes.Plane002_56.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[0.024, 1.925, 0.006]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_1.geometry}
//           material={nodes.Plane025_1.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_1.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[0.024, 3.873, 0.006]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_2.geometry}
//           material={nodes.Plane025_2.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_2.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[0.024, 5.821, 0.006]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_3.geometry}
//           material={nodes.Plane025_3.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_3.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[0.024, 7.769, 0.006]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_4.geometry}
//           material={nodes.Plane025_4.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_4.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[0.024, 9.717, 0.006]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_5.geometry}
//           material={nodes.Plane025_5.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_5.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[0.024, 11.665, 0.006]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_6.geometry}
//           material={nodes.Plane025_6.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_6.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[0.024, 13.613, 0.006]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_7.geometry}
//           material={nodes.Plane025_7.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_7.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[-29.419, 0.194, -32.726]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 1.08, 0.823]}>
//         <mesh geometry={nodes.Window006_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window006_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window006_3.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window006_4.geometry} material={materials.Marble} />
//       </group>
//       <group position={[-29.419, 0.194, -28.366]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 1.08, 0.823]}>
//         <mesh geometry={nodes.Window006_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window006_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window006_3.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window006_4.geometry} material={materials.Marble} />
//       </group>
//       <group position={[-29.419, 0.194, -23.997]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 1.08, 0.823]}>
//         <mesh geometry={nodes.Window006_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window006_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window006_3.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window006_4.geometry} material={materials.Marble} />
//       </group>
//       <group position={[-29.419, 0.194, -19.619]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 1.08, 0.823]}>
//         <mesh geometry={nodes.Window006_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window006_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window006_3.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window006_4.geometry} material={materials.Marble} />
//       </group>
//       <group position={[-28.536, 2.332, -30.575]} rotation={[0, -Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_57.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_57.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_57.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_57.geometry}
//           material={nodes.Plane001_57.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_57.geometry}
//           material={nodes.Plane002_57.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-28.536, 4.329, -30.575]} rotation={[0, -Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_58.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_58.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_58.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_58.geometry}
//           material={nodes.Plane001_58.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_58.geometry}
//           material={nodes.Plane002_58.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-28.536, 6.271, -30.575]} rotation={[0, -Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_59.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_59.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_59.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_59.geometry}
//           material={nodes.Plane001_59.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_59.geometry}
//           material={nodes.Plane002_59.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-28.536, 8.12, -30.575]} rotation={[0, -Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_60.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_60.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_60.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_60.geometry}
//           material={nodes.Plane001_60.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_60.geometry}
//           material={nodes.Plane002_60.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-28.536, 10.045, -30.575]} rotation={[0, -Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_61.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_61.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_61.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_61.geometry}
//           material={nodes.Plane001_61.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_61.geometry}
//           material={nodes.Plane002_61.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-28.536, 11.972, -30.575]} rotation={[0, -Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_62.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_62.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_62.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_62.geometry}
//           material={nodes.Plane001_62.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_62.geometry}
//           material={nodes.Plane002_62.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-28.536, 13.838, -30.575]} rotation={[0, -Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_63.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_63.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_63.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_63.geometry}
//           material={nodes.Plane001_63.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_63.geometry}
//           material={nodes.Plane002_63.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-28.536, 15.782, -30.575]} rotation={[0, -Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_64.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_64.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_64.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_64.geometry}
//           material={nodes.Plane001_64.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_64.geometry}
//           material={nodes.Plane002_64.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-28.536, 2.332, -21.812]} rotation={[0, -Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_65.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_65.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_65.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_65.geometry}
//           material={nodes.Plane001_65.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_65.geometry}
//           material={nodes.Plane002_65.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-28.536, 4.329, -21.812]} rotation={[0, -Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_66.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_66.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_66.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_66.geometry}
//           material={nodes.Plane001_66.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_66.geometry}
//           material={nodes.Plane002_66.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-28.536, 6.271, -21.812]} rotation={[0, -Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_67.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_67.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_67.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_67.geometry}
//           material={nodes.Plane001_67.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_67.geometry}
//           material={nodes.Plane002_67.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-28.536, 8.12, -21.812]} rotation={[0, -Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_68.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_68.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_68.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_68.geometry}
//           material={nodes.Plane001_68.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_68.geometry}
//           material={nodes.Plane002_68.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-28.536, 10.045, -21.812]} rotation={[0, -Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_69.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_69.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_69.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_69.geometry}
//           material={nodes.Plane001_69.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_69.geometry}
//           material={nodes.Plane002_69.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-28.536, 11.972, -21.812]} rotation={[0, -Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_70.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_70.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_70.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_70.geometry}
//           material={nodes.Plane001_70.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_70.geometry}
//           material={nodes.Plane002_70.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-28.536, 13.838, -21.812]} rotation={[0, -Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_71.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_71.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_71.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_71.geometry}
//           material={nodes.Plane001_71.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_71.geometry}
//           material={nodes.Plane002_71.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-28.536, 15.782, -21.812]} rotation={[0, -Math.PI / 2, 0]}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_72.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_72.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_72.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_72.geometry}
//           material={nodes.Plane001_72.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_72.geometry}
//           material={nodes.Plane002_72.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[0.024, 1.925, 8.478]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_8.geometry}
//           material={nodes.Plane025_8.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_8.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[0.024, 3.873, 8.478]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_9.geometry}
//           material={nodes.Plane025_9.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_9.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[0.024, 5.821, 8.478]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_10.geometry}
//           material={nodes.Plane025_10.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_10.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[0.024, 7.769, 8.478]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_11.geometry}
//           material={nodes.Plane025_11.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_11.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[0.024, 9.717, 8.478]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_12.geometry}
//           material={nodes.Plane025_12.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_12.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[0.024, 11.665, 8.478]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_13.geometry}
//           material={nodes.Plane025_13.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_13.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[0.024, 13.613, 8.478]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_14.geometry}
//           material={nodes.Plane025_14.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_14.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[-28.789, 2.444, -37.149]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//         <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//       </group>
//       <group position={[-29.42, 0.189, -37.104]} rotation={[0, -Math.PI / 2, 0]} scale={[0.646, 1.088, 0.829]}>
//         <mesh geometry={nodes.Window006_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window006_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window006_3.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window006_4.geometry} material={materials.Marble} />
//       </group>
//       <group position={[-19.021, 2.286, -5.191]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={-1}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_73.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_73.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_73.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_73.geometry}
//           material={nodes.Plane001_73.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_73.geometry}
//           material={nodes.Plane002_73.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-19.021, 4.215, -5.191]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={-1}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_74.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_74.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_74.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_74.geometry}
//           material={nodes.Plane001_74.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_74.geometry}
//           material={nodes.Plane002_74.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-19.021, 6.144, -5.191]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={-1}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_75.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_75.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_75.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_75.geometry}
//           material={nodes.Plane001_75.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_75.geometry}
//           material={nodes.Plane002_75.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-19.021, 8.073, -5.191]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={-1}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_76.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_76.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_76.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_76.geometry}
//           material={nodes.Plane001_76.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_76.geometry}
//           material={nodes.Plane002_76.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-19.021, 10.002, -5.191]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={-1}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_77.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_77.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_77.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_77.geometry}
//           material={nodes.Plane001_77.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_77.geometry}
//           material={nodes.Plane002_77.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-19.021, 11.93, -5.191]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={-1}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_78.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_78.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_78.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_78.geometry}
//           material={nodes.Plane001_78.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_78.geometry}
//           material={nodes.Plane002_78.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-19.021, 13.859, -5.191]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={-1}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_79.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_79.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_79.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_79.geometry}
//           material={nodes.Plane001_79.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_79.geometry}
//           material={nodes.Plane002_79.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[-19.021, 15.788, -5.191]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={-1}>
//         <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole_80.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//         </group>
//         <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.CTRL_Hole001_80.geometry} material={materials.hidden_material} />
//           <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane_80.geometry}
//           material={materials.peach}
//           position={[1.341, 1, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[4.427, 1, 1]}
//         />
//         <mesh
//           geometry={nodes.Plane001_80.geometry}
//           material={nodes.Plane001_80.material}
//           position={[-0.898, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Plane002_80.geometry}
//           material={nodes.Plane002_80.material}
//           position={[3.639, 1.077, 0]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//       <group position={[0.024, 1.925, 42.886]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_15.geometry}
//           material={nodes.Plane025_15.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_15.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[0.024, 3.873, 42.886]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_16.geometry}
//           material={nodes.Plane025_16.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_16.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[0.024, 5.821, 42.886]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_17.geometry}
//           material={nodes.Plane025_17.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_17.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[0.024, 7.769, 42.886]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_18.geometry}
//           material={nodes.Plane025_18.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_18.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[0.024, 9.717, 42.886]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_19.geometry}
//           material={nodes.Plane025_19.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_19.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[0.024, 11.665, 42.886]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_20.geometry}
//           material={nodes.Plane025_20.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_20.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[0.024, 13.613, 42.886]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_21.geometry}
//           material={nodes.Plane025_21.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_21.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[0.024, 0.038, 42.886]}>
//         <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//           <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//           <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//           <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//           <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//         </group>
//         <mesh
//           geometry={nodes.Plane025_22.geometry}
//           material={nodes.Plane025_22.material}
//           position={[-28.708, 3.338, -44.325]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         />
//         <mesh
//           geometry={nodes.Plane024_22.geometry}
//           material={materials.peach}
//           position={[-28.708, 3.261, -46.623]}
//           rotation={[Math.PI / 2, 0, Math.PI / 2]}
//           scale={[4.427, 1, 1]}
//         />
//       </group>
//       <group position={[-29.419, 0.194, -2.724]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 1.08, 0.823]}>
//         <mesh geometry={nodes.Window006_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window006_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window006_3.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window006_4.geometry} material={materials.Marble} />
//         <mesh geometry={nodes.Window004_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window004_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window004_3.geometry} material={materials.Glass} />
//         <mesh geometry={nodes.Window004_4.geometry} material={materials.Marble} />
//       </group>
//       <group position={[-29.818, 0.194, -10.477]} rotation={[0, -Math.PI / 2, 0]} scale={[1.145, 1.08, 0.823]}>
//         <mesh geometry={nodes.Window005_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window005_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window005_3.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window005_4.geometry} material={materials.Marble} />
//       </group>
//       <group position={[-29.818, 2.692, -10.477]} rotation={[0, -Math.PI / 2, 0]} scale={[1.145, 1.08, 0.823]}>
//         <mesh geometry={nodes.Window005_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window005_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window005_3.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window005_4.geometry} material={materials.Marble} />
//       </group>
//       <group position={[-29.818, 5.128, -10.477]} rotation={[0, -Math.PI / 2, 0]} scale={[1.145, 1.08, 0.823]}>
//         <mesh geometry={nodes.Window005_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window005_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window005_3.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window005_4.geometry} material={materials.Marble} />
//       </group>
//       <group position={[-29.818, 7.542, -10.477]} rotation={[0, -Math.PI / 2, 0]} scale={[1.145, 1.08, 0.823]}>
//         <mesh geometry={nodes.Window005_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window005_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window005_3.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window005_4.geometry} material={materials.Marble} />
//       </group>
//       <group position={[-29.818, 10.019, -10.477]} rotation={[0, -Math.PI / 2, 0]} scale={[1.145, 1.08, 0.823]}>
//         <mesh geometry={nodes.Window005_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window005_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window005_3.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window005_4.geometry} material={materials.Marble} />
//       </group>
//       <group position={[-29.818, 12.564, -10.477]} rotation={[0, -Math.PI / 2, 0]} scale={[1.145, 1.08, 0.823]}>
//         <mesh geometry={nodes.Window005_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window005_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window005_3.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window005_4.geometry} material={materials.Marble} />
//       </group>
//       <group position={[-29.818, 14.978, -10.477]} rotation={[0, -Math.PI / 2, 0]} scale={[1.145, 1.08, 0.823]}>
//         <mesh geometry={nodes.Window005_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window005_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window005_3.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window005_4.geometry} material={materials.Marble} />
//       </group>
//       <group position={[-2.152, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//         <mesh geometry={nodes.CTRL_Hole.geometry} material={materials.hidden_material} />
//         <mesh geometry={nodes.Window_81.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window_82.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window_83.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window_84.geometry} material={materials.Marble} />
//       </group>
//       <group position={[2.342, 0.183, 0.081]} scale={[0.642, 0.823, 0.823]}>
//         <mesh geometry={nodes.CTRL_Hole001.geometry} material={materials.hidden_material} />
//         <mesh geometry={nodes.Window002_1.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window002_2.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window002_3.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window002_4.geometry} material={materials.Marble} />
//       </group>
//       <group position={[-28.789, 2.444, -45.622]} rotation={[0, -Math.PI / 2, 0]} scale={[0.642, 0.823, 0.823]}>
//         <mesh geometry={nodes.Window001_81.geometry} material={materials.PVC} />
//         <mesh geometry={nodes.Window001_82.geometry} material={materials.Plastic} />
//         <mesh geometry={nodes.Window001_83.geometry} material={materials['Glass.001']} />
//         <mesh geometry={nodes.Window001_84.geometry} material={materials.Marble} />
//       </group>
//       <mesh
//         geometry={nodes.Plane003.geometry}
//         material={materials.peach}
//         position={[1.334, 18.448, 0]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={[4.42, 1, 1]}
//       />
//       <mesh
//         geometry={nodes.Plane019.geometry}
//         material={materials.peach}
//         position={[1.449, 18.373, -33.425]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={[4.42, 1, 1]}
//       />
//       <mesh
//         geometry={nodes.Plane022.geometry}
//         material={materials.peach}
//         position={[-17.806, 18.406, -41.936]}
//         rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//         scale={[4.42, 1, 1]}
//       />
//       <mesh
//         geometry={nodes.Plane044.geometry}
//         material={materials.peach}
//         position={[-19.021, 18.406, -3.856]}
//         rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//         scale={[-4.42, -1, -1]}
//       />
//       <mesh
//         geometry={nodes.Cube.geometry}
//         material={materials.railing}
//         position={[-0.862, 2.786, 0.887]}
//         scale={[2.118, 0.024, 0.024]}
//       />
//       <mesh
//         geometry={nodes.Cube045.geometry}
//         material={materials.railing}
//         position={[-0.747, 3.092, -32.538]}
//         scale={[2.118, 0.024, 0.024]}
//       />
//       <mesh
//         geometry={nodes.Cube081.geometry}
//         material={materials.railing}
//         position={[-16.919, 3.125, -39.74]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={[2.118, 0.024, 0.024]}
//       />
//       <mesh
//         geometry={nodes.Cube120.geometry}
//         material={materials.railing}
//         position={[-18.134, 3.125, -6.053]}
//         rotation={[Math.PI, -Math.PI / 2, 0]}
//         scale={[-2.118, -0.024, -0.024]}
//       />
//       <mesh
//         geometry={nodes.Cube001.geometry}
//         material={materials.gray}
//         position={[1.341, 2.068, 0]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube003.geometry}
//         material={materials.gray}
//         position={[-3.294, 2.068, 0]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube013.geometry}
//         material={materials.Material}
//         position={[3.498, 11.186, 0.954]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={[-0.023, -1.126, -0.023]}
//       />
//       <mesh
//         geometry={nodes.Cube004.geometry}
//         material={materials.Material}
//         position={[5.787, 11.354, -25.099]}
//         rotation={[Math.PI, -Math.PI / 2, 0]}
//         scale={[-0.023, -1.126, -0.023]}
//       />
//       <mesh
//         geometry={nodes.Cube005.geometry}
//         material={materials.Material}
//         position={[5.787, 11.354, -12.571]}
//         rotation={[Math.PI, Math.PI / 2, 0]}
//         scale={[-0.023, -1.126, -0.023]}
//       />
//       <mesh
//         geometry={nodes.Cube067.geometry}
//         material={materials.Material}
//         position={[-10.262, 11.354, -46.664]}
//         rotation={[0, 0, -Math.PI]}
//         scale={[-0.023, -1.126, -0.023]}
//       />
//       <mesh
//         geometry={nodes.Cube068.geometry}
//         material={materials.Material}
//         position={[2.266, 11.354, -46.664]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={[-0.023, -1.126, -0.023]}
//       />
//       <mesh
//         geometry={nodes.Cube102.geometry}
//         material={materials.Material}
//         position={[-29.473, 11.354, -18.773]}
//         rotation={[Math.PI, Math.PI / 2, 0]}
//         scale={[-0.023, -1.126, -0.023]}
//       />
//       <mesh
//         geometry={nodes.Cube103.geometry}
//         material={materials.Material}
//         position={[-29.473, 11.354, -31.301]}
//         rotation={[Math.PI, -Math.PI / 2, 0]}
//         scale={[-0.023, -1.126, -0.023]}
//       />
//       <mesh
//         geometry={nodes.Cube002.geometry}
//         material={materials.gray}
//         position={[5.588, 0.392, -3.196]}
//         scale={0.421}
//       />
//       <group position={[5.588, 2.479, -3.196]} scale={0.421}>
//         <mesh geometry={nodes.Cube012_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube012_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[5.588, 4.39, -3.196]} scale={0.421}>
//         <mesh geometry={nodes.Cube012_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube012_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[5.588, 6.302, -3.196]} scale={0.421}>
//         <mesh geometry={nodes.Cube012_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube012_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[5.588, 8.213, -3.196]} scale={0.421}>
//         <mesh geometry={nodes.Cube012_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube012_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[5.588, 10.125, -3.196]} scale={0.421}>
//         <mesh geometry={nodes.Cube012_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube012_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[5.588, 12.037, -3.196]} scale={0.421}>
//         <mesh geometry={nodes.Cube012_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube012_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[5.588, 13.948, -3.196]} scale={0.421}>
//         <mesh geometry={nodes.Cube012_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube012_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[5.588, 15.86, -3.196]} scale={0.421}>
//         <mesh geometry={nodes.Cube012_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube012_2.geometry} material={materials.railing} />
//       </group>
//       <mesh
//         geometry={nodes.Cube024.geometry}
//         material={materials.peach}
//         position={[5.443, 18.952, -3.196]}
//         scale={0.421}
//       />
//       <mesh
//         geometry={nodes.Cube025.geometry}
//         material={materials.gray}
//         position={[4.92, 2.069, -6.186]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube094.geometry}
//         material={materials.gray}
//         position={[-28.676, 2.069, -42.095]}
//         rotation={[0, -Math.PI / 2, 0]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube136.geometry}
//         material={materials.gray}
//         position={[-28.676, 2.069, -7.736]}
//         rotation={[0, -Math.PI / 2, 0]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube035.geometry}
//         material={materials.gray}
//         position={[4.969, 2.068, -14.61]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube036.geometry}
//         material={materials.gray}
//         position={[4.969, 2.068, -18.97]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube038.geometry}
//         material={materials.gray}
//         position={[4.969, 2.068, -23.339]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube061.geometry}
//         material={materials.gray}
//         position={[0.227, 2.068, -45.846]}
//         rotation={[Math.PI, 0, Math.PI]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube062.geometry}
//         material={materials.gray}
//         position={[-4.133, 2.068, -45.846]}
//         rotation={[Math.PI, 0, Math.PI]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube063.geometry}
//         material={materials.gray}
//         position={[-8.503, 2.068, -45.846]}
//         rotation={[Math.PI, 0, Math.PI]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube069.geometry}
//         material={materials.gray}
//         position={[4.622, 2.167, -45.846]}
//         rotation={[Math.PI, 0, Math.PI]}
//         scale={[0.11, 2.113, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube095.geometry}
//         material={materials.gray}
//         position={[-28.655, 2.068, -29.262]}
//         rotation={[0, -Math.PI / 2, 0]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube097.geometry}
//         material={materials.gray}
//         position={[-28.655, 2.068, -24.901]}
//         rotation={[0, -Math.PI / 2, 0]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube098.geometry}
//         material={materials.gray}
//         position={[-28.655, 2.068, -20.532]}
//         rotation={[0, -Math.PI / 2, 0]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube104.geometry}
//         material={materials.gray}
//         position={[-28.655, 2.068, -33.599]}
//         rotation={[0, -Math.PI / 2, 0]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Plane005.geometry}
//         material={nodes.Plane005.material}
//         position={[-10.583, -0.094, -24.945]}
//         scale={28.727}
//       />
//       <mesh
//         geometry={nodes.Cube037.geometry}
//         material={materials.gray}
//         position={[5.436, 0.393, -10.763]}
//         scale={0.421}
//       />
//       <mesh
//         geometry={nodes.Cube096.geometry}
//         material={materials.gray}
//         position={[-29.122, 0.393, -33.109]}
//         rotation={[Math.PI, 0, Math.PI]}
//         scale={0.421}
//       />
//       <mesh
//         geometry={nodes.Plane007.geometry}
//         material={nodes.Plane007.material}
//         position={[5.436, 1.254, -12.453]}
//         rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//         scale={[1, 1, 1.214]}
//       />
//       <mesh
//         geometry={nodes.Plane009.geometry}
//         material={nodes.Plane009.material}
//         position={[5.436, 1.254, -16.813]}
//         rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//         scale={[1, 1, 1.214]}
//       />
//       <mesh
//         geometry={nodes.Plane011.geometry}
//         material={nodes.Plane011.material}
//         position={[5.436, 1.254, -21.182]}
//         rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//         scale={[1, 1, 1.214]}
//       />
//       <mesh
//         geometry={nodes.Plane013.geometry}
//         material={nodes.Plane013.material}
//         position={[5.436, 1.254, -25.56]}
//         rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//         scale={[1, 1, 1.214]}
//       />
//       <mesh
//         geometry={nodes.Plane032.geometry}
//         material={nodes.Plane032.material}
//         position={[-29.26, 1.254, -31.458]}
//         rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         scale={[1, 1, 1.214]}
//       />
//       <mesh
//         geometry={nodes.Plane033.geometry}
//         material={nodes.Plane033.material}
//         position={[-29.26, 1.254, -27.097]}
//         rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         scale={[1, 1, 1.214]}
//       />
//       <mesh
//         geometry={nodes.Plane034.geometry}
//         material={nodes.Plane034.material}
//         position={[-29.26, 1.254, -22.728]}
//         rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         scale={[1, 1, 1.214]}
//       />
//       <mesh
//         geometry={nodes.Plane035.geometry}
//         material={nodes.Plane035.material}
//         position={[-29.26, 1.254, -18.35]}
//         rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         scale={[1, 1, 1.214]}
//       />
//       <mesh
//         geometry={nodes.Plane040.geometry}
//         material={nodes.Plane040.material}
//         position={[-29.259, 1.257, -35.826]}
//         rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         scale={[1.007, 1.007, 1.223]}
//       />
//       <mesh
//         geometry={nodes.Plane047.geometry}
//         material={nodes.Plane047.material}
//         position={[-29.26, 1.254, -1.455]}
//         rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         scale={[1, 1, 1.214]}
//       />
//       <mesh
//         geometry={nodes.Cube040.geometry}
//         material={materials.railing}
//         position={[5.737, 3.17, -12.434]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={[2.118, 0.024, 0.024]}
//       />
//       <mesh
//         geometry={nodes.Cube041.geometry}
//         material={materials.railing}
//         position={[5.737, 3.17, -21.198]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={[2.118, 0.024, 0.024]}
//       />
//       <mesh
//         geometry={nodes.Cube044.geometry}
//         material={materials.railing}
//         position={[2.702, 3.57, -30.04]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={[2.248, 0.025, 0.025]}
//       />
//       <mesh
//         geometry={nodes.Cube056.geometry}
//         material={materials.railing}
//         position={[2.702, 3.548, -39.62]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={[2.248, 0.025, 0.025]}
//       />
//       <mesh
//         geometry={nodes.Cube064.geometry}
//         material={materials.railing}
//         position={[2.402, 3.17, -46.614]}
//         rotation={[Math.PI, 0, Math.PI]}
//         scale={[2.118, 0.024, 0.024]}
//       />
//       <mesh
//         geometry={nodes.Cube065.geometry}
//         material={materials.railing}
//         position={[-6.361, 3.17, -46.614]}
//         rotation={[Math.PI, 0, Math.PI]}
//         scale={[2.118, 0.024, 0.024]}
//       />
//       <mesh
//         geometry={nodes.Cube084.geometry}
//         material={materials.railing}
//         position={[-23.116, 3.581, -43.189]}
//         rotation={[Math.PI, 0, Math.PI]}
//         scale={[2.248, 0.025, 0.025]}
//       />
//       <mesh
//         geometry={nodes.Cube099.geometry}
//         material={materials.railing}
//         position={[-29.423, 3.17, -31.437]}
//         rotation={[0, -Math.PI / 2, 0]}
//         scale={[2.118, 0.024, 0.024]}
//       />
//       <mesh
//         geometry={nodes.Cube100.geometry}
//         material={materials.railing}
//         position={[-29.423, 3.17, -22.674]}
//         rotation={[0, -Math.PI / 2, 0]}
//         scale={[2.118, 0.024, 0.024]}
//       />
//       <mesh
//         geometry={nodes.Cube123.geometry}
//         material={materials.railing}
//         position={[-23.812, 3.581, -2.603]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={[-2.248, -0.025, -0.025]}
//       />
//       <mesh
//         geometry={nodes.Cube042.geometry}
//         material={materials.gray}
//         position={[4.969, 2.068, -27.718]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube066.geometry}
//         material={materials.gray}
//         position={[-12.881, 2.068, -45.846]}
//         rotation={[Math.PI, 0, Math.PI]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube101.geometry}
//         material={materials.gray}
//         position={[-28.655, 2.068, -16.154]}
//         rotation={[0, -Math.PI / 2, 0]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube043.geometry}
//         material={nodes.Cube043.material}
//         position={[5.575, 0.392, -32.668]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={0.421}
//       />
//       <mesh
//         geometry={nodes.Cube080.geometry}
//         material={nodes.Cube080.material}
//         position={[-17.049, 0.425, -46.062]}
//         rotation={[Math.PI, 0, Math.PI]}
//         scale={0.421}
//       />
//       <mesh
//         geometry={nodes.Cube119.geometry}
//         material={nodes.Cube119.material}
//         position={[-18.263, 0.425, 0.27]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-0.421}
//       />
//       <mesh
//         geometry={nodes.Cube046.geometry}
//         material={materials.gray}
//         position={[6.1, 2.051, -33.196]}
//         rotation={[Math.PI, 0, Math.PI]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube082.geometry}
//         material={materials.gray}
//         position={[-17.576, 2.083, -46.587]}
//         rotation={[0, -1.571, 0]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube006.geometry}
//         material={materials.gray}
//         position={[6.1, 2.051, -41.439]}
//         rotation={[Math.PI, 0, Math.PI]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube083.geometry}
//         material={materials.gray}
//         position={[-24.419, 2.083, -46.587]}
//         rotation={[0, -1.571, 0]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube057.geometry}
//         material={materials.Material}
//         position={[6.206, 10.111, -45.784]}
//         rotation={[Math.PI, -Math.PI / 2, 0]}
//         scale={[-0.046, -2.224, -0.046]}
//       />
//       <mesh
//         geometry={nodes.Cube058.geometry}
//         material={materials.Material}
//         position={[4.053, 10.111, -40.436]}
//         rotation={[0, 0, -Math.PI]}
//         scale={[-0.046, -2.224, -0.046]}
//       />
//       <mesh
//         geometry={nodes.Cube059.geometry}
//         material={materials.Material}
//         position={[5.494, 10.111, -46.657]}
//         rotation={[0, 0, -Math.PI]}
//         scale={[-0.046, -2.224, -0.046]}
//       />
//       <mesh
//         geometry={nodes.Plane026.geometry}
//         material={materials.peach}
//         position={[-28.684, 18.273, -44.333]}
//         rotation={[0, 0, -Math.PI / 2]}
//         scale={[0.386, 1, 1]}
//       />
//       <mesh
//         geometry={nodes.Plane037.geometry}
//         material={materials.peach}
//         position={[-28.684, 18.273, -35.861]}
//         rotation={[0, 0, -Math.PI / 2]}
//         scale={[0.386, 1, 1]}
//       />
//       <mesh
//         geometry={nodes.Plane045.geometry}
//         material={materials.peach}
//         position={[-28.684, 18.273, -1.453]}
//         rotation={[0, 0, -Math.PI / 2]}
//         scale={[0.386, 1, 1]}
//       />
//       <mesh
//         geometry={nodes.Plane036.geometry}
//         material={nodes.Plane036.material}
//         position={[-28.708, 3.338, -35.852]}
//         rotation={[Math.PI / 2, 0, Math.PI / 2]}
//       />
//       <mesh
//         geometry={nodes.Plane025.geometry}
//         material={nodes.Plane025.material}
//         position={[-28.708, 3.338, -44.325]}
//         rotation={[Math.PI / 2, 0, Math.PI / 2]}
//       />
//       <mesh
//         geometry={nodes.Plane038.geometry}
//         material={materials.peach}
//         position={[-28.708, 3.261, -38.097]}
//         rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         scale={[4.427, 1, 1]}
//       />
//       <mesh
//         geometry={nodes.Plane024.geometry}
//         material={materials.peach}
//         position={[-28.708, 3.261, -46.623]}
//         rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         scale={[4.427, 1, 1]}
//       />
//       <mesh
//         geometry={nodes.Cube105.geometry}
//         material={materials.railing}
//         position={[-29.423, 3.17, -35.81]}
//         rotation={[0, -Math.PI / 2, 0]}
//         scale={[2.118, 0.024, 0.024]}
//       />
//       <mesh
//         geometry={nodes.Cube106.geometry}
//         material={materials.railing}
//         position={[-29.423, 3.17, -44.324]}
//         rotation={[0, -Math.PI / 2, 0]}
//         scale={[2.118, 0.024, 0.024]}
//       />
//       <mesh
//         geometry={nodes.Cube121.geometry}
//         material={materials.railing}
//         position={[-29.423, 3.17, -1.444]}
//         rotation={[0, -Math.PI / 2, 0]}
//         scale={[2.118, 0.024, 0.024]}
//       />
//       <mesh
//         geometry={nodes.Cube107.geometry}
//         material={materials.Material}
//         position={[-29.473, 11.354, -35.585]}
//         rotation={[Math.PI, -Math.PI / 2, 0]}
//         scale={[-0.023, -1.126, -0.023]}
//       />
//       <mesh
//         geometry={nodes.Cube108.geometry}
//         material={materials.Material}
//         position={[-29.473, 11.354, -44.036]}
//         rotation={[Math.PI, -Math.PI / 2, 0]}
//         scale={[-0.023, -1.126, -0.023]}
//       />
//       <mesh
//         geometry={nodes.Cube122.geometry}
//         material={materials.Material}
//         position={[-29.473, 11.354, -1.155]}
//         rotation={[Math.PI, -Math.PI / 2, 0]}
//         scale={[-0.023, -1.126, -0.023]}
//       />
//       <mesh
//         geometry={nodes.Cube109.geometry}
//         material={materials.gray}
//         position={[-28.655, 2.068, -16.154]}
//         rotation={[0, -Math.PI / 2, 0]}
//         scale={[0.11, 2.101, 0.943]}
//       />
//       <mesh
//         geometry={nodes.Plane041.geometry}
//         material={materials.gray}
//         position={[-29.536, 0.885, -45.693]}
//         rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//       />
//       <mesh
//         geometry={nodes.Cube124.geometry}
//         material={materials.gray}
//         position={[-18.272, 2.083, 0.795]}
//         rotation={[Math.PI, 1.571, 0]}
//         scale={[-0.11, -2.101, -0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube125.geometry}
//         material={materials.gray}
//         position={[-25.115, 2.083, 0.795]}
//         rotation={[Math.PI, 1.571, 0]}
//         scale={[-0.11, -2.101, -0.943]}
//       />
//       <mesh
//         geometry={nodes.Cube138.geometry}
//         material={materials.gray}
//         position={[-29.122, 0.393, -16.056]}
//         rotation={[Math.PI, 0, Math.PI]}
//         scale={0.421}
//       />
//       <mesh
//         geometry={nodes.Cube139.geometry}
//         material={materials.gray}
//         position={[-10.569, 4.931, -4.596]}
//         scale={[1.045, 1, 1]}
//       />
//       <mesh
//         geometry={nodes.Cube140.geometry}
//         material={materials.gray}
//         position={[-10.536, -0.094, -1.416]}
//         scale={[0.18, 1, 1]}
//       />
//       <mesh geometry={nodes.CTRL_Hole003.geometry} material={materials.hidden_material} />
//       <mesh
//         geometry={nodes.Plane048.geometry}
//         material={materials['Glass.001']}
//         position={[-12.359, 0.933, -1.416]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={[1.019, 1, 1]}
//       />
//       <mesh
//         geometry={nodes.Plane049.geometry}
//         material={materials['Glass.001']}
//         position={[-8.079, 0.933, -1.554]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={[1.019, 1, 1]}
//       />
//       <mesh
//         geometry={nodes.Plane050.geometry}
//         material={nodes.Plane050.material}
//         position={[-12.359, 0.933, -1.416]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={[1.019, 1, 1]}
//       />
//       <mesh
//         geometry={nodes.Plane051.geometry}
//         material={nodes.Plane051.material}
//         position={[-8.079, 0.933, -1.416]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={[1.019, 1, 1]}
//       />
//       <group position={[5.38, 3.088, -8.219]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[5.38, 5.156, -8.219]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[5.38, 7.223, -8.219]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[5.38, 9.291, -8.219]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[5.38, 11.359, -8.219]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[5.38, 13.427, -8.219]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[5.38, 15.495, -8.219]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[5.38, 17.563, -8.219]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[-29.136, 3.088, -40.062]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[-29.136, 5.156, -40.062]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[-29.136, 7.223, -40.062]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[-29.136, 9.291, -40.062]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[-29.136, 11.359, -40.062]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[-29.136, 13.427, -40.062]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[-29.136, 15.495, -40.062]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[-29.136, 17.563, -40.062]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[-29.136, 3.088, -5.703]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[-29.136, 5.156, -5.703]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[-29.136, 7.223, -5.703]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[-29.136, 9.291, -5.703]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[-29.136, 11.359, -5.703]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[-29.136, 13.427, -5.703]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[-29.136, 15.495, -5.703]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <group position={[-29.136, 17.563, -5.703]} rotation={[Math.PI, 0, Math.PI]} scale={[0.472, 0.268, 1.943]}>
//         <mesh geometry={nodes.Cube017_1.geometry} material={materials.peach} />
//         <mesh geometry={nodes.Cube017_2.geometry} material={materials.railing} />
//       </group>
//       <mesh
//         geometry={nodes.Cube027.geometry}
//         material={materials.peach}
//         position={[5.38, 1.015, -8.219]}
//         scale={[0.472, 0.268, 1.943]}
//       />
//       <mesh
//         geometry={nodes.Cube086.geometry}
//         material={materials.peach}
//         position={[-29.136, 1.015, -40.062]}
//         rotation={[Math.PI, 0, Math.PI]}
//         scale={[0.472, 0.268, 1.943]}
//       />
//       <mesh
//         geometry={nodes.Cube127.geometry}
//         material={materials.peach}
//         position={[-29.136, 1.015, -5.703]}
//         rotation={[Math.PI, 0, Math.PI]}
//         scale={[0.472, 0.268, 1.943]}
//       />
//       <mesh
//         geometry={nodes.Plane006.geometry}
//         material={materials.peach}
//         position={[5.594, 1.22, -12.348]}
//         rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//         scale={[1, 1, 1.151]}
//       />
//       <mesh
//         geometry={nodes.Plane008.geometry}
//         material={materials.peach}
//         position={[5.594, 1.22, -16.708]}
//         rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//         scale={[1, 1, 1.151]}
//       />
//       <mesh
//         geometry={nodes.Plane010.geometry}
//         material={materials.peach}
//         position={[5.594, 1.22, -21.077]}
//         rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//         scale={[1, 1, 1.151]}
//       />
//       <mesh
//         geometry={nodes.Plane012.geometry}
//         material={materials.peach}
//         position={[5.594, 1.22, -25.455]}
//         rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//         scale={[1, 1, 1.151]}
//       />
//       <mesh
//         geometry={nodes.Plane027.geometry}
//         material={materials.peach}
//         position={[-29.28, 1.22, -31.524]}
//         rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         scale={[1, 1, 1.151]}
//       />
//       <mesh
//         geometry={nodes.Plane028.geometry}
//         material={materials.peach}
//         position={[-29.28, 1.22, -27.164]}
//         rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         scale={[1, 1, 1.151]}
//       />
//       <mesh
//         geometry={nodes.Plane029.geometry}
//         material={materials.peach}
//         position={[-29.28, 1.22, -22.794]}
//         rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         scale={[1, 1, 1.151]}
//       />
//       <mesh
//         geometry={nodes.Plane030.geometry}
//         material={materials.peach}
//         position={[-29.28, 1.22, -18.416]}
//         rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         scale={[1, 1, 1.151]}
//       />
//       <mesh
//         geometry={nodes.Plane039.geometry}
//         material={materials.peach}
//         position={[-29.28, 1.223, -35.893]}
//         rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         scale={[1.007, 1.007, 1.16]}
//       />
//       <mesh
//         geometry={nodes.Plane046.geometry}
//         material={materials.peach}
//         position={[-29.28, 1.22, -1.521]}
//         rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         scale={[1, 1, 1.151]}
//       />
//       <mesh
//         geometry={nodes.Plane014.geometry}
//         material={materials.peach}
//         position={[4.842, 18.26, -18.904]}
//         rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//         scale={[8.849, 1, 0.48]}
//       />
//       <mesh
//         geometry={nodes.Plane021.geometry}
//         material={materials.peach}
//         position={[-4.067, 18.26, -45.719]}
//         rotation={[Math.PI / 2, 0, Math.PI]}
//         scale={[8.849, 1, 0.48]}
//       />
//       <mesh
//         geometry={nodes.Plane031.geometry}
//         material={materials.peach}
//         position={[-28.528, 18.26, -25.145]}
//         rotation={[Math.PI / 2, 0, Math.PI / 2]}
//         scale={[8.849, 1, 0.48]}
//       />
//       <mesh
//         geometry={nodes.Plane015.geometry}
//         material={materials.peach}
//         position={[2.082, 0.972, -30.035]}
//         rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//         scale={[2.206, 1, 1]}
//       />
//       <mesh
//         geometry={nodes.Plane020.geometry}
//         material={materials.peach}
//         position={[2.082, 0.951, -39.615]}
//         rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//         scale={[2.206, 1, 1]}
//       />
//       <mesh
//         geometry={nodes.Plane004.geometry}
//         material={materials.peach}
//         position={[-23.111, 0.983, -42.569]}
//         rotation={[Math.PI / 2, 0, Math.PI]}
//         scale={[2.206, 1, 1]}
//       />
//       <mesh
//         geometry={nodes.Plane042.geometry}
//         material={materials.peach}
//         position={[-23.807, 0.983, -3.224]}
//         rotation={[-Math.PI / 2, 0, 0]}
//         scale={[-2.206, -1, -1]}
//       />
//       <mesh
//         geometry={nodes.Cube007.geometry}
//         material={materials.peach}
//         position={[2.462, 2.569, -30.035]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube008.geometry}
//         material={materials.peach}
//         position={[2.462, 4.616, -30.035]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube009.geometry}
//         material={materials.peach}
//         position={[2.462, 6.662, -30.035]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube010.geometry}
//         material={materials.peach}
//         position={[2.462, 8.607, -30.035]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube011.geometry}
//         material={materials.peach}
//         position={[2.462, 10.564, -30.035]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube012.geometry}
//         material={materials.peach}
//         position={[2.462, 12.52, -30.035]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube014.geometry}
//         material={materials.peach}
//         position={[2.462, 14.194, -30.035]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube015.geometry}
//         material={materials.peach}
//         position={[2.462, 16.01, -30.035]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube039.geometry}
//         material={materials.peach}
//         position={[2.462, 18.274, -30.035]}
//         scale={[0.389, 0.631, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube047.geometry}
//         material={materials.peach}
//         position={[2.462, 2.548, -39.615]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube048.geometry}
//         material={materials.peach}
//         position={[2.462, 4.594, -39.615]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube049.geometry}
//         material={materials.peach}
//         position={[2.462, 6.429, -39.615]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube050.geometry}
//         material={materials.peach}
//         position={[2.462, 8.374, -39.615]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube051.geometry}
//         material={materials.peach}
//         position={[2.462, 10.331, -39.615]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube052.geometry}
//         material={materials.peach}
//         position={[2.462, 12.287, -39.615]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube053.geometry}
//         material={materials.peach}
//         position={[2.462, 13.961, -39.615]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube054.geometry}
//         material={materials.peach}
//         position={[2.462, 15.988, -39.615]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube055.geometry}
//         material={materials.peach}
//         position={[2.462, 18.252, -39.615]}
//         scale={[0.389, 0.631, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube071.geometry}
//         material={materials.peach}
//         position={[-23.111, 2.58, -42.949]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube072.geometry}
//         material={materials.peach}
//         position={[-23.111, 4.627, -42.949]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube073.geometry}
//         material={materials.peach}
//         position={[-23.111, 6.462, -42.949]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube074.geometry}
//         material={materials.peach}
//         position={[-23.111, 8.407, -42.949]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube075.geometry}
//         material={materials.peach}
//         position={[-23.111, 10.363, -42.949]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube076.geometry}
//         material={materials.peach}
//         position={[-23.111, 12.32, -42.949]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube077.geometry}
//         material={materials.peach}
//         position={[-23.111, 13.994, -42.949]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube078.geometry}
//         material={materials.peach}
//         position={[-23.111, 16.021, -42.949]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={[0.389, 0.359, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube079.geometry}
//         material={materials.peach}
//         position={[-23.111, 18.285, -42.949]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={[0.389, 0.631, 2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube111.geometry}
//         material={materials.peach}
//         position={[-23.807, 2.58, -2.844]}
//         rotation={[Math.PI, -Math.PI / 2, 0]}
//         scale={[-0.389, -0.359, -2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube112.geometry}
//         material={materials.peach}
//         position={[-23.807, 4.627, -2.844]}
//         rotation={[Math.PI, -Math.PI / 2, 0]}
//         scale={[-0.389, -0.359, -2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube113.geometry}
//         material={materials.peach}
//         position={[-23.807, 6.462, -2.844]}
//         rotation={[Math.PI, -Math.PI / 2, 0]}
//         scale={[-0.389, -0.359, -2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube114.geometry}
//         material={materials.peach}
//         position={[-23.807, 8.407, -2.844]}
//         rotation={[Math.PI, -Math.PI / 2, 0]}
//         scale={[-0.389, -0.359, -2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube115.geometry}
//         material={materials.peach}
//         position={[-23.807, 10.363, -2.844]}
//         rotation={[Math.PI, -Math.PI / 2, 0]}
//         scale={[-0.389, -0.359, -2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube116.geometry}
//         material={materials.peach}
//         position={[-23.807, 12.32, -2.844]}
//         rotation={[Math.PI, -Math.PI / 2, 0]}
//         scale={[-0.389, -0.359, -2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube117.geometry}
//         material={materials.peach}
//         position={[-23.807, 13.994, -2.844]}
//         rotation={[Math.PI, -Math.PI / 2, 0]}
//         scale={[-0.389, -0.359, -2.207]}
//       />
//       <mesh
//         geometry={nodes.Cube118.geometry}
//         material={materials.peach}
//         position={[-23.807, 18.285, -2.844]}
//         rotation={[Math.PI, -Math.PI / 2, 0]}
//         scale={[-0.389, -0.631, -2.207]}
//       />
//       <mesh
//         geometry={nodes.Plane016.geometry}
//         material={materials.gray}
//         position={[2.873, 1.035, -30.035]}
//         rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//         scale={[2.62, 1, 1.272]}
//       />
//       <mesh
//         geometry={nodes.Plane018.geometry}
//         material={materials.gray}
//         position={[3.422, 1.035, -27.734]}
//         rotation={[Math.PI / 2, 0, Math.PI]}
//         scale={[0.509, 1, 1.272]}
//       />
//       <mesh
//         geometry={nodes.Plane017.geometry}
//         material={materials.gray}
//         position={[3.293, 1.035, -32.276]}
//         rotation={[Math.PI / 2, 0, Math.PI]}
//         scale={[0.509, 1, 1.272]}
//       />
//       <mesh geometry={nodes.Cube060.geometry} material={materials.peach} position={[3.548, 2.069, -6.186]} />
//       <mesh geometry={nodes.Cube070.geometry} material={materials.gray} position={[3.505, 0.978, -45.616]} />
//       <mesh
//         geometry={nodes.Plane023.geometry}
//         material={materials.peach}
//         position={[-16.958, 1.217, -41.188]}
//         rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//         scale={[4.987, 1, 1.133]}
//       />
//       <mesh
//         geometry={nodes.Plane043.geometry}
//         material={materials.peach}
//         position={[-18.172, 1.217, -4.604]}
//         rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//         scale={[-4.987, -1, -1.133]}
//       />
//       <mesh geometry={nodes.Cube110.geometry} material={materials.peach} position={[-26.709, 2.069, -40.157]} />
//       <mesh geometry={nodes.Cube135.geometry} material={materials.peach} position={[-26.709, 2.069, -5.798]} />
//       <mesh geometry={nodes.Cube137.geometry} material={materials.gray} position={[-26.709, 2.069, -11.87]} />
//       <mesh
//         geometry={nodes.Plane.geometry}
//         material={materials.peach}
//         position={[1.341, 1, 0]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={[4.427, 1, 1]}
//       />
//       <mesh
//         geometry={nodes.Plane001.geometry}
//         material={nodes.Plane001.material}
//         position={[-0.898, 1.077, 0]}
//         rotation={[Math.PI / 2, 0, 0]}
//       />
//       <mesh
//         geometry={nodes.Plane002.geometry}
//         material={nodes.Plane002.material}
//         position={[3.639, 1.077, 0]}
//         rotation={[Math.PI / 2, 0, 0]}
//       />
//     </group>
//   );
// };

// useGLTF.preload('/r3f/ohostel.glb');

// export default OHostel;
