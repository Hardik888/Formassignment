import axios from "axios";
import { FormData } from "./formInterface";
const uri: string = process.env.endpoint1 || "";

const HandlePost = async (data: FormData, profile: string) => {
  try {
    const response = await axios.post(
      "https://8cde-2405-201-401c-b1dc-dd8a-6652-a2a2-cc8c.ngrok-free.app/profile",
      {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        address: data.address,
        profilePicture: profile,
      }
    );
    console.log(response);
    return response;
  } catch (erorr) {
    console.log(erorr);
    throw erorr;
  }
};

export default HandlePost;
