import { useCallback, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { URL } from "config";

export const SettingsPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) return setError("Passwords do not match");
    setError("");

    setIsLoading(true);
    const jwt = sessionStorage.getItem("jwt");
    const changePasswordConfig = {
      maxBodyLength: Infinity,
      headers: {
        Authorization: "Bearer " + jwt,
      },
    };

    const data = {
      password: password,
    };

    const url = URL + "auth/change-password/";
    console.log(url, data, changePasswordConfig);

    const changePasswordResponse = await axios.post(url, data, changePasswordConfig);
    console.log(changePasswordResponse);
    if (changePasswordResponse.status === 200) {
      setPassword("");
      setConfirmPassword("");
    } else {
      setError("Missing Data");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <Divider />
        <CardContent>
          <Stack spacing={3} sx={{ maxWidth: 400 }}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              onChange={handlePasswordChange}
              type="password"
              value={password}
            />
            <TextField
              fullWidth
              label="Password (Confirm)"
              name="confirm"
              onChange={handleConfirmPasswordChange}
              type="password"
              value={confirmPassword}
            />
            <Typography variant="body2" color="error.main">
              {error}
            </Typography>
          </Stack>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <LoadingButton loading={isLoading} variant="contained" type="submit">
            Update
          </LoadingButton>
        </CardActions>
      </Card>
    </form>
  );
};
