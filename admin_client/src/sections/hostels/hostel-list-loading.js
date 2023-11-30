// import { format } from 'date-fns';
import PropTypes from "prop-types";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Box,
  Button,
  Card,
  Grid,
  CardContent,
  Stack,
  Typography,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Skeleton,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { SeverityPill } from "src/components/severity-pill";
import Link from "next/link";

const statusMap = {
  pending: "warning",
  delivered: "success",
  refunded: "error",
};

export const HostelListLoading = () => {
  return (
    <Grid container spacing={4}>
      {Array.from({ length: 6 }, (_, index) => (
        <Grid item xs={6} md={4} key={index}>
          <Card>
            <Skeleton animation="wave" variant="rounded" width="auto" height={105} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
