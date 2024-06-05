import axios from "axios";
import { FormData } from "./formInterface";
const uri: string = process.env.endpoint1 || "";

const HandlePost = async (data: FormData) => {
  try {
    const response = await axios.post(uri, data);
    console.log({
      response: response,
    });
    return response;
  } catch (erorr) {
    console.log(erorr);
    throw erorr;
  }
};

export default HandlePost;
