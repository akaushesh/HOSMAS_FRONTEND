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
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { SeverityPill } from "src/components/severity-pill";
import Link from "next/link";

const statusMap = {
  pending: "warning",
  delivered: "success",
  refunded: "error",
};

export const HostelList = ({ hostels = [] }) => {
  return (
    <Grid container spacing={4}>
      {hostels.length === 0 && <Typography variant="h6">No hostels added!</Typography>}
      {hostels.map((hostel, index) => {
        return (
          <Grid item xs={6} md={4} key={index}>
            <Card>
              <Link
                href={`/manage-hostels/${hostel.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CardContent>
                  <Stack alignItems="center">
                    <Typography variant="h3">{hostel.name}</Typography>
                    {/* <Typography variant="h6">BOYS</Typography> */}
                  </Stack>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

HostelList.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object,
};
