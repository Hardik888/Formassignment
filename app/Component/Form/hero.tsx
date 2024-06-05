"use client";

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
        className="flex  bg-gray-200 rounded-xl p-4 cursor-pointer"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        {preview ? (
          <img
            src={preview}
            alt="Profile Preview"
            className="w-32  h-32 object-cover rounded-full"
          />
        ) : (
          <div>
            <button className=" text-gray-500">Add a profile</button>
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
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full"
        >
          Remove
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
      <h1 className="w-full font-medium text-2xl  ">My Profile</h1>
      <ProfilePictureUpload onUpload={setProfilePicture} />
    </section>
  );
};

export default Hero;
