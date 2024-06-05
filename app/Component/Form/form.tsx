"use client";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="flex flex-wrap ml-10" id="form">
      <div className="bg-white mt-1 p-8 rounded-lg ">
        <form onSubmit={handleSubmit}>
          <fieldset className="flex flex-col space-y-2">
            <div className="flex flex-wrap md:flex-row">
              <div className="mr-4 mb-2 md:mb-2 ml-3">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-600 block mb-1"
                >
                  First Name
                </label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white border border-gray-200 text-black text-sm rounded-lg block w-11/12 p-2.5"
                  placeholder=""
                  required
                />
              </div>
              <div className="mr-4 mb-2 md:mb-2 ml-3">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-600 block mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-white border border-gray-200 text-black text-sm rounded-lg block  w-11/12 p-2.5"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="ml-3">
              <label
                htmlFor="Email"
                className="text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-gray-[#18191E] border border-gray-200 text-black mb-3 text-sm rounded-lg block w-11/12 p-2.5"
                required
              />
            </div>
            <div className="ml-3">
              <label
                htmlFor="Address"
                className="text-sm font-medium text-gray-600"
              >
                Address
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-gray-[#18191E] border border-gray-200 text-black text-sm rounded-lg block  w-11/12 p-2.5"
                required
              />
            </div>
          </fieldset>
          <div className=" absolute flex w-2/12   mt-10   ">
            {" "}
            <button
              type="submit"
              className="bg-gray-100 text-sm  border hover:bg-gray-100 text-black h-10 ml-auto w-24 font-semibold py-2.5 px-5 rounded-full"
            >
              Reset
            </button>
            <button
              type="submit"
              className=" bg-sky-400 border text-sm hover:bg-gray-500 text-white ml-3 h-10 w-24 font-semibold  py-2.5 px-5 rounded-full"
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
