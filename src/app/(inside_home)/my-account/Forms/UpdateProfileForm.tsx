"use client";

import { Formik, Form, Field } from "formik";
import ProfilePicture from "../_components/ProfilePicture";
import { Button } from "@/components/ui/button";

export default function UpdateProfileForm() {
  return (
    <div className="bg-secondary rounded-3xl p-6 w-full">
      <span className="text-lg font-semibold ">Update Account Information</span>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="flex  gap-4 mt-8 w-full max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:mt-2">
          <div className="flex flex-col gap-4 w-3/4 max-sm:order-2 max-sm:w-full">
            <div>
              <label htmlFor="first_name" className="block mb-1">
                First Name
              </label>
              <Field
                type="text"
                id="first_name"
                name="first_name"
                className="w-full rounded-md border-gray-300 px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="last_name" className="block mb-1">
                Last Name
              </label>
              <Field
                type="text"
                id="last_name"
                name="last_name"
                className="w-full rounded-md border-gray-300 px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email Address
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full rounded-md border-gray-300 px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="phone_number" className="block mb-1">
                Phone Number
              </label>
              <Field
                type="text"
                id="phone_number"
                name="phone_number"
                className="w-full rounded-md border-gray-300 px-3 py-2"
              />
            </div>
            <div className="col-span-2">
              <Button
                type="submit"
                className="bg-primary text-white w-32 rounded-md px-4 py-2 mt-4 font-bold "
              >
                Save
              </Button>
            </div>
          </div>
          <ProfilePicture />
        </Form>
      </Formik>
    </div>
  );
}
