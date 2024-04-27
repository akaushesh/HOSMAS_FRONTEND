import UserIcon from "@heroicons/react/24/solid/UserIcon";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import KeyIcon from "@mui/icons-material/Key";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { SvgIcon } from "@mui/material";
import ListAltIcon from '@mui/icons-material/ListAlt';

export const items = [
  {
    title: "Profile",
    path: "/",
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Group",
    path: "/groups",
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Preferences",
    path: "/preferences",
    icon: (
      <SvgIcon fontSize="small">
        <ListAltIcon/>
      </SvgIcon>
    ),
  },
  {
    title: "Room Booking",
    path: "/room-booking",
    icon: (
      <SvgIcon fontSize="small">
        <RoomPreferencesIcon />
      </SvgIcon>
    ),
  },
  {
    title: "View Hostels",
    path: "/view-hostel",
    icon: (
      <SvgIcon fontSize="small">
        <ApartmentIcon />
      </SvgIcon>
    ),
  },
  {
    title: "FAQs",
    path: "/FAQs",
    icon: (
      <SvgIcon fontSize="small">
        <LiveHelpIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Reset Password",
    path: "/settings",
    icon: (
      <SvgIcon fontSize="small">
        <KeyIcon />
      </SvgIcon>
    ),
  },
];
