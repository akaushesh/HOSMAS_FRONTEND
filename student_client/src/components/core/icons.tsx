import * as React from "react";

const navIcons= {
    '1S': '/icons/1S.svg',
    '2S': '/icons/2S.svg',
    '3S': '/icons/3S.svg',
    '4S': '/icons/4S.svg',
} as Record<string, string>;
  
export default function NavIcon({ logo }:{logo:string}): React.JSX.Element {
    const Icon = navIcons[logo];
    return (
      <img src={Icon} alt='logo' style={{scale:"0.8"}}/>
    );
};