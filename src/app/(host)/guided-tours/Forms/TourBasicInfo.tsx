"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Define the form validation schema
const TourInfoFormSchema = Yup.object().shape({
  title: Yup.string()

    .required("Tour Title is Required"),
  duration_tour: Yup.string().required("Duration is Required"),
  start_location: Yup.string().required("Start Location is Required"),
  start_time: Yup.string().required("Field is Required"),
  cost: Yup.string().required("Cost is Required"),
  people_count: Yup.string().required("Field is Required"),

  description: Yup.string().required("Description is Required"),
});

const TourInfoForm = () => {
  return (
    <Formik
      initialValues={{
        title: "",
        duration_tour: "",
        start_location: "",
        start_time: "",
        cost: "",
        people_count: "",

        description: "",
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
              id="duration_tour"
              name="duration_tour"
              type="text"
              className="w-full h-12 rounded-xl px-5 outline-none"
              placeholder="Duration of tour"
            />
            {errors.duration_tour && touched.duration_tour && (
              <div className="text-xs text-red-500 p-2">
                {errors.duration_tour}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 max-sm:flex-col">
            <Field
              id="start_location"
              name="start_location"
              type="text"
              className="w-full h-12 rounded-xl px-5 outline-none"
              placeholder="Enter start location"
            />
            {errors.start_location && touched.start_location && (
              <div className="text-xs text-red-500 p-2">
                {errors.start_location}
              </div>
            )}

            <Field
              id="start_time"
              name="start_time"
              type="time"
              className="w-full h-12 rounded-xl px-5 outline-none"
              placeholder="Start Time"
            />
            {errors.start_time && touched.start_time && (
              <div className="text-xs text-red-500 p-2">
                {errors.start_time}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 max-sm:flex-col">
            <Field
              id="cost"
              name="cost"
              type="text"
              className="w-full h-12 rounded-xl px-5 outline-none"
              placeholder="Enter Cost"
            />
            {errors.cost && touched.cost && (
              <div className="text-xs text-red-500 p-2">{errors.cost}</div>
            )}

            <Field
              id="people_count"
              name="people_count"
              type="number"
              className="w-full h-12 rounded-xl px-5 outline-none"
              placeholder="Number of people"
            />
            {errors.people_count && touched.people_count && (
              <div className="text-xs text-red-500 p-2">
                {errors.people_count}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 pl-5">
            <span className="text-heading">Group</span>

            <RadioGroup defaultValue="public">
              <div className="flex items-center gap-4">
                <div className="flex gap-2 items-center">
                  <span className="text-subheading">Public</span>

                  <RadioGroupItem value="public" id="public" />
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-subheading">Private</span>

                  <RadioGroupItem value="private" id="private" />
                </div>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Field
              as="textarea"
              id="description"
              name="description"
              type="text"
              className="w-full h-32 rounded-xl p-5 outline-none"
              placeholder="Description"
            />
            {errors.description && touched.description && (
              <div className="text-xs text-red-500 p-2">
                {errors.description}
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TourInfoForm;
