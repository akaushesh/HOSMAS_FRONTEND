"use client";

import * as React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

interface cleanerData{
  id: number;
  room: string;
  level: string;
  block: string;
  slot: {id:number; start_time: string; end_time: string;};
}



export default function Page({
  params,
}: {
  params: { cleaner: string };
}): React.JSX.Element {
  const router = useRouter();

  const id = params.cleaner;
  const [socket, setSocket] = React.useState<WebSocket | null>(null);
  console.log(socket);
  const workerId = id;
  
  // const [data, setData] = React.useState<cleanerData[]>([{
  //   id: 0,
  //   room: "212",
  //   level: "4",
  //   block: "B",
  //   slot: {id: 0, start_time: "07:00 AM", end_time: "09:00 AM"}
  // },{
  //   id: 1,
  //   room: "212",
  //   level: "4",
  //   block: "B",
  //   slot: {id: 0, start_time: "07:00 AM", end_time: "09:00 AM"}
  // }]);
  const [data, setData] = React.useState<cleanerData[]>([]);

  console.log(data);

  React.useEffect(() => {
    const ws = new WebSocket(
      `wss://cleaning.hosmas.ccstiet.com/ws/workers/${workerId}/pending-requests/`
    );

    ws.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.onmessage = (event) => {
      const obj = JSON.parse(event.data);
      console.log("New message:", obj);
      setData(obj.data);
    };

    ws.onclose = () => {
      console.log("WebSocket closed");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    setSocket(ws);

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [workerId]);

  return (
    <Stack>

    <Box sx={{ position: "relative", height: "fit-content" ,mb:3 }}>
      <Box width={1}>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "25px", md: "35px" },
            color: "var(--Page-HeadColor)",
          }}
          display="inline"
          >
          Cleaners Assignment
        </Typography>
      </Box>
      <Button
        sx={{
          mt: 1,
          alignSelf: "flex-start",
          color: "var(--TextMain-Color)",
        }}
        startIcon={<ArrowBackIosIcon sx={{ color: "#b30000" }} />}
        disableRipple
        onClick={() => {
          router.push(`/`);
        }}
        >
        <Typography variant="body2" fontWeight={600} color="#3A3A3A">
          back to main page
        </Typography>
      </Button>

      <Typography
        variant="h4"
        sx={{ mt: 4, fontSize: "35px", color: "var(--Page-HeadColor)" }}
        >
        {id}
      </Typography>
    </Box>
        
        <Stack>
          {data.map((el) => {
            return(
              <Stack direction="row" alignItems="center" justifyContent="space-between" key={el.id}
              sx={{
                border: "2px solid #D6D6D6",
                borderRadius: 2,
                px:4,
                py:1,
                color:"black",
                backgroundColor:"#F0F0F0",
                my:1
              }}
              
              >
                <Stack sx={{flexDirection:{xs:"column",sm:"row"}, gap:{xs:1,sm:2}}} alignItems="center">
                  <Typography className="poppins" variant="h5">
                    <span  style={{fontWeight:"600",fontSize:"22px",marginRight:"5px"}}>
                      Room {el.room}
                     </span>
                  </Typography>
                  <Typography className="poppins" variant="h5">
                     <span style={{fontWeight:"400",fontSize:"18px"}}>
                      Level {el.level} {el.block!==""? `Block ${el.block}`: ""}
                     </span>
                  </Typography>
                </Stack>

                <Stack sx={{flexDirection:{xs:"column",sm:"row"}, gap:{xs:1,sm:4}}} alignItems="center">
                
                  <Box sx={{border:"1px dashed #D6D6D6",background:"#f9f9f9",px:2,py:0.5,borderRadius:1}}>
                    <Typography className="poppins" variant="body1" fontWeight={400}>From</Typography>
                    <Typography className="poppins" variant="h6" fontWeight={500}>
                      {el.slot.start_time}
                    </Typography>
                  </Box>


                  <Box sx={{border:"1px dashed #D6D6D6",background:"#f9f9f9",px:2,py:0.5,borderRadius:1}}>
                    <Typography className="poppins" variant="body1" fontWeight={400}>To</Typography>
                    <Typography className="poppins" variant="h6" fontWeight={500}>
                      {el.slot.end_time}
                    </Typography>
                  </Box>

                </Stack>

              </Stack>
            )
          }
          )}
    
        </Stack>
    
    
    
    
    </Stack>
  );
}
