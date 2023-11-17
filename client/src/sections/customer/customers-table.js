import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  CircularProgress,
  IconButton,
  Popover,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getInitials } from "src/utils/get-initials";
import { useQuery } from "@tanstack/react-query";
import { URL } from "config";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { useAuth } from "src/hooks/use-auth";

export const CustomersTable = (props) => {
  const { sx, selected = [] } = props;

  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const onLeaveGroup = async () => {
    const jwt = sessionStorage.getItem("jwt");

    var leaveGroupConfig = {
      method: "patch",
      maxBodyLength: Infinity,
      url: URL + "student/group/leave/",
      headers: {
        Authorization: "Bearer " + jwt,
      },
    };

    axios(leaveGroupConfig)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onTransferOwnership = async (member) => {
    setLoading(true);

    const url = URL + "student/group/transfer/";
    const jwt = sessionStorage.getItem("jwt");
    const data = {
      rollno: member?.rollno,
    };

    const transferOwnershipConfig = {
      method: "post",
      maxBodyLength: Infinity,
      url: url,
      headers: {
        Authorization: "Bearer " + jwt,
      },
      data: data,
    };

    axios(transferOwnershipConfig)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    setLoading(false);
  };

  const {
    data: group,
    isLoading,
    error,
  } = useQuery({
    queryFn: async () => {
      try {
        const jwt = sessionStorage.getItem("jwt");
        const url = URL + "student/group/view/";
        const getGroupConfig = {
          maxBodyLength: Infinity,
          headers: { Authorization: "Bearer " + jwt },
        };

        const getGroupResponse = await axios.get(url, getGroupConfig);
        console.log(getGroupResponse);
        return getGroupResponse?.data;
      } catch (err) {
        console.log(err);
      }
    },
    queryKey: ["getGroup"],
  });

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  let allMembers = [];
  if (group) allMembers = [group?.leader, ...group?.members];
  console.log(allMembers);
  const isLeader = group?.leader?.rollno === user?.rollno;
  // allMembers = [
  //   {
  //     rollno: "222222222",
  //     name: "Aditya",
  //   },
  //   {
  //     rollno: "102103498",
  //     name: "Chinmayee",
  //   },
  // ];

  return (
    <Card sx={sx}>
      <Scrollbar>
        <Box sx={{ minWidth: 350 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ position: "relative" }}>
                <TableCell>Name</TableCell>
                <TableCell>Roll No</TableCell>
                <TableCell sx={{ padding: "0", position: "absolute", top: "0", right: "0" }}>
                  <LoadingButton onClick={onLeaveGroup} color="error">
                    Leave
                  </LoadingButton>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allMembers.map((member) => {
                const isSelected = selected.includes(member.rollno);
                return (
                  <TableRow
                    sx={{ position: "relative" }}
                    hover
                    key={member.rollno}
                    selected={isSelected}
                  >
                    <TableCell>
                      <Stack alignItems="center" direction="row" spacing={2}>
                        <Typography variant="subtitle2">{member.name}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{member.rollno}</TableCell>
                    {isLeader && user.rollno !== member.rollno && (
                      <TableCell
                        sx={{ position: "absolute", top: "0", right: "0", marginRight: "0.5rem" }}
                      >
                        <IconButton
                          sx={{ padding: "0" }}
                          aria-describedby={id}
                          onClick={handleOpenPopover}
                        >
                          <SvgIcon>
                            <MoreVertIcon />
                          </SvgIcon>
                        </IconButton>
                        <Popover
                          id={id}
                          open={open}
                          anchorEl={anchorEl}
                          onClose={handleClosePopover}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                        >
                          <LoadingButton
                            loading={loading}
                            onClick={() => onTransferOwnership(member)}
                          >
                            Make Group Leader
                          </LoadingButton>
                        </Popover>
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      {/* <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      /> */}
    </Card>
  );
};
