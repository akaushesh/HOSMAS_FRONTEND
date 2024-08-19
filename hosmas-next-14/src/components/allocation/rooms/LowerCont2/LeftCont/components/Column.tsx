import * as React from 'react';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Box } from '@mui/material';
import Card from './Card';


interface MembersType {
    rollNum: number;
    id: number;
    name: string;
  }
  
interface ColumnProps {
  id: string;
  main: MembersType[];
}


export default function Column(props:ColumnProps):React.JSX.Element{
  return (
    <Box
      sx={{
        width: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        justifyContent: 'space-evenly',
        height:1,
      }}
    >
      <SortableContext id={props.id} items={[...props.main]} strategy={verticalListSortingStrategy}>
        
        
        {props.main.map((el) => {
          if(!el)return null;
          return (
            <Card key={el.id} id={el.id} name={el.name} rollNum={el.rollNum} />
          );
        })}

      </SortableContext>
    </Box>
  );
};

