import React, { useState } from "react";
import { Card, CardContent, Grid, Typography, Stack, Skeleton } from "@mui/material";
import Link from "next/link";

function BatchesListLoading({}) {
  return (
    <Grid container spacing={4}>
      {Array.from({ length: 6 }, (_, index) => (
        <Grid item xs={6} md={4} key={index}>
          <Card>
            <Skeleton animation="wave" variant="rounded" width="auto" height={108} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default BatchesListLoading;
