import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import {
  Box,
  Divider,
  Drawer,
  Link,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { items } from "./config";
import { SideNavItem } from "./side-nav-item";
import NextLink from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import PaidIcon from "@mui/icons-material/Paid";

export const SideNav = (props) => {
  const { open, onClose } = props;
  const pathname = usePathname();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const router = useRouter();

  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["getProfile"]);

  const handleSignOut = useCallback(() => {
    window.sessionStorage.setItem("authenticated", "false");
    window.sessionStorage.removeItem("jwt");
    window.sessionStorage.removeItem("refresh");
    router.push("/auth/login");
  }, [onClose, router]);

  const content = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
        },
        "& .simplebar-scrollbar:before": {
          background: "neutral.400",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.07)",
              borderRadius: 1,
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              p: "12px",
            }}
          >
            <Box
              component={NextLink}
              href="/"
              sx={{
                display: "inline-flex",
                height: 48,
                width: 48,
              }}
            >
              {/* <Logo /> */}
              <img alt="thapar logo" src="/assets/logos/thaparLogo.webp" />
            </Box>
            <div>
              <Typography color="inherit" variant="subtitle1">
                Hostel Allocation System
              </Typography>
            </div>
            {/* <SvgIcon fontSize="small" sx={{ color: "neutral.500" }}>
              <ChevronUpDownIcon />
            </SvgIcon> */}
          </Box>
        </Box>
        <Divider sx={{ borderColor: "neutral.700" }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3,
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
            }}
          >
            {items.map((item) => {
              if (user?.group_size_limit == 1 && item.title == "Group") return;

              const active = item.path ? pathname === item.path : false;

              return (
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                />
              );
            })}
            <SideNavItem
              icon={
                <SvgIcon fontSize="small">
                  <PaidIcon />
                </SvgIcon>
              }
              title={"Fee structure"}
              onClick={() => {
                window.open(user?.fee_structure_url, "_blank");
              }}
            />
            <SideNavItem
              icon={
                <SvgIcon fontSize="small">
                  <LogoutIcon />
                </SvgIcon>
              }
              title={"Logout"}
              onClick={handleSignOut}
            />
          </Stack>
        </Box>
        <Box marginTop="auto">
          <Divider sx={{ borderColor: "neutral.700" }} />
          <Box padding={2}>
            <Typography textAlign="center">
              Made by <Link href="https://www.ccstiet.com">Team CCS</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.800",
            color: "common.white",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.800",
          color: "common.white",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
