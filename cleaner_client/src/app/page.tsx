"use client";

import HostelCard from "@/components/HostelCard";
import { getAllHostels, Root } from "@/services/hostel";
import { Grid2 } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [hostels, setHostels] = useState<Root>([]);

  useEffect(() => {
    const fetchHostels = async () => {
      const hostels = await getAllHostels();
      console.log(hostels.data);
      setHostels(hostels.data);
    };
    fetchHostels();
  }, []);

  return (
    <Grid2 container>
      {hostels?.map((hostel) => (
        <HostelCard
          key={hostel.id}
          id={hostel.id}
          name={hostel.name}
          image={hostel.image_url}
        />
      ))}
    </Grid2>
  );
}
