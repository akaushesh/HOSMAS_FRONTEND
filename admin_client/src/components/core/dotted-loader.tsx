"use client";
import * as React from "react";
import { Box, keyframes } from "@mui/material";

// Define the animation keyframes for the loader
const l21 = keyframes`
  0%   { 
    box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0; 
  }
  50%  { 
    box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px; 
  }
  100% { 
    box-shadow: 19px 0 0 0, 38px 0 0 3px, 57px 0 0 7px; 
  }
`;
export default function Loader(): React.JSX.Element {
  return (
    <div style={{scale:1.6}}>

<Box
      sx={{
        color: "var(--mui-palette-secondary-dark)", 
        width: "4px", 
        aspectRatio: "1",
        borderRadius: "50%", 
        boxShadow: "19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0", 
        transform: "translateX(-38px)", 
        animation: `${l21} 0.5s infinite alternate linear`, 
      }}
    />
      </div>
  );
}
