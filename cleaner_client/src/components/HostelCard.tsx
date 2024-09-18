import { Card, CardContent, Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface HostelCardProps {
  id: number;
  key: number;
  name: string;
  image: string;
}

export default function HostelCard({ id, name, image }: HostelCardProps) {
  return (
    <Link href={`${id}/cleaners/`} passHref>
      <Card sx={{ display: "flex", alignItems: "center", margin: 2 }}>
        <Box sx={{ width: 150, height: 150, position: "relative" }}>
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Box>
        <CardContent>
          <Typography variant="h6">{name}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
