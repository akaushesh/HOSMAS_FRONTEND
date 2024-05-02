import React from 'react';
import { useSortable} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box } from '@mui/material';
; 

interface Props {
  id: string;
}

const Placeholder: React.FC<Props> = ({ id }) => {
    const { setNodeRef, transition, transform } = useSortable({ id });
    const style={
      transition,
      transform: CSS.Transform.toString(transform),
    };

  return (
    <Box sx={{border:"1px dashed", width:1,height:1,fontSize:"50px",fontWeight:"400",display:"flex",alignItems:"center",justifyContent:"center" }} borderRadius={1} ref={setNodeRef}  key={id} style={style}>
        +
    </Box>
  );
};

export default Placeholder;
