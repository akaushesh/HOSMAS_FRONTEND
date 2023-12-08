import { useCallback, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, FormHelperText, Stack, TextField, Typography } from "@mui/material";
import { Layout as AuthLayout } from "src/layouts/auth/layout";
import Link from "next/link";
import axios from "axios";
import { URL } from "config";
import { LoadingButton } from "@mui/lab";

const Page = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [loading, setLoading] = useState(false);
  const [method, setMethod] = useState("password");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      password: Yup.string().min(6).max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        setLoading(true);
        const loginURL = URL + "auth/reset-password/";
        const data = { slug: slug, password: values.password };

        var resetPasswordConfig = {
          method: "post",
          maxBodyLength: Infinity,
          headers: {},
        };

        const resetPasswordResponse = await axios.post(loginURL, data, { resetPasswordConfig });
        router.push("/auth/login");
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setSubmitting(false);

        if (err.response.status == 400) helpers.setErrors({ submit: "Invalid link" });
        else helpers.setErrors({ submit: err.message });
      }
      setLoading(false);
    },
  });

  return (
    <>
      <Head>
        <title>Set New Password | Thapar Hostel Allocation System</title>
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
              <Typography variant="h4">New Password</Typography>
            </Stack>
            {method === "password" && (
              <form noValidate onSubmit={formik.handleSubmit}>
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
                {/* <FormHelperText sx={{ mt: 1 }}>
                  password has been reset&nbsp;
                  <Link style={{ color: "#6366E9" }} href="/auth/forgot-password">
                    login
                  </Link>
                </FormHelperText> */}
                {formik.errors.submit && (
                  <Typography color="error" sx={{ mt: 3 }} variant="body2">
                    {formik.errors.submit}
                  </Typography>
                )}
                <LoadingButton
                  loading={loading}
                  fullWidth
                  size="large"
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
