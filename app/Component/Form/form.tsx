import { useDispatch, useSelector } from "react-redux";
import {
  updateFirstName,
  updateLastName,
  updateEmail,
  updateAddress,
  resetData,
  submitFormSuccess,
} from "../../store/formslice";
import ProfilePictureUpload from "./hero";
import { useState } from "react";
import HandlePost from "@/app/Api/handlepost";

interface FormProps {
  profilePicture: string | null;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Form: React.FC<FormProps> = ({ profilePicture }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state: any) => state.form);
  const [emailError, setEmailError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        dispatch(updateFirstName(value));
        break;
      case "lastName":
        dispatch(updateLastName(value));
        break;
      case "email":
        dispatch(updateEmail(value));
        setEmailError("");
        break;
      case "address":
        dispatch(updateAddress(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      formData.firstName !== "" &&
      formData.lastName !== "" &&
      emailRegex.test(formData.email) &&
      formData.address !== "" &&
      formData.profilePicture !== ""
    ) {
      const response = await HandlePost(formData, profilePicture || "");
      if (response.status === 201) {
        setSuccessMessage("Successfully saved Remove The Image");
        dispatch(resetData());
      }
      return response;
    } else {
      if (!emailRegex.test(formData.email)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
      console.error("Form data is incomplete or invalid");
    }
  };

  const handlereset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(resetData());
    setSuccessMessage("");
  };

  return (
    <section className="flex" id="form">
      <div className="bg-white mt-0 rounded-lg">
        <form onSubmit={handleSubmit}>
          <fieldset className="flex flex-col space-y-2">
            <div className="flex flex-wrap md:flex-row">
              <div className="mr-4 mb-2 md:mb-2">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-black block mb-1"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-white border border-gray-200 h-12 text-gray-500 text-sm rounded-md block w-11/12 pl-1"
                  placeholder=""
                  required
                />
              </div>
              <div className="mr-4 mb-2 md:mb-2">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-black block mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-white border border-gray-200 h-12 text-gray-700 text-sm rounded-lg block w-11/12 pl-1"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="mb-2 md:mb-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-black block mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white border border-gray-200 text-gray-700 mb-3 text-sm rounded-lg w-11/12 block p-3.5"
                required
              />
              {emailError && (
                <p className="text-red-500 text-xs">{emailError}</p>
              )}
            </div>

            <label htmlFor="address" className="text-sm font-medium text-black">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg block w-11/12 p-2.5"
              required
            />
          </fieldset>
          <div className="absolute flex items-end gap-4 w-5/12 mt-20">
            <button
              onClick={handlereset}
              type="button"
              className="bg-gray-200 text-sm border-x-2 hover:bg-gray-700 text-black h-10 ml-auto w-24 font-semibold rounded-xl"
            >
              Reset
            </button>
            <button
              type="submit"
              className="bg-blue-500 border-x-2 text-sm hover:bg-blue-800 text-white h-10 w-24 font-semibold rounded-xl"
            >
              Save
            </button>
          </div>
        </form>
        {successMessage && (
          <div className="text-green-600 mt-4">{successMessage}</div>
        )}
      </div>
    </section>
  );
};

export default Form;
