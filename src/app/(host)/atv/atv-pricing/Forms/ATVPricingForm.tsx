"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Define the form validation schema
const ATVPriceFormSchema = Yup.object().shape({
  price: Yup.string()

    .required("Price is Required"),
  service_fee: Yup.string().required("Service Fee is Required"),
  accomodation_tax: Yup.string().required("Accomodation Tax is required"),
});

const ATVPricingForm = () => {
  return (
    <Formik
      initialValues={{ price: "", service_fee: "", accomodation_tax: "" }}
      //   validationSchema={LoginFormSchema}
      onSubmit={(values) => {
        console.log(values); // Log the form values
      }}
    >
      {({ errors, touched }) => (
        <Form className="gap-5 flex flex-col">
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
          <div>
            <Field
              id="service_fee"
              name="service_fee"
              className="w-full h-12 rounded-xl p-4 outline-none"
              placeholder="Service Fee"
            />
            {errors.service_fee && touched.service_fee && (
              <div className="text-xs text-red-500 p-2">
                {errors.service_fee}
              </div>
            )}
          </div>

          <div>
            <Field
              id="accomodation_tax"
              name="accomodation_tax"
              type="text"
              className="w-full h-12 rounded-xl px-5 outline-none"
              placeholder="Accomodation Tax"
            />
            {errors.accomodation_tax && touched.accomodation_tax && (
              <div className="text-xs text-red-500 p-2">
                {errors.accomodation_tax}
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ATVPricingForm;
