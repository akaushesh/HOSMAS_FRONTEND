import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Box, Paper, SvgIcon, Typography } from '@mui/material';
import oneS from '../Assets/1S.svg'
import { navIcons } from './icons';

interface logo {
  logo: string;
}

const NavIcon: React.FC<logo> = ({ logo }) => {
  const Icon = navIcons[logo];
  return (
    <img src={Icon} alt='logo' style={{scale:"0.8"}}/>
  );
};


interface Props {
  logo: string;
  id: string;
  room: string;
  hostel: string;
}


const Card: React.FC<Props> = ({ logo,id, room,hostel }) => {
  const { setNodeRef, attributes, listeners, transition, transform } = useSortable({ id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <Paper
      elevation={4}
      sx={{
        '--Card-BgColor':'var(--mui-palette-secondary-light)',
        '--Card-TextColor':'var(--mui-palette-text-primaryChannel)',
        '--Card-BorderColor':'var(--mui-palette-secondary-dark)',
        width: 0.97,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2,
        py:"3px",
        border: '1px dashed var(--Card-BorderColor)',
        my: 1,
        touchAction: 'none',
        background: 'var(--Card-BgColor)',
        color: 'var(--Card-TextColor)',
      }}
      ref={setNodeRef}
      key={id}
      style={style}
    >
      <Box sx={{display:"flex", alignItems:"center"}} gap={2}>
        <NavIcon logo={logo} />
        <Box sx={{display:"flex",alignItems:"baseline",justifyContent:"flex-start"}} gap={1.2}>
          <Typography variant='h6' >{logo}</Typography>
          <Typography variant='h5'  fontSize={"19px"}>{room}</Typography>
          <Typography variant='subtitle2'>{hostel}</Typography>
        </Box>
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
