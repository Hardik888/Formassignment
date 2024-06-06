import React, { useState, ChangeEvent, DragEvent } from "react";

interface ProfilePictureUploadProps {
  onProfilePictureChange: (newPicture: string | null) => void;
}

export const ProfilePictureUpload: React.FC<ProfilePictureUploadProps> = ({
  onProfilePictureChange,
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const compressedImage = await compressImage(file);
      setPreview(compressedImage);
      onProfilePictureChange(compressedImage);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = async (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer?.files?.[0];
    if (file) {
      const compressedImage = await compressImage(file);
      setPreview(compressedImage);
      onProfilePictureChange(compressedImage);
    }
  };

  const Remove = () => {
    setPreview(null);
    onProfilePictureChange(null);
  };

  const compressImage = async (file: File) => {
    return new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        const image = new Image();
        image.src = reader.result as string;
        image.onload = () => {
          const canvas = document.createElement("canvas");
          const MAX_WIDTH = 500;
          const MAX_HEIGHT = 500;
          let width = image.width;
          let height = image.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");
          ctx?.drawImage(image, 0, 0, width, height);
          resolve(canvas.toDataURL("image/jpeg", 0.7)); // Adjust compression quality here (0.7 means 70% quality)
        };
      };
      reader.readAsDataURL(file);
    });
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
            <img src="/image/camera2.png" alt="Logo" width={20} height={8} />
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
    console.log(newPicture);
  };

  return (
    <section className="mb-44 mt-20 h-max">
      <h1 className="w-full font-bold text-2xl pb-2">MyProfile</h1>
      <ProfilePictureUpload onProfilePictureChange={handlePictureChange} />
    </section>
  );
};

export default Hero;
