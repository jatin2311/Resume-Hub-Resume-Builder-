import axios from "axios";
import { toast } from "react-toastify";
import { useLoadingStore } from "../store/loading.store";
const setLoading = useLoadingStore.getState().setLoading;
export const signup = async (d) => {
  const { email, password } = d;
  // console.log(email, password);
  try {
    setLoading(true);
    const response = await axios.post("/signup", {
      email: email,
      password: password,
    });
    toast.success(response.data.msg);
    setLoading(false);

    return response.data;
  } catch (error) {
    setLoading(false);

    toast.error(error.response.data.msg);
    // console.log(error.response.data.msg);
    return false;
  }
};

export const signin = async (d) => {
  const { email, password } = d;
  // console.log(email, password);
  try {
    setLoading(true);

    const response = await axios.post(
      "/signin",
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    );
    // console.log(response.data);
    setLoading(false);

    toast.success(response.data.msg);
    return response.data;
  } catch (error) {
    setLoading(false);

    toast.error(error.response.data.msg);
    return false;
  }
};
