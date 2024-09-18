import { Card, CardContent, Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface CleanerCardProps {
  id: number;
  key: number;
  name: string;
  image: string;
  phone: string;
}

export default function CleanerCard({ id, name, image }: CleanerCardProps) {
  return (
    <Link href={`${id}/`} passHref>
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
