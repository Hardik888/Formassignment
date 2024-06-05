import Image from "next/image";
import React, { useState, ChangeEvent, DragEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfilePicture } from "../../Redux-Store/formslice";
import Form from "./form";

export const ProfilePictureUpload: React.FC<{ onRemove: () => void }> = ({
  onRemove,
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const dispatch = useDispatch();
  const profilePicture = useSelector((state: any) => state.profilePicture); // Assuming profilePicture is stored in the Redux state

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        dispatch(updateProfilePicture(result));
        setPreview(result);
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

  const handleRemove = () => {
    onRemove();
    setPreview(null);
  };

  return (
    <div className="flex mt-4 ">
      <div
        className="flex  bg-gray-100 rounded-full p-3  cursor-pointer"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        {preview ? (
          <img
            src={preview}
            alt="Profile Preview"
            className="w-24  h-24 rounded-full "
          />
        ) : (
          <div className="flex items-stretch  gap-2">
            <Image
              src="/image/camera2.png"
              alt="Logo"
              className=""
              width={20}
              height={8}
            />
            <button className=" text-black text-xs font-bold ">
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
  const handleUpload = (image: string | null) => {
    setProfilePicture(image);
  };

  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  return (
    <section className=" mb-44 mt-20 h-max">
      {" "}
      <h1 className="w-full font-bold text-2xl pb-2">MyProfile</h1>
      <ProfilePictureUpload />
    </section>
  );
};

export default Hero;
