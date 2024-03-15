"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Define the form validation schema
const PlaceFormSchema = Yup.object().shape({
  title: Yup.string()

    .required("Place Title is Required"),
  description: Yup.string().required("Description is Required"),
  price: Yup.string().required("Price is required"),
});

const PlaceInfoForm = () => {
  return (
    <Formik
      initialValues={{ title: "", rules: "", price: "" }}
      //   validationSchema={LoginFormSchema}
      onSubmit={(values) => {
        console.log(values); // Log the form values
      }}
    >
      {({ errors, touched }) => (
        <Form className="gap-5 flex flex-col">
          <div>
            <Field
              id="title"
              name="title"
              type="text"
              className="w-full h-12 rounded-xl px-5 outline-none"
              placeholder="Title"
            />
            {errors.title && touched.title && (
              <div className="text-xs text-red-500 p-2">{errors.title}</div>
            )}
          </div>
          <div>
            <textarea
              id="description"
              name="description"
              className="w-full h-28 rounded-xl p-4 outline-none"
              placeholder="Description"
            />
            {errors.rules && touched.rules && (
              <div className="text-xs text-red-500 p-2">{errors.rules}</div>
            )}
          </div>

          <div>
            <Field
              id="price"
              name="price"
              type="text"
              className="w-full h-12 rounded-xl px-5 outline-none"
              placeholder="Price"
            />
            {errors.price && touched.price && (
              <div className="text-xs text-red-500 p-2">{errors.price}</div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PlaceInfoForm;
