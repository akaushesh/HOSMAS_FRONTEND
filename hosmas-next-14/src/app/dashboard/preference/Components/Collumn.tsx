import React from 'react';
import { SortableContext, rectSortingStrategy, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Box } from '@mui/material';

import styles from '../page.module.css';
import Card from './Card';
import Placeholder from './Placeholder';

interface CardData {
  logo: string;
  id: string;
  room: string;
  hostel: string;
}

interface Props {
  id: string;
  main: CardData[];
  second: CardData[];
}

const Collumn: React.FC<Props> = (props) => {
  return (
    <Box
      sx={{
        // overflowX:'hidden',
        // overflowY: 'auto',
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

export default Collumn;
