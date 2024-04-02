"use client";

import FacilitiesCarousel from "@/Components/FacilitiesCarousel";
import {
  Box,
  Typography,
  styled,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";

const Heading = styled(Typography)(() => ({
  fontSize: "30px",
  marginBottom: "15px",
  marginTop: "30px",
}));

const CustomAccordion = styled(Accordion)(() => ({
  backgroundColor: "#FCF7F8",
  border: "1px solid #000",
}));

function Page() {
  const [selectedRoom, setSelectedRoom] = useState(1);

  const rooms = [
    {
      roomId: 1,
      roomName: "Room 1",
      images: ["/assets/hostele1.JPG", "/assets/hostele2.JPG"],
    },
    {
      roomId: 2,
      roomName: "Room 2",
      images: [
        "/assets/hostele5.JPG",
        "/assets/hostele4.JPG",
        "/assets/hostele3.JPG",
      ],
    },
  ];

  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <img
          src="/assets/hostele.JPG"
          style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
        />

        <Box
          sx={{
            position: "absolute",
            left: "calc(50% - 100px)",
            top: "calc(50% - 20px)",
            zIndex: 10,
            fontSize: "40px",
            backgroundColor: "white",
            padding: "20px",
            // textDecoration: "underline",
            borderRadius: "10px",
          }}
        >
          HOSTEL E
        </Box>
      </Box>
      <Box sx={{ padding: "20px" }}>
        <a
          href="https://www.tiet360.in/hostelo/index.htm"
          target="_blank"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "20px",
            display: "block",
            marginBottom: "30px",
            fontWeight: 500,
          }}
        >{`Check out the 360 degree view ->`}</a>

        <Typography sx={{ fontSize: "20px", marginBottom: "10px" }}>
          Hostel O is the latest addition to the exceptional range of hostel
          facilities on the Thapar Institute campus. This 928-seater hostel
          provides double-seater rooms with shared washrooms for boys. Each room
          is fully furnished, with a study table, chair, wardrobe, bookrack,
          shoe rack, mattress, geyser, curtains, and dustbins. Residents also
          benefit from amenities such as water coolers, RO systems, and washing
          mac\hines for their convenience.{" "}
        </Typography>

        <Typography sx={{ fontSize: "20px" }}>
          <b>Capacity</b> - 900
        </Typography>

        <Box>
          <Heading>Facilities</Heading>

          <FacilitiesCarousel />
        </Box>

        <Box>
          <Heading>Rooms</Heading>

          <Box sx={{ display: "flex", marginBottom: "20px" }}>
            {rooms.map((room, index) => {
              return (
                <Box
                  key={room.roomId}
                  sx={{
                    minWidth: "100px",
                    padding: "10px",
                    borderRight: "1px solid #000",
                    borderTop: "1px solid #000",
                    borderBottom: "1px solid #000",
                    borderLeft: index === 0 ? "1px solid #000" : "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    backgroundColor:
                      selectedRoom === room.roomId ? "#640000" : "white",
                    color: selectedRoom === room.roomId ? "white" : "black",
                  }}
                  onClick={() => setSelectedRoom(room.roomId)}
                >
                  {room.roomName}
                </Box>
              );
            })}
          </Box>

          <Box>
            {rooms
              .find((room) => room.roomId === selectedRoom)
              .images.map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    style={{
                      width: "300px",
                      height: "200px",
                      objectFit: "cover",
                      marginRight: "20px",
                    }}
                  />
                );
              })}
          </Box>
        </Box>

        <Box>
          <Heading>Important contacts</Heading>

          <Box sx={{ maxWidth: "600px", marginBottom: "60px" }}>
            <CustomAccordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Warden
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Suhani Kaur</Typography>
                <Typography>9234234223</Typography>
              </AccordionDetails>
            </CustomAccordion>

            <CustomAccordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Caretaker
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Suhani Kaur</Typography>
                <Typography>9234234223</Typography>
              </AccordionDetails>
            </CustomAccordion>
          </Box>
        </Box>

        {/* <Box>Footer</Box> */}
      </Box>
    </Box>
  );
}

export default Page;
