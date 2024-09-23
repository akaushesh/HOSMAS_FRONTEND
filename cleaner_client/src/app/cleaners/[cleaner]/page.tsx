"use client";

import * as React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

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

  React.useEffect(() => {
    const ws = new WebSocket(
      `wss://cleaning.hosmas.ccstiet.com/ws/workers/${workerId}/pending-requests/`
    );

    ws.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("New message:", data);
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
    <Box sx={{ position: "relative", height: "fit-content" }}>
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
          router.push(`/cleaners`);
        }}
      >
        <Typography variant="body2" fontWeight={600} color="#3A3A3A">
          back to main page
        </Typography>
      </Button>

      <Typography
        variant="h4"
        sx={{ mt: 6, fontSize: "35px", color: "var(--Page-HeadColor)" }}
      >
        {id}
      </Typography>
    </Box>
  );
}
