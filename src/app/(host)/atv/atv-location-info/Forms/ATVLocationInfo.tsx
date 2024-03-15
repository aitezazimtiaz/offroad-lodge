"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Define the form validation schema
const PlaceDetailsFormSchema = Yup.object().shape({
  country: Yup.string()

    .required(" Country is Required"),
  street_address: Yup.string()

    .required("Address is Required"),

  town: Yup.string().required("Town is required"),
});

const ATVLocationInfo = () => {
  return (
    <Formik
      initialValues={{
        country: "",
        street_address: "",

        town: "",
      }}
      //   validationSchema={LoginFormSchema}
      onSubmit={(values) => {
        console.log(values); // Log the form values
      }}
    >
      {({ errors, touched }) => (
        <Form className="gap-5 flex flex-col">
          <div>
            <Field
              id="country"
              name="country"
              type="text"
              className="w-full h-12 rounded-xl px-5 outline-none"
              placeholder="Country/Region"
            />
            {errors.country && touched.country && (
              <div className="text-xs text-red-500 p-2">{errors.country}</div>
            )}
          </div>
          <div>
            <Field
              id="street_address"
              name="street_address"
              type="text"
              className="w-full h-12 rounded-xl px-5 outline-none"
              placeholder="Your Address"
            />
            {errors.street_address && touched.street_address && (
              <div className="text-xs text-red-500 p-2">
                {errors.street_address}
              </div>
            )}
          </div>

          <div>
            <Field
              id="town"
              name="town"
              type="text"
              className="w-full h-12 rounded-xl px-5 outline-none"
              placeholder="City/town/village"
            />
            {errors.town && touched.town && (
              <div className="text-xs text-red-500 p-2">{errors.town}</div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ATVLocationInfo;
