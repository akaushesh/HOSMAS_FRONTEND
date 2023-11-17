import { useCallback, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import SendIcon from "@mui/icons-material/Send";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, FormHelperText, Stack, TextField, Typography } from "@mui/material";
import { useAuth } from "src/hooks/use-auth";
import { Layout as AuthLayout } from "src/layouts/auth/layout";
import axios from "axios";
import { URL } from "config";
import { LoadingButton } from "@mui/lab";

const Page = () => {
  const router = useRouter();
  const auth = useAuth();
  const [loading, setLoading] = useState(false);
  const [helperText, setHelperText] = useState("You will receive a link on this email address");
  const [method, setMethod] = useState("email");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        setLoading(true);
        console.log(values.email);
        const loginURL = URL + "auth/initiate-reset-password/";
        const data = { email: values.email };

        var initiateResetPasswordConfig = {
          method: "post",
          maxBodyLength: Infinity,
          headers: {},
        };

        const initiateResetPasswordResponse = await axios.post(loginURL, data, {
          initiateResetPasswordConfig,
        });
        console.log(initiateResetPasswordResponse);
        values.email = "";
        setHelperText("Check your email for the link!");
      } catch (err) {
        console.log(err);
        helpers.setStatus({ success: false });
        helpers.setSubmitting(false);

        if (err.response.status == 404) helpers.setErrors({ submit: "No user found" });
        else helpers.setErrors({ submit: "Something went wrong" });
      }
      setLoading(false);
    },
  });

  return (
    <>
      <Head>
        <title>Forgot Password | Thapar Hostel Management System</title>
      </Head>
      <Box
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Forgot Password</Typography>
            </Stack>
            {method === "email" && (
              <form noValidate onSubmit={formik.handleSubmit}>
                <TextField
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />

                <FormHelperText sx={{ mt: 1 }}>{helperText}</FormHelperText>
                {formik.errors.submit && (
                  <Typography color="error" sx={{ mt: 3 }} variant="body2">
                    {formik.errors.submit}
                  </Typography>
                )}
                <LoadingButton
                  fullWidth
                  size="large"
                  loading={loading}
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Send
                </LoadingButton>
              </form>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Page;
