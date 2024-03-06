"use client"
import React from "react";
import { Formik,  Field } from "formik";
import { Button } from "@/components/ui/button";

const PostForm = () => {
  return (
    <>
    <div className="flex w-full flex-col ">
   
    <Formik
      initialValues={{ title: "", description: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <div className="flex flex-col gap-5 w-full p-6 bg-secondary rounded-3xl">
        <div>
        
          <Field
            id="title"
            name="title"
            type="text"
            className="w-full h-10 rounded-3xl px-5 outline-none"
            placeholder="Conversation Title"
          />
        </div>
        <div>
         
          <Field
            as="textarea"
            id="description"
            name="description"
            className="w-full h-32 rounded-3xl px-5 py-3 outline-none"
            placeholder="Description"
          />
        </div>
       </div> 
    </Formik>
   <div className="flex  justify-center items-center w-full mt-10">
    <Button
          className="flex text-center justify-center text-white rounded-3xl font-bold  px-20"
          type="submit"
        >
          Post
        </Button>
        </div>
        </div>
      
    </>
  );
};

export default PostForm;