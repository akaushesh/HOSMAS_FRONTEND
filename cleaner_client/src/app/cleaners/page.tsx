import * as React from "react";
import type { Metadata } from "next";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import { config } from "../../../config";
import CleanerHostels from "@/components/cleaners/CleanerHostels";

export const metadata = {
  title: `Cleaners | ${config.site.name}`,
} satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
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
      </Stack>

      <CleanerHostels />
    </Stack>
  );
}
