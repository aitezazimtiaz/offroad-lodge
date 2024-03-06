import React from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CommentForm = () => {
  return (
    <Formik
      initialValues={{ comment: "" }}
      onSubmit={(values) => {
        console.log(values); // Log the form values
      }}
    >
      {() => (
        <Form className="gap-5 flex flex-col p-4">
          <div className=" w-full flex items-center px-2 rounded-md bg-white gap-3 ">
            <Field
              id="comment"
              name="comment"
              type="text"
              className="w-full h-10 text-subheading rounded-xl px-5 outline-none"
              placeholder="Type Comment"
            />
            <Button
              className=" bg-transparent hover:bg-transparent text-primary  flex items-center justify-center cursor-pointer "
             type="submit"
            >
              Reply
            </Button>
           
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CommentForm;
