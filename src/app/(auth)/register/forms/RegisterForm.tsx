"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import UploadImageForm from "./UploadImageForm";

import { FcGoogle } from "react-icons/fc";

// Define the form validation schema
const RegisterFormSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email Address is Required"),
  phone_number: Yup.string().required("Last Name is required"),
  password: Yup.string().required("Password is Required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Password is Required"),
});

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        password: "",
        confirm_password: "",
      }}
      //   validationSchema={RegisterFormSchema}
      onSubmit={(values) => {
        console.log(values); // Log the form values
      }}
    >
      {({ errors, touched }) => (
        <Form className="gap-5 flex w-full max-lg:flex-col max-sm:justify-center max-sm:items-center">
          <div className="flex flex-col gap-5 w-full max-lg:order-2">
            <div>
              <Field
                id="first_name"
                name="first_name"
                type="text"
                className="w-full h-10 rounded-3xl px-5 outline-none"
                placeholder="First Name"
              />
              {errors.first_name && touched.first_name && (
                <div className="text-xs text-red-500 p-2">
                  {errors.first_name}
                </div>
              )}
            </div>
            <div>
              <Field
                id="last_name"
                name="last_name"
                type="text"
                className="w-full h-10 rounded-3xl px-5 outline-none"
                placeholder="Last Name"
              />
              {errors.last_name && touched.last_name && (
                <div className="text-xs text-red-500 p-2">
                  {errors.last_name}
                </div>
              )}
            </div>
            <div>
              <Field
                id="phone_number"
                name="phone_number"
                type="text"
                className="w-full h-10 rounded-3xl px-5 outline-none"
                placeholder="Phone Number"
              />
              {errors.phone_number && touched.phone_number && (
                <div className="text-xs text-red-500 p-2">
                  {errors.phone_number}
                </div>
              )}
            </div>
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
                <div className="text-xs text-red-500 p-2">
                  {errors.password}
                </div>
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
                Continue
              </Button>
            </Link>
            <span className="text-subheading text-center">or</span>
            <Button
              type="submit"
              className=" border border-primary text-subheading flex h-10 px-10 items-center hover:bg-white justify-center gap-6 rounded-full bg-white text-black"
            >
              <FcGoogle size={25} /> Continue with Google
            </Button>
          </div>

          <div className="min-w-64 max-lg:order-1 max-lg:w-full ">
            <UploadImageForm />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
