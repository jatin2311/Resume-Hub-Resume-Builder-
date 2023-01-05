import axios from "axios";
import { toast } from "react-toastify";
export const signup = async (d) => {
  const { email, password } = d;
  // console.log(email, password);
  try {
    const response = await axios.post("/signup", {
      email: email,
      password: password,
    });
    toast.success(response.data.msg);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.msg);
    // console.log(error.response.data.msg);
    return false;
  }
};
