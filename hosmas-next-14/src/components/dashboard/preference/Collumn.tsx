import * as React from 'react';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Box } from '@mui/material';

import Card from './Card';
import Placeholder from './Placeholder';

interface CardData {
  logo: string;
  id: string | number;
  room: string;
  hostel: string;
}

interface CollumnProps {
  id: string;
  main: CardData[];
  second: CardData[];
}


export default function Collumn(props:CollumnProps):React.JSX.Element{
  return (
    <Box
      sx={{
        height: '100%',
        width: 1,
      }}
    >
      <SortableContext id={props.id} items={[...props.main, ...props.second]} strategy={verticalListSortingStrategy}>
        
        
        {props.main.map((el) => {
          if(!el)return null;
          return (
            <Card key={el.id} logo={el.logo} id={el.id} room={el.room} hostel={el.hostel} />
          );
        })}

        {props.main.length === 0 && <Placeholder id={`${props.id}+Plc`} />}
      </SortableContext>
    </Box>
  );
};

