"use client";

import CleanerCard from "@/components/CleanerCard";
import { CleanersResponse, getCleanersFromHostel } from "@/services/cleaning";
import { Grid2 } from "@mui/material";
import { useEffect, useState } from "react";

interface ParamsInterface {
  hostelId: string;
}

export default function HostelPage({ params }: { params: ParamsInterface }) {
  const [cleaners, setCleaners] = useState<CleanersResponse>([]);

  useEffect(() => {
    const fetchCleaners = async () => {
      const cleaners = await getCleanersFromHostel(params.hostelId);
      console.log(cleaners.data);
      setCleaners(cleaners.data);
    };
    fetchCleaners();
  }, [params.hostelId]);

  return (
    <Grid2 container>
      {cleaners.map((cleaner) => (
        <CleanerCard
          id={cleaner.id}
          key={cleaner.id}
          name={cleaner.name}
          image={cleaner.photo}
          phone={cleaner.phone}
        />
      ))}
    </Grid2>
  );
}
