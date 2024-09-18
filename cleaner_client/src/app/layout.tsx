import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cleaner Client",
  description: "Cleaner client for Hostel Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Box
          sx={{
            bgcolor: "var(--mui-palette-background-default)",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            minHeight: "100vh",
          }}
        >
          {/* <Box sx={{ position: 'absolute', top: 0, left: '35%', zIndex: 0 }}>
          <Ellipse2 />
        </Box> */}

          {/* <Box  sx={{position:"absolute",bottom:0,left:"60%",zIndex:0}}>
          <Ellipse1/>
        </Box> */}

          <Box
            sx={{
              display: "flex",
              flex: "1 1 auto",
              flexDirection: "column",
            }}
          >
            <main>
              <Container maxWidth="xl" sx={{ py: "64px" }}>
                {children}
              </Container>
            </main>
          </Box>
        </Box>
      </body>
    </html>
  );
}
