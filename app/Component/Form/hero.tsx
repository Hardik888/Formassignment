import Image from "next/image";
import React, { useState, ChangeEvent, DragEvent, useEffect } from "react";

interface ProfilePictureUploadProps {
  onProfilePictureChange: (newPicture: string | null) => void;
}

export const ProfilePictureUpload: React.FC<ProfilePictureUploadProps> = ({
  onProfilePictureChange,
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;

        setPreview(result);
        onProfilePictureChange(result);
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
      };
      reader.readAsDataURL(file);
    }
  };

  const Remove = () => {
    setPreview(null);
    onProfilePictureChange(null);
  };

  return (
    <div className="flex mt-4">
      <div
        className="flex bg-gray-100 rounded-full p-3 cursor-pointer"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        {preview ? (
          <img
            src={preview}
            alt="Profile Preview"
            className="w-24 h-24 rounded-full"
          />
        ) : (
          <div className="flex items-stretch gap-2">
            <Image
              src="/image/camera2.png"
              alt="Logo"
              className=""
              width={20}
              height={8}
            />
            <button className="text-black text-xs font-bold">
              Drag or add Picture
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
          onClick={Remove}
          className="mt-4 bg-red-200 text-black ml-2 w-7 h-7 rounded-full"
        >
          X
        </button>
      )}
    </div>
  );
};

interface HeroProps {
  setProfilePicture: (newPicture: string | null) => void;
}

const Hero: React.FC<HeroProps> = ({ setProfilePicture }) => {
  const handlePictureChange = (newPicture: string | null) => {
    setProfilePicture(newPicture);
    console.log("new", newPicture);
  };

  return (
    <section className="mb-44 mt-20 h-max">
      <h1 className="w-full font-bold text-2xl pb-2">MyProfile</h1>
      <ProfilePictureUpload onProfilePictureChange={handlePictureChange} />
    </section>
  );
};

export default Hero;
