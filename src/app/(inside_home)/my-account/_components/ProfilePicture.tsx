import CameraIcon from "@/components/icons/CameraIcon";
import Image from "next/image";
import React, { useState } from "react";

const ProfilePicture = () => {
  const [imagePreview, setImagePreview] = useState("/assets/my_account.png");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return; // Handle empty file selection gracefully
    }

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      if (reader.result) {
        setImagePreview(reader.result as string); // Cast to string as expected by Image
      } else {
        console.error("Error reading file"); // Handle potential errors
      }
    };
  };

  return (
    <div className="mt-5 flex h-[190px] w-[190px] flex-col items-center justify-center  p-5">
      <label
        htmlFor="picture"
        className="rounded-full relative flex justify-center items-center "
      >
        <Image
          src={imagePreview}
          alt="user-profile-pic"
          className="cursor-pointer rounded-full object-cover "
          height={160}
          width={160}
        />

        <div className="bg-primary p-2 flex justify-center items-center rounded-full absolute cursor-pointer -bottom-3">
          <CameraIcon />
        </div>

        <input
          type="file"
          id="picture"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default ProfilePicture;
