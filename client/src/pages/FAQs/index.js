import Head from "next/head";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import Link from "next/link";

const Page = () => (
  <>
    <Head>
      <title>FAQs | Thapar Hostel Management System</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack direction="row" justifyContent="space-between" spacing={4}>
            <Typography variant="h4">FAQs</Typography>

            <Button
              endIcon={
                <SvgIcon fontSize="small">
                  <NavigateNextIcon />
                </SvgIcon>
              }
              variant="contained"
            >
              <Link style={{ color: "#fff", textDecoration: "none" }} href="/FAQs/myFAQs">
                My FAQs
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
