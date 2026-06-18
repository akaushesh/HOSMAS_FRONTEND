'use client';

import *  as React from 'react';
import { Environment, OrbitControls, OrthographicCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Skeleton, Box } from '@mui/material';
import OHostel from './base-models/OHostel';
import BHostel from './base-models/BHostel';
import AHostel from './base-models/AHostel';
import CHostel from './base-models/CHostel';
import DHostel from './base-models/DHostel';
import JHostel from './base-models/JHostel';
import QHostel from './base-models/QHostel';

interface ModelProps {
  // eslint-disable-next-line react/require-default-props -- default props are provided in the component
  position?: [number, number, number];
  hostel: string;
}

export default function Model({ hostel }: ModelProps): React.JSX.Element {
  const CanvasAny = Canvas as any;
  const [loading, setLoading] = React.useState(true);

  const handleModelLoad = ():void => {
    setLoading(false);
  };

  return (
    <div style={{ height: '75vh', position: 'relative' }}>
      {loading ? (
        <div
          style={{
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
        </div>
      ):null}

      <CanvasAny>
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

        {hostel === 'vyom-hall' && (<OHostel position={[10, -10, 0]} onLoad={handleModelLoad} />)}
        {hostel === 'amritam-hall' && (<BHostel position={[0, -10, 0]} onLoad={handleModelLoad} />)}
        {hostel === 'agira-hall' && (<AHostel position={[0, -10, 0]} onLoad={handleModelLoad} />)}
        {hostel === 'prithvi-hall' && (<CHostel position={[0, -10, 0]} onLoad={handleModelLoad} />)}
        {hostel === 'neeram-hall' && (<DHostel position={[0, -10, 0]} onLoad={handleModelLoad} />)}
        {hostel === 'tejas-hall' && (<JHostel position={[0, -10, 0]} onLoad={handleModelLoad} />)}
        {hostel === 'vahni-hall' && (<QHostel position={[0, -10, 0]} onLoad={handleModelLoad} />)}
      </CanvasAny>
    </div>
  );
}
