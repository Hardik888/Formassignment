"use client";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="flex  " id="form">
      <div className="bg-white mt-0 p-1 rounded-lg ">
        <form onSubmit={handleSubmit}>
          <fieldset className="flex flex-col space-y-2">
            <div className="flex flex-wrap md:flex-row">
              <div className="mr-4 mb-2 md:mb-2  ">
                <label
                  htmlFor="firstName"
                  className="text-sm p-2 font-medium text-gray-600 block mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-white border  border-gray-200 text-black text-sm rounded-lg block w-full p-3.5"
                  placeholder=""
                  required
                />
              </div>
              <div className="mr-4  mb-2 md:mb-2 ">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium p-2 text-gray-600 block mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-white border border-gray-200 text-black text-sm rounded-lg block w-full  p-3.5"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="  mb-2 md:mb-2  ">
              <label
                htmlFor="email"
                className="text-sm font-medium p-2 text-gray-600 block mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white border border-gray-200 text-black mb-3 text-sm rounded-lg w-11/12 block p-3.5"
                required
              />
            </div>

            <label
              htmlFor="address"
              className="text-sm font-medium text-gray-600"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="bg-white border border-gray-200 text-black text-sm rounded-lg block w-11/12 p-2.5"
              required
            />
          </fieldset>
          <div className="absolute flex w-2/12 mt-10">
            <button
              type="reset"
              className="bg-gray-100 text-sm border hover:bg-gray-100 text-black h-10 ml-auto w-24 font-semibold py-2.5 px-5 rounded-full"
            >
              Reset
            </button>
            <button
              type="submit"
              className="bg-sky-400 border text-sm hover:bg-gray-500 text-white ml-3 h-10 w-24 font-semibold py-2.5 px-5 rounded-full"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
