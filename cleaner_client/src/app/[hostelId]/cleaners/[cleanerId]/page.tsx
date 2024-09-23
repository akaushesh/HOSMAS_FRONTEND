import { useEffect, useState } from "react";
import { Grid2 } from "@mui/material";

export default function CleanerPage({
  params,
}: {
  params: { cleanerId: string };
}) {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  console.log(socket);
  const workerId = params.cleanerId;

  useEffect(() => {
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

  return <Grid2 container></Grid2>;
}
