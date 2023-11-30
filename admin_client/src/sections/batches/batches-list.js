import React, { useState } from "react";
import { Card, CardContent, Grid, Typography, Stack, Skeleton } from "@mui/material";
import Link from "next/link";

function BatchesList({ batches = [] }) {
  // const years = ["UG1", "UG2"];
  // const [selectedYear, setSelectedYear] = useState();

  // const genders = ["Male", "Female"];
  // const [selectedGender, setSelectedGender] = useState();

  return (
    <Grid container spacing={4}>
      {batches.length === 0 &&
        Array.from({ length: 6 }, (_, index) => (
          <Grid item xs={6} md={4} key={index}>
            <Card>
              <Skeleton animation="wave" variant="rounded" width="auto" height={108} />
            </Card>
          </Grid>
        ))}
      {batches.map((batch) => {
        return (
          <Grid item xs={6} md={4}>
            <Card>
              <Link
                href={`/manage-batches/${batch.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CardContent>
                  <Stack alignItems="center">
                    <Typography variant="h3">{batch.name}</Typography>
                  </Stack>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default BatchesList;
