import axios from "axios";
import { FormData } from "./formInterface";
const uri: string = process.env.endpoint1 || "";

const HandlePost = async (data: FormData) => {
  try {
    const response = await axios.post("http://localhost:3000/profile", {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      address: data.address,
      profilePicture: data.profilePicture,
    });
    console.log(response);
    return response;
  } catch (erorr) {
    console.log(erorr);
    throw erorr;
  }
};

export default HandlePost;
