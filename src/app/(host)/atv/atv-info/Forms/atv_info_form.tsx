"use client";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState, type ChangeEvent } from "react";

// Define the form validation schema
const ATVFormSchema = Yup.object().shape({
  title: Yup.string().required("Place Title is Required"),
  rider_age: Yup.string().required("Rider Age is Required"),
  atv_experience: Yup.string().required("Experience is Required"),
  single_passenger: Yup.string().required("Field is Required"),
  atv_description: Yup.string().required("Field is Required"),
  damage_deposit: Yup.string().required("Field is Required"),
  extra_services: Yup.string().required("Field is Required"),
  link: Yup.string().required("Link is Required"),
});

const ATVInfoForm = () => {
  const [passengers, setPassengers] = useState<string>("");

  const handleSeatChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPassengers(e.target.value);
  };
  return (
    <Formik
      initialValues={{
        title: "",
        rider_age: "",
        atv_experience: "",
        single_passenger: "",
        atv_description: "", // Added new field
        damage_deposit: "",
        extra_services: "",
        link: "",
      }}
      // validationSchema={ATVFormSchema}
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

            <select
              value={passengers}
              onChange={handleSeatChange}
              className="w-full text-subheading h-12 rounded-xl px-5 outline-none"
            >
              <option value="">Select Number of Passengers</option>
              <option value="1">1 Passenger</option>
              <option value="2">2 Passegers</option>
              <option value="3">3 Passegers</option>
              <option value="4">4 Passegers</option>
              <option value="5">5 Passegers</option>
              <option value="6">6 Passegers</option>
            </select>
            {errors.single_passenger && touched.single_passenger && (
              <div className="text-xs text-red-500 p-2">
                {errors.single_passenger}
              </div>
            )}
          </div>

          <div>
            <Field
              as="textarea"
              id="atv_description"
              name="atv_description"
              type="text"
              className="w-full h-20 rounded-xl px-5 py-2 outline-none"
              placeholder="ATV Description"
            />
            {errors.atv_description && touched.atv_description && (
              <div className="text-xs text-red-500 p-2">
                {errors.atv_description}
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
