import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Box, Paper, SvgIcon, Typography } from '@mui/material';
import oneS from '../Assets/1S.svg'
import { navIcons } from './icons';

interface PropsN {
  logo: string;
}

const NavIcon: React.FC<PropsN> = ({ logo }) => {
  const Icon = navIcons[logo];
  return (
    <img src={Icon} alt='logo' style={{scale:"0.8"}}/>
  );
};


interface Props {
  logo: string;
  id: string;
  content: string;
}


const Card: React.FC<Props> = ({ logo,id, content }) => {
  const { setNodeRef, attributes, listeners, transition, transform } = useSortable({ id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <Paper
      elevation={4}
      sx={{
        width: 0.97,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2,
        border: '1px dashed',
        my: 1,
        touchAction: 'none',
      }}
      ref={setNodeRef}
      key={id}
      style={style}
    >
      <Box sx={{display:"flex", alignItems:"center"}} gap={2}>
        <NavIcon logo={logo} />
        <p>{content}</p>
      </Box>

      <Typography
        variant="h4"
        sx={{ cursor: 'grab' }}
        letterSpacing={4}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
      >
        :::
      </Typography>
    </Paper>
  );
};

export default Card;
