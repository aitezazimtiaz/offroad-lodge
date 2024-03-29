/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X } from "lucide-react";
import UploadMultiImageIcon from "./icons/UploadMultiImageIcon";

interface Image {
  file: File;
  previewUrl: string;
  isCover: boolean;
}

const UploadImages = () => {
  const [selectedImages, setSelectedImages] = useState<Image[]>([]);
  const [coverImage, setCoverImage] = useState<Image | null>(null);

  const isValidImage = (file: File): boolean => {
    // Check if the file is an image (JPEG or PNG)
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      alert("Only image files (JPEG or PNG) are allowed.");
      return false;
    }

    // Check if the file size is within the limit (10MB)
    const isSizeValid = file.size <= 10 * 1024 * 1024; // 10MB
    if (!isSizeValid) {
      alert("Maximum file size is 10MB.");
      return false;
    }

    return true;
  };

  const handleAcceptedFiles = (acceptedFiles: File[]) => {
    const filteredFiles = acceptedFiles.filter((file) => isValidImage(file));

    if (filteredFiles.length + selectedImages.length > 5) {
      alert("You can upload up to 5 images.");
      return;
    }

    const newImages: Image[] = filteredFiles.map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
      isCover: false,
    }));

    setSelectedImages([...selectedImages, ...newImages]);
  };

  const removeImage = (index: number) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);
  };

  const toggleCoverImage = (index: number) => {
    const updatedImages = [...selectedImages];
    updatedImages.forEach((image, i) => {
      image.isCover = i === index;
    });

    // Check if the current image is marked as a cover image
    const selectedImageAtIndex = updatedImages[index];

    if (selectedImageAtIndex && selectedImageAtIndex.isCover) {
      setCoverImage(selectedImageAtIndex);
    } else {
      setCoverImage(null);
    }

    setSelectedImages(updatedImages);
  };

  const renderImages = () => {
    return selectedImages.map((image, index) => (
      <div key={index} className="relative">
        <img
          src={image.previewUrl}
          alt={`Preview ${index + 1}`}
          className={`h-[150px] w-[150px] rounded border object-cover ${
            image.isCover ? "border-red-500" : "border-gray-300"
          } cursor-pointer`}
          onClick={() => toggleCoverImage(index)}
        />

        <button
          className="absolute right-2 top-2 cursor-pointer rounded-full bg-gray-300 p-1 text-xs text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          onClick={() => removeImage(index)}
        >
          <X size={12} />
        </button>
        <button
          className={`absolute bottom-2 left-1/2 w-[100px] -translate-x-1/2 transform cursor-pointer rounded-md bg-white p-1 text-xs text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
            image.isCover ? "bg-red-500 text-black" : ""
          }`}
          onClick={() => toggleCoverImage(index)}
        >
          Set as Cover
        </button>
      </div>
    ));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [".png", ".gif", ".jpeg", ".jpg"],
    },
    onDrop: handleAcceptedFiles,
    multiple: true,
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  return (
    <>
      <div className="rounded-xl  p-5">
        <div className="flex flex-col gap-3">
          <div className="mt-5 flex w-full items-center justify-center">
            <div className="dropzone w-full" {...getRootProps()}>
              <input {...getInputProps()} />
              {coverImage ? (
                // If there is a cover image, display a larger area for it
                <div className="dz-message needsclick flex w-full flex-col items-center justify-center gap-2">
                  <div className="mb-3 mt-3 flex h-[300px] w-[700px] items-center justify-center  overflow-hidden rounded-lg max-lg:w-[500px] max-sm:w-[230px]">
                    <img
                      src={coverImage.previewUrl}
                      alt={`Cover Image`}
                      className="h-full w-full] rounded "
                    />
                  </div>
                </div>
              ) : (
                // If there is no cover image, display the regular dropzone area
                <div className="dz-message needsclick flex flex-col items-center justify-center gap-2">
                  <div className="mb-3 mt-3 cursor-pointer">
                    <UploadMultiImageIcon />
                  </div>
                  <span className="text-subheading text-lg text-center">
                    Drag or upload images from your device
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="group mt-5 flex flex-wrap gap-3 space-x-3 max-sm:justify-center max-sm:items-center">
            {renderImages()}
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadImages;
