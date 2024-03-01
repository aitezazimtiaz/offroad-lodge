"use client";
import React from "react";
import { useFormik } from "formik";
import Image from "next/image";

import * as z from "zod";

import { useRouter } from "next/navigation";
import UploadFileButton from "@/components/upload-file-button";
import { Button } from "@/components/ui/button";
import UploadPictureIcon from "@/components/icons/UploadPictureIcon";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const imageForm = z.object({
  image: z
    .any()
    .optional()
    .refine(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

const UploadImageForm = () => {
  const formik = useFormik<z.infer<typeof imageForm>>({
    initialValues: {
      image: undefined,
    },
    // validationSchema: toFormikValidationSchema(imageForm),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const imagePreview =
    formik.values.image instanceof FileList && formik.values.image?.[0]
      ? URL.createObjectURL(formik.values.image?.[0])
      : null;

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="gap-4 flex flex-col justify-center items-center "
    >
      <div className="flex flex-col justify-center items-center gap-4 bg-white rounded-xl p-8 max-sm:p-4">
        <span className="text-titleheading text-center">
          Add your profile picture
        </span>
        <UploadFileButton
          className="flex justify-center items-center cursor-pointer w-full h-full bg-greenprimary rounded-3xl px-8 py-8"
          buttonComponent={
            imagePreview ? (
              <Image
                src={imagePreview}
                alt="Selected"
                className="rounded-full"
                width={80}
                height={80}
              />
            ) : (
              <UploadPictureIcon />
            )
          }
          inputProps={{
            accept: "image/*",
            onChange: (event) => {
              void formik.setFieldValue("image", event.currentTarget.files);
            },
          }}
        />

        <Button
          className="rounded-3xl mt-5 font-bold w-full bg-primary  text-white flex justify-center items-center"
          type="submit"
        >
          Upload
        </Button>
      </div>
    </form>
  );
};

export default UploadImageForm;
