import * as React from "react";
import { useRouter } from "next/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";

interface CleanerCardsProps {
  data: {
    id: number;
    image?: string;
    name: string;
    image_url?: string;
    photo?: string;
  }[];
  setHostel?: (hostel: number) => void;
  setPageState?: (val: number) => void;
  pageState?: number;
}

export default function CleanerCards({
  data,
  setHostel,
  setPageState,
  pageState,
}: CleanerCardsProps): React.JSX.Element {
  const router = useRouter();
  const handleClick = (path: number): void => {
    if (pageState === 0 && setHostel && setPageState) {
      setHostel(path);
      setPageState(1);
    } else {
      router.push(`/${path}`);
    }
  };

  return (
    <Stack
      sx={{
        mt: pageState === 0 ? 1 : 0,
      }}
    >
      {pageState === 1 && (
        <Button
          sx={{
            mt: 1,
            alignSelf: "flex-start",
            color: "var(--TextMain-Color)",
          }}
          startIcon={<ArrowBackIosIcon sx={{ color: "#b30000" }} />}
          disableRipple
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            setPageState && setPageState(0);
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            setHostel && setHostel(-1);
          }}
        >
          <Typography variant="body2" fontWeight={600} color="#3A3A3A">
            back to main page
          </Typography>
        </Button>
      )}

      <Paper sx={{ py: 3, px: 1, mt: 3 }} elevation={10}>
        <Box
          sx={{
            overflowY: "auto",
            px: 1.5,
            height: pageState === 1 ? "62vh" : "67vh",
            width: 1,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                sm: `repeat(auto-fill, minmax(${
                  pageState === 1 ? "180px" : "300px"
                }, 1fr))`,
                xs: `repeat(auto-fill, minmax(${
                  pageState === 1 ? "130px" : "100%"
                }, 1fr))`,
              },
              gap: 3,
              justifyItems: "center",
            }}
          >
            {data.map((el) => {
              console.log(el);
              return (
                <Box
                  key={el.id}
                  sx={{
                    width: "100%",
                    height: pageState === 0 ? "23vh" : "30vh",
                    p: 1,
                    background: `url(${
                      pageState == 0 ? el.image_url : el.photo
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    position: "relative",
                    borderRadius: 2,
                    cursor: "pointer",
                    transition: "all 0.3s",
                    backgroundColor: "#f0f0f0",
                  }}
                  onClick={() => {
                    handleClick(el.id);
                  }}
                >
                  <Typography
                    sx={{
                      bottom: 9,
                      right: 15,
                      width: "fit-content",
                      textAlign: "right",
                      position: "absolute",
                      background: "white",
                      px: 1,
                      py: 0.2,
                      ml: 2,
                      borderRadius: 1,
                    }}
                    fontWeight={700}
                    color="var(--TextMain-Color)"
                    variant="h6"
                  >
                    {el.name}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Paper>
    </Stack>
  );
}
