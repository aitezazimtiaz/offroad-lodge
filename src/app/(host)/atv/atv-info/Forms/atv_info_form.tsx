"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Define the form validation schema
const ATVFormSchema = Yup.object().shape({
  title: Yup.string()

    .required("Place Title is Required"),
  rider_age: Yup.string().required("Rider Age is Required"),
  atv_experience: Yup.string().required("Experience is Required"),
  single_passenger: Yup.string().required("Field is Required"),
  damage_deposit: Yup.string().required("Field is Required"),
  extra_services: Yup.string().required("Field is Required"),
  link: Yup.string().required("Link is Required"),
});

const ATVInfoForm = () => {
  return (
    <Formik
      initialValues={{
        title: "",
        rider_age: "",
        atv_experience: "",
        single_passenger: "",
        damage_deposit: "",
        extra_services: "",
        link: "",
      }}
      //   validationSchema={LoginFormSchema}
      onSubmit={(values) => {
        console.log(values); // Log the form values
      }}
    >
      {({ errors, touched }) => (
        <Form className="gap-5 flex flex-col">
          <div className="flex items-center gap-4 max-sm:flex-col">
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

            <Field
              id="rider_age"
              name="rider_age"
              type="text"
              className="w-full h-12 rounded-xl px-5 outline-none"
              placeholder="Rider Age"
            />
            {errors.rider_age && touched.rider_age && (
              <div className="text-xs text-red-500 p-2">{errors.rider_age}</div>
            )}
          </div>

          <div className="flex items-center gap-4 max-sm:flex-col">
            <Field
              id="atv_experience"
              name="atv_experience"
              type="text"
              className="w-full h-12 rounded-xl px-5 outline-none"
              placeholder="ATV Experience"
            />
            {errors.atv_experience && touched.atv_experience && (
              <div className="text-xs text-red-500 p-2">
                {errors.atv_experience}
              </div>
            )}

            <Field
              id="single_passenger"
              name="single_passenger"
              type="text"
              className="w-full h-12 rounded-xl px-5 outline-none"
              placeholder="Single Passenger"
            />
            {errors.single_passenger && touched.single_passenger && (
              <div className="text-xs text-red-500 p-2">
                {errors.single_passenger}
              </div>
            )}
          </div>

          <div>
            <Field
              id="damage_deposit"
              name="damage_deposit"
              type="text"
              className="w-full h-12 rounded-xl px-5 outline-none"
              placeholder="Damage Deposit"
            />
            {errors.damage_deposit && touched.damage_deposit && (
              <div className="text-xs text-red-500 p-2">
                {errors.damage_deposit}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2 pl-5">
            <span className="text-heading">Damage Deposit Refundable?</span>

            <RadioGroup defaultValue="yes">
              <div className="flex items-center gap-4">
                <div className="flex gap-2 items-center">
                  <span className="text-subheading">Yes</span>

                  <RadioGroupItem value="yes" id="no" />
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-subheading">No</span>

                  <RadioGroupItem value="no" id="no" />
                </div>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Field
              as="textarea"
              id="extra_services"
              name="extra_services"
              type="text"
              className="w-full h-32 rounded-xl p-5 outline-none"
              placeholder="Extra Services"
            />
            {errors.extra_services && touched.extra_services && (
              <div className="text-xs text-red-500 p-2">
                {errors.extra_services}
              </div>
            )}
          </div>

          <div>
            <Field
              id="link"
              name="link"
              type="text"
              className="w-full h-12 rounded-xl px-5 outline-none"
              placeholder="Add Link"
            />
            {errors.link && touched.link && (
              <div className="text-xs text-red-500 p-2">{errors.link}</div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ATVInfoForm;
