"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "@/core/ui/button";
import Link from "next/link";

// Define the form validation schema
const ForgetPassFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email Address is Required"),
});

const ForgotPassForm = () => {
  return (
    <Formik
      initialValues={{ email: "" }}
      //   validationSchema={ForgetPassFormSchema}
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
          <Link href={"/login/reset-password"}>
            <Button
              className="bg-primary text-center w-full rounded-3xl text-white mt-5 font-bold"
              type="submit"
            >
              Send link to reset
            </Button>
          </Link>
        </Form>
      )}
    </Formik>
  );
};

export default ForgotPassForm;
