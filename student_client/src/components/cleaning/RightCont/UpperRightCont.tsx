'use client';
import { useProfile } from '@/hooks/query/use-profile';
import { type ProfileResponse } from '@/services/profile';
import { Button, Checkbox, FormControlLabel, Paper, Typography } from '@mui/material'
import { type AxiosResponse } from 'axios';
import * as React from 'react'

export default function UpperRightCont():React.JSX.Element{
  
  const{data:profile}=useProfile()
  const user=profile as AxiosResponse<ProfileResponse>;

  const [submit,setSubmit]=React.useState<boolean>(false);

  const handleSubmit=():void=>{
    setSubmit(!submit);
  }

  return (
    <Paper elevation={10} sx={{width:1,height:1,p:3}}>
      <Typography variant="h5">{user?.data?.alloted_hostel?.hostel} | {user?.data?.alloted_room?.number||"NULL"}</Typography>
      
      <Typography variant="caption" display="block">
        {user?.data?.alloted_hostel?.room_type}
      </Typography>

      <Button variant="contained" color="primary" sx={{width:submit?"50%":"40%",mt:2,display:"block",py:submit?2:'auto'}} onClick={handleSubmit}>{submit?`Cancel Request`:`Request Room Cleaning`}</Button>


      {!submit ? <FormControlLabel
        sx={{mt:1}}
        label="Request Immediate Room Cleaning"
        control={<Checkbox sx={{'& .MuiSvgIcon-root': { fontSize: 26 }}} defaultChecked color="primary" />}
        /> : null
      }

     

    </Paper>
  )
}
