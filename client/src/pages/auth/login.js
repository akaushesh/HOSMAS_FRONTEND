import { useCallback, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, FormHelperText, Stack, TextField, Typography } from "@mui/material";
import { Layout as AuthLayout } from "src/layouts/auth/layout";
import Link from "next/link";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { URL } from "config";
import { useQueryClient } from "@tanstack/react-query";

const Page = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [method, setMethod] = useState("email");
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      setLoading(true);
      try {
        const loginURL = URL + "auth/token/";
        const data = { email: values.email, password: values.password };

        var loginConfig = {
          method: "post",
          maxBodyLength: Infinity,
          headers: {},
          data: data,
        };

        const loginResponse = await axios.post(loginURL, data, { loginConfig });
        window.sessionStorage.setItem("authenticated", "true");
        window.sessionStorage.setItem("jwt", loginResponse?.data?.access);
        window.sessionStorage.setItem("refresh", loginResponse?.data?.refresh);
        queryClient.invalidateQueries(["getProfile"]);
        router.push("/");
      } catch (err) {
        if (err?.response?.status === 401) {
          helpers.setErrors({ submit: err?.response?.data?.detail });
        } else {
          helpers.setErrors({ submit: "Something went wrong" });
        }
        helpers.setStatus({ success: false });
        helpers.setSubmitting(false);
      }
      setLoading(false);
    },
  });

  return (
    <>
      <Head>
        <title>Login | Thapar Hostel Allocation System</title>
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
              <Typography variant="h4">Login</Typography>
            </Stack>
            {method === "email" && (
              <form noValidate onSubmit={formik.handleSubmit}>
                <Stack spacing={3}>
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
                  <TextField
                    error={!!(formik.touched.password && formik.errors.password)}
                    fullWidth
                    helperText={formik.touched.password && formik.errors.password}
                    label="Password"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password}
                  />
                </Stack>
                <FormHelperText sx={{ mt: 1 }}>
                  Did not receive a password in your mail?&nbsp;
                  <Link style={{ color: "#6366E9" }} href="/auth/forgot-password">
                    Forgot Password
                  </Link>
                </FormHelperText>
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
                  Continue
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
