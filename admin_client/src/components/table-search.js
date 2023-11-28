import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import { Button, Card, InputAdornment, Stack, OutlinedInput, SvgIcon } from "@mui/material";
import { useRef } from "react";

export const TableSearch = ({ setSearchQuery, placeholder }) => {
  const searchRef = useRef();

  return (
    <Stack direction="row">
      <OutlinedInput
        inputRef={searchRef}
        fullWidth
        placeholder={placeholder}
        startAdornment={
          <InputAdornment position="start">
            <SvgIcon color="action" fontSize="small">
              <MagnifyingGlassIcon />
            </SvgIcon>
          </InputAdornment>
        }
        sx={{ maxWidth: 500 }}
      />
      <Button
        onClick={() => {
          console.log("clicked", searchRef.current.value);
          setSearchQuery(searchRef.current.value ?? "");
        }}
      >
        Submit
      </Button>
    </Stack>
  );
};
