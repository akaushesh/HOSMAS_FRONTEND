import * as React from 'react';
import { Box, Collapse, Divider, Paper, Typography, Dialog, DialogContent, DialogTitle, IconButton, Stack, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import type { Hostel } from '@/types/hostels';
import Model from '../../models/Model';
import LocationCityIcon from '@mui/icons-material/LocationCity';

interface PropsType {
  hostel?: Hostel | null;
}

export default function HostelDescription({ hostel }: PropsType): React.JSX.Element {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [modelOpen, setModelOpen] = React.useState(false);

  const handleDialogOpen = ():void => { setDialogOpen(true); };
  const handleDialogClose = ():void => { setDialogOpen(false); };

  return (
    <>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 1,
          gap: { xs: 2, sm: 4 },
          p: { xs: 2, md: 3 },
          borderRadius: 1,
          mb: 2,
          position: 'relative',
        }}
        elevation={3}
      >


        <Box sx={{ flex: 3, width: 1 }}>

          <Stack sx={{flexDirection:"row",alignItems:"center" ,gap:1}}  justifyContent="space-between" pr={2} mb={2}>

          <Typography variant="h2" sx={{ fontSize: { xs: '33px', md: '39px', lg: '49px' } }}>
            {hostel?.name}
          </Typography>
        
          {['vyom-hall', 'amritam-hall', 'agira-hall', 'prithvi-hall', 'neeram-hall', 'tejas-hall', 'vahni-hall'].includes(hostel?.path || '') && (
            <Button variant="contained" sx={{borderRadius:1,width:"fit-content",minWidth:"0px"}} onClick={()=>{setModelOpen(true)}}  size='small'>
              <LocationCityIcon sx={{fontSize:20, mr:{xs:0,md:1}}} />
              <Typography  sx={{display:{xs:"none",md:"block"}}}>View 3D Model</Typography>
            </Button>
          )}
          </Stack>
          <Collapse  collapsedSize={100}>
            {hostel?.description.split('<br/>').map((desc, idx) => (
              <Typography key={idx} variant="subtitle2" sx={{ fontSize: { xs: '12px', md: '14px', lg: '16px' } }}>
                {desc}
              </Typography>
            ))}
          </Collapse>

          <Typography
            sx={{ cursor: 'pointer', mt: 1, fontSize: { xs: '12px', md: '14px' }, color: 'text.secondary' }}
            onClick={handleDialogOpen}
          >
            ...view more
          </Typography>
        </Box>


        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            display: { xs: 'none', sm: 'block' },
          }}
        />

        <Box sx={{  textAlign: 'center', display: { xs: 'none', sm: 'block' } }} >
          <img
            alt="hostelImg"
            height="150px"
            src={hostel?.warden_image}
            style={{ margin: '10px auto', display: 'block', borderRadius: '8px' }}
          />

          <Typography variant="body2" fontSize="14px" lineHeight="1.1rem">
            {hostel?.warden}
          </Typography>
        </Box>
      </Paper>

      {/* Dialog for Full Description */}
      <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h2">{hostel?.name}</Typography>
            <IconButton onClick={handleDialogClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent
          sx={{
            p: 4,
          }}
        >
          <Box
          sx={{
            height: '55vh',
            pr:1,
            overflowY: 'auto',
          }}>

          {hostel?.description.split('<br/>').map((desc, idx) => (
            <Typography key={idx} variant="subtitle2" sx={{ fontSize: { xs: '12px', md: '14px', lg: '16px' }, mb: 1 }}>
              {desc}
            </Typography>
          ))}

          </Box>
        </DialogContent>
      </Dialog>


      <Dialog open={modelOpen} onClose={()=>{setModelOpen(false)}} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h2">{hostel?.name}</Typography>
            <IconButton onClick={()=>{setModelOpen(false)}}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent
          sx={{
            p: 4,
            overflow:"hidden"
          }}
        >
          <Model hostel={hostel?.path||""} />
        </DialogContent>
      </Dialog>

    </>
  );
}
