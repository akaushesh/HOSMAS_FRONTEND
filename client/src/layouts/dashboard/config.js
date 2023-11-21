import UserIcon from "@heroicons/react/24/solid/UserIcon";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import KeyIcon from "@mui/icons-material/Key";
import { SvgIcon } from "@mui/material";

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
        <RoomPreferencesIcon />
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
