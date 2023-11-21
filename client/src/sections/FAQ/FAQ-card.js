import PropTypes from "prop-types";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import ArrowLeftIcon from "@heroicons/react/24/solid/ArrowLeftIcon";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SvgIcon,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { URL } from "config";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import CustomModal from "src/components/customModal";
import { AcceptRequestConfirmation } from "../customer/accept-request-confirmation";

export const OverviewLatestProducts = (props) => {
  const { sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Group Requests" />
    </Card>
  );
};
