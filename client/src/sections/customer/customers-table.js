import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Popover,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { URL } from "config";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import CustomModal from "src/components/customModal";
import { LeaveConfirmation } from "./leave-confirmation";

export const CustomersTable = (props) => {
  const { sx, selected = [] } = props;

  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["getProfile"]);

  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const [openModal, setOpenModal] = useState(false);

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
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

    await axios(transferOwnershipConfig)
      .then(function (response) {
        queryClient.invalidateQueries(["getGroup"]);
        queryClient.invalidateQueries(["getProfile"]);
      })
      .catch(function (error) {
        // console.log(error);
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
        return getGroupResponse?.data;
      } catch (err) {
        return null;
      }
    },
    queryKey: ["getGroup"],
  });

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  let allMembers = [];
  if (group) allMembers = [group?.leader, ...group?.members];
  const isLeader = group?.leader?.rollno === user?.rollno;

  const isEmpty = allMembers.length === 0;
  const isWithGroup = allMembers.length > 1;

  return (
    <Card sx={sx}>
      <Scrollbar>
        <Box sx={{ minWidth: 350 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Roll No</TableCell>
                <TableCell>
                  {isWithGroup && (
                    <Grid container justifyContent="flex-end">
                      <LoadingButton onClick={onOpenModal} color="error">
                        Leave
                      </LoadingButton>
                    </Grid>
                  )}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allMembers.map((member, index) => {
                const isSelected = selected.includes(member.rollno);
                return (
                  <TableRow hover key={member.rollno} selected={isSelected}>
                    <TableCell>
                      <Stack alignItems="center" direction="row" spacing={2}>
                        <Typography variant="subtitle2">{member.name}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{member.rollno}</TableCell>
                    {index === 0 && (
                      <TableCell sx={{ textAlign: "right" }}>
                        <Grid container justifyContent="flex-end">
                          <Button
                            sx={{ padding: "0.1rem", borderRadius: "4rem" }}
                            variant="outlined"
                          >
                            Leader
                          </Button>
                        </Grid>
                      </TableCell>
                    )}
                    {!isLeader && index !== 0 && (
                      <TableCell sx={{ textAlign: "right" }}>&nbsp;</TableCell>
                    )}
                    {isLeader && index !== 0 && (
                      <TableCell sx={{ textAlign: "right" }}>
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
              {isEmpty && (
                <TableRow sx={{ position: "relative" }}>
                  <TableCell sx={{}}>&nbsp;</TableCell>
                  <TableCell sx={{}}>&nbsp;</TableCell>
                  <TableCell
                    sx={{
                      position: "absolute",
                      top: "0",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    No group joined
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <CustomModal open={openModal} onClose={onCloseModal}>
            <LeaveConfirmation onClose={onCloseModal} />
          </CustomModal>
        </Box>
      </Scrollbar>
    </Card>
  );
};
