'use client';

import React, { useState } from 'react';
import { Environment, OrbitControls, OrthographicCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Skeleton, Box } from '@mui/material';
import OHostel from './base-models/OHostel';
import BHostel from './base-models/BHostel';

interface ModelProps {
  // eslint-disable-next-line react/require-default-props -- default props are provided in the component
  position?: [number, number, number];
  hostel: string;
}

export default function Model({ hostel }: ModelProps): React.JSX.Element {
  const [loading, setLoading] = useState(true);

  const handleModelLoad = () => {
    setLoading(false);
  };

  return (
    <div style={{ height: '75vh', position: 'relative' }}>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1, 
            
          }}
        >
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="100%"
            height="100%"
            sx={{ borderRadius:2 }}
          />
        </Box>
      ):null}

      <Canvas>
        <OrthographicCamera makeDefault position={[0, 0, 90]} zoom={15} />

        <OrbitControls
          maxZoom={35}
          minZoom={12}
          minPolarAngle={Math.PI / 4} // Restrict the controls to orbit above the surface
          maxPolarAngle={Math.PI / 2} // Restrict controls from going directly overhead
        />

        <ambientLight castShadow />
        <Environment preset="sunset" />
        {/* Presets: apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse */}

        {hostel === 'hostel-o' && (<OHostel position={[10, -10, 0]} onLoad={handleModelLoad} />)}
        {hostel === 'hostel-b' && (<BHostel position={[0, -10, 0]} onLoad={handleModelLoad} />)}
      </Canvas>
    </div>
  );
}
