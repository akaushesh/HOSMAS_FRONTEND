'use client';

import * as React from 'react';
import { Suspense } from 'react';
import { Environment, OrbitControls, OrthographicCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import OHostel from '@/components/dashboard/models/OHostel';
import { Skeleton } from '@mui/material';

function Loading():React.JSX.Element{
  return (
    <Skeleton  animation="wave"  variant="rounded" width='100%' height='75vh' />
  );
}

export default function page(): React.JSX.Element {
  return (
    <div style={{ height: '75vh' }}>
      <Canvas>
        <OrthographicCamera makeDefault position={[0, 0, 90]} zoom={15} />

        <OrbitControls
          maxZoom={35}
          minZoom={12}
          minPolarAngle={Math.PI / 4} // Restrict the controls to orbit above the surface
          maxPolarAngle={Math.PI / 2} // This is optional, it restricts the controls from going directly overhead
        />

        <ambientLight  castShadow  />
        <Environment  preset="sunset"> </Environment>
        {/* presets  ---  apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse */}

        <Suspense fallback={<Loading/>}>
          <OHostel position={[10, -10, 0]} rotation={[0, 0, 0]} />
          
        </Suspense>
      </Canvas>
    </div>
  );
}
