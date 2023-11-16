import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { getInitials } from "src/utils/get-initials";
import { useQuery } from "@tanstack/react-query";
import { URL } from "config";
import axios from "axios";

export const CustomersTable = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = [],
  } = props;

  const selectedSome = selected.length > 0 && selected.length < items.length;
  const selectedAll = items.length > 0 && selected.length === items.length;

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

  let allMembers = [];
  if (group) allMembers = [group?.leader, ...group?.members];
  console.log(allMembers);

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 350 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Roll No</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allMembers.map((member) => {
                const isSelected = selected.includes(member.rollno);
                return (
                  <TableRow hover key={member.rollno} selected={isSelected}>
                    <TableCell>
                      <Stack alignItems="center" direction="row" spacing={2}>
                        <Typography variant="subtitle2">{member.name}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{member.rollno}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

// CustomersTable.propTypes = {
//   count: PropTypes.number,
//   items: PropTypes.array,
//   onDeselectAll: PropTypes.func,
//   onDeselectOne: PropTypes.func,
//   onPageChange: PropTypes.func,
//   onRowsPerPageChange: PropTypes.func,
//   onSelectAll: PropTypes.func,
//   onSelectOne: PropTypes.func,
//   page: PropTypes.number,
//   rowsPerPage: PropTypes.number,
//   selected: PropTypes.array,
// };
