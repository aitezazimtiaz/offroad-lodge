"use client"
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";

const ContactFormSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is Required"),
  lastName: Yup.string().required("Last Name is Required"),
  email: Yup.string().email("Invalid email format").required("Email Address is Required"),
  phone: Yup.string().required("Phone Number is Required"),
  message: Yup.string().required("Message is Required"),
});

const ContactForm = () => {
  return (
    <div className="flex w-full flex-col ">
        
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", phone: "", message: "" }}
      validationSchema={ContactFormSchema}
      onSubmit={(values) => {
        console.log(values); 
      }}
    >

      {({ errors, touched }) => (
        
        <div className="flex flex-col gap-5 w-full p-6 bg-secondary space-x-4 max-sm:space-x-0 max-sm:gap-3 rounded-3xl">
             <h2 className="text-xl text-heading font-semibold mb-3">Contact Us</h2>

          <div>
            <Field
              id="firstName"
              name="firstName"
              type="text"
              className="w-full h-10 rounded-3xl px-5 outline-none"
              placeholder="First Name"
            />
            {errors.firstName && touched.firstName && (
              <div className="text-xs text-red-500 p-2">{errors.firstName}</div>
            )}
          </div>
          <div>
            <Field
              id="lastName"
              name="lastName"
              type="text"
              className="w-full h-10 rounded-3xl px-5 outline-none"
              placeholder="Last Name"
            />
            {errors.lastName && touched.lastName && (
              <div className="text-xs text-red-500 p-2">{errors.lastName}</div>
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
              id="phone"
              name="phone"
              type="tel"
              className="w-full h-10 rounded-3xl px-5 outline-none"
              placeholder="Phone Number"
            />
            {errors.phone && touched.phone && (
              <div className="text-xs text-red-500 p-2">{errors.phone}</div>
            )}
          </div>
          <div>
            <Field
              id="message"
              name="message"
              as="textarea"
              rows={4}
              className="w-full rounded-3xl px-5 py-3 outline-none"
              placeholder="Message"
            />
            {errors.message && touched.message && (
              <div className="text-xs text-red-500 p-2">{errors.message}</div>
            )}
          </div>
          <div className="flex  justify-center items-center  mt-5">
          <Button
            className="bg-primary text-center px-6 w-48 rounded-3xl text-white  font-bold"
            type="submit"
          >
            Submit
          </Button>
          </div>
        </div>

      )}
    </Formik>
    </div>
  );
};

export default ContactForm;
