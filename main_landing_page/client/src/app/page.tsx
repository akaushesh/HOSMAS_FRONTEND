import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import Navbar from "../Components/Navbar";
import LandingPageCarousel from "../Components/Carousel";
import Announcements from "../Components/Annoucements";
import HostelsCarousel from "@/Components/HostelsCarousel";
import Services from "@/Components/Services";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <Box>
      <Navbar />

      <LandingPageCarousel />

      <Announcements />

      <Box
        sx={{
          display: "flex",
          padding: "80px 30px 80px 30px",
          backgroundColor: "#333333",
          alignItems: "center",

          flexDirection: { xs: "column", sm: "row" },
          gap: "30px",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "25%" },
          }}
        >
          <HostelsCarousel />
        </Box>

        <Box sx={{ width: { xs: "100%", sm: "75%" } }}>
          <Services />
        </Box>
      </Box>

      {/* <Footer /> */}
    </Box>
  );
}
