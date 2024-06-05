"use client";

import Image from "next/image";
import React, { useState, ChangeEvent, DragEvent } from "react";

interface ProfilePictureUploadProps {
  onUpload: (image: string | null) => void;
}

const ProfilePictureUpload: React.FC<ProfilePictureUploadProps> = ({
  onUpload,
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        onUpload(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        onUpload(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    onUpload(null);
  };

  return (
    <div className="flex mt-4 ">
      <div
        className="flex  bg-gray-200 rounded-full p-3  cursor-pointer"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        {preview ? (
          <img
            src={preview}
            alt="Profile Preview"
            className="w-10  h-10  rounded-full"
          />
        ) : (
          <div className="flex items-stretch  gap-2">
            <Image
              src="/image/camera2.png"
              alt="Logo"
              className="ml-0"
              width={20}
              height={20}
            />
            <button className=" text-black text-xs font-bold w-44">
              Drag or add your profile photo
            </button>
          </div>
        )}
      </div>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      {preview && (
        <button
          onClick={handleRemove}
          className="mt-4 bg-red-200 text-black ml-2  w-7 h-7 rounded-full"
        >
          X
        </button>
      )}
    </div>
  );
};

const Hero: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  return (
    <section className=" mb-44 mt-20 h-max">
      {" "}
      <h1 className="w-full font-bold p-2 text-3xl  ">My Profile</h1>
      <ProfilePictureUpload onUpload={setProfilePicture} />
    </section>
  );
};

export default Hero;
