"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Define the form validation schema
const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email Address is Required"),
  password: Yup.string().required("Password is Required"),
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      //   validationSchema={LoginFormSchema}
      onSubmit={(values) => {
        console.log(values); // Log the form values
      }}
    >
      {({ errors, touched }) => (
        <Form className="gap-5 flex flex-col">
          <div>
            <Field
              id="email"
              name="email"
              type="email"
              className="w-full h-10 rounded-3xl px-5 outline-none"
              placeholder="Email Address"
            />
            {errors.email && touched.email && (
              <div className="text-xs text-red-500 p-2">{errors.email}</div>
            )}
          </div>
          <div>
            <Field
              id="password"
              name="password"
              type="password"
              className="w-full h-10 rounded-3xl px-5 outline-none"
              placeholder="Password"
            />
            {errors.password && touched.password && (
              <div className="text-xs text-red-500 p-2">{errors.password}</div>
            )}
          </div>
          <Link href={"/"}>
            <Button
              className="bg-primary text-center w-full rounded-3xl text-white mt-5 font-bold"
              type="submit"
            >
              Login
            </Button>
          </Link>
          <Link href={"/login/forgot-password"}>
            <div className="underline text-red-500 pl-4">Forgot Password?</div>
          </Link>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
