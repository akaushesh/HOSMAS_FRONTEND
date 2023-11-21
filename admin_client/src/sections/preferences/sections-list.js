import React, { useState } from "react";
import { Card, CardContent, Grid, Typography, Stack } from "@mui/material";
import Link from "next/link";

function SectionsList({ sections = [] }) {
  const years = ["UG1", "UG2"];
  const [selectedYear, setSelectedYear] = useState();

  const genders = ["Male", "Female"];
  const [selectedGender, setSelectedGender] = useState();

  return (
    <Grid container spacing={4}>
      {sections.length === 0 && <Typography variant="h6">No sections added!</Typography>}
      {sections.map((section) => {
        return (
          <Grid item xs={6} md={4}>
            <Card>
              <Link
                href={`/manage-preferences/${section.id}/`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CardContent>
                  <Stack alignItems="center">
                    <Typography variant="h3">{section.batch_name.toUpperCase()}</Typography>
                    <Typography variant="h6">
                      {section.gender === "M" ? "BOYS" : "GIRLS"}
                    </Typography>
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

export default SectionsList;
