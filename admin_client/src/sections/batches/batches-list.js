import React, { useState } from "react";
import { Card, CardContent, Grid, Typography, Stack } from "@mui/material";
import Link from "next/link";

function BatchesList({ batches = [] }) {
  // const years = ["UG1", "UG2"];
  // const [selectedYear, setSelectedYear] = useState();

  // const genders = ["Male", "Female"];
  // const [selectedGender, setSelectedGender] = useState();

  return (
    <Grid container spacing={4}>
      {batches.length === 0 && <Typography variant="h6">No batches added!</Typography>}
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
