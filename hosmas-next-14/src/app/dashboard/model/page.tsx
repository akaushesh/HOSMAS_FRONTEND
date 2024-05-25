// 'use client';

// import React, { Suspense } from 'react';
// import {
//   Environment,
//   Html,
//   OrbitControls,
//   OrthographicCamera,
//   PerspectiveCamera,
//   PointerLockControls,
//   RandomizedLight,
//   Stats,
// } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber';

// import OHostel from '@/components/dashboard/models/OHostel';

// export default function page(): React.JSX.Element {
//   return (
//     <div style={{ height: '75vh' }}>
//       <Canvas>

//         <OrthographicCamera makeDefault position={[0, 0, 90]} zoom={15} />

//         <OrbitControls
//           maxZoom={35}
//           minZoom={12}
//           minPolarAngle={Math.PI / 4} // Restrict the controls to orbit above the surface
//           maxPolarAngle={Math.PI / 2} // This is optional, it restricts the controls from going directly overhead
//         />

//         <ambientLight color={'yellow'} intensity={0.05} castShadow />
//         <Environment preset="sunset"> </Environment>

//         <Suspense fallback={null}>
//           <OHostel position={[10, -10, 0]} rotation={[0, 0, 0]} />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }
