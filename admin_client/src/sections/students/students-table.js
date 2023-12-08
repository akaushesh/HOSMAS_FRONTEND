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

export const StudentsTable = (props) => {
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
    handleStudentSelection,
  } = props;

  const selectedSome = selected.length > 0 && selected.length < items.length;
  const selectedAll = items.length > 0 && selected.length === items.length;

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
                <TableCell>Roll No.</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Batch</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Current Hostel</TableCell>
                <TableCell>Current Room Type</TableCell>
                <TableCell>Preview Hostel</TableCell>
                <TableCell>Preview Room Type</TableCell>
                <TableCell>Allotted Hostel</TableCell>
                <TableCell>Allotted Room Type</TableCell>
                <TableCell>CG</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((student) => {
                const isSelected = selected.includes(student.rollno);

                return (
                  <TableRow hover key={student.rollno} selected={isSelected}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(student.rollno);
                          } else {
                            onDeselectOne?.(student.rollno);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell
                      onClick={() => handleStudentSelection(student)}
                      sx={{ textDecoration: "underline", cursor: "pointer" }}
                    >
                      {student?.rollno}
                    </TableCell>
                    <TableCell>{student?.name}</TableCell>
                    <TableCell>{student?.user?.email}</TableCell>
                    <TableCell>{student?.gender == "M" ? "Male" : "Female"}</TableCell>
                    <TableCell>{student?.batch?.name}</TableCell>
                    <TableCell>{student?.phoneno}</TableCell>
                    <TableCell>{student?.current_hostel?.hostel ?? "NA"}</TableCell>
                    <TableCell>{student?.current_hostel?.room_type ?? "NA"}</TableCell>
                    <TableCell>{student?.preview_hostel?.hostel ?? "NA"}</TableCell>
                    <TableCell>{student?.preview_hostel?.room_type ?? "NA"}</TableCell>
                    <TableCell>{student?.alloted_hostel?.hostel ?? "NA"}</TableCell>
                    <TableCell>{student?.alloted_hostel?.room_type ?? "NA"}</TableCell>
                    <TableCell>{student?.cg}</TableCell>
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
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[20]}
      />
    </Card>
  );
};

StudentsTable.propTypes = {
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
