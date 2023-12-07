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

export const GroupsTable = (props) => {
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
    setGroupDetailsModalOpen,
    setSelectedGroup,
  } = props;

  console.log(items);

  const selectedSome = selected.length > 0 && selected.length < items.length;
  const selectedAll = items.length > 0 && selected.length === items.length;

  const handleGroupSelection = (id) => {
    setSelectedGroup(items.filter((item) => item.id == id)[0]);
    setGroupDetailsModalOpen(true);
  };

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAll}
                    indeterminate={selectedSome}
                    onChange={(event) => {
                      if (event.target.checked) {
                        onSelectAll?.();
                      } else {
                        onDeselectAll?.();
                      }
                    }}
                  />
                </TableCell>
                <TableCell>Group ID</TableCell>
                <TableCell>Leader Name</TableCell>
                <TableCell>Leader Roll No.</TableCell>
                <TableCell>Hostel</TableCell>
                <TableCell>Room Type</TableCell>
                <TableCell>Average CG</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((group) => {
                const isSelected = selected.includes(group.id);

                return (
                  <TableRow
                    hover
                    key={group.id}
                    selected={isSelected}
                    onClick={() => handleGroupSelection(group.id)}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(group.id);
                          } else {
                            onDeselectOne?.(group.id);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>{group.id}</TableCell>
                    <TableCell>
                      {/* <Stack alignItems="center" direction="row" spacing={2}> */}
                      {/* <Avatar src={group.avatar}>{getInitials(group.name)}</Avatar> */}
                      <Typography variant="subtitle2">{group?.leader?.name}</Typography>
                      {/* </Stack> */}
                    </TableCell>
                    <TableCell>{group?.leader?.rollno}</TableCell>
                    <TableCell>{group?.hostel ?? "NA"}</TableCell>
                    <TableCell>{group?.roomType ?? "NA"}</TableCell>
                    <TableCell>{group?.cg}</TableCell>
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
        // onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5]}
      />
    </Card>
  );
};

GroupsTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array,
};
