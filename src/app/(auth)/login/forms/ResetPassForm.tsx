"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Define the form validation schema
const ResetPassFormSchema = Yup.object().shape({
  password: Yup.string().required("Password is Required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Password is Required"),
});
const ResetPassForm = () => {
  return (
    <Formik
      initialValues={{ password: "", confirm_password: "" }}
      //   validationSchema={ResetPassFormSchema}
      onSubmit={(values) => {
        console.log(values); // Log the form values
      }}
    >
      {({ errors, touched }) => (
        <Form className="gap-5 flex flex-col">
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
          <div>
            <Field
              id="confirm_password"
              name="confirm_password"
              type="password"
              className="w-full h-10 rounded-3xl px-5 outline-none"
              placeholder="Password"
            />
            {errors.confirm_password && touched.confirm_password && (
              <div className="text-xs text-red-500 p-2">
                {errors.confirm_password}
              </div>
            )}
          </div>

          <Link href={"/login"}>
            <Button
              className="bg-primary text-center w-full rounded-3xl text-white mt-5 font-bold"
              type="submit"
            >
              Confirm
            </Button>
          </Link>
        </Form>
      )}
    </Formik>
  );
};

export default ResetPassForm;
