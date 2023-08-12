import axios from "axios";
import { toast } from "react-toastify";

export const axiosGetEmployees = async (setTBody, setTError, type) => {
  try {
    const { data } = (await axios(`/api/${type}`))
    // console.log("GET:", data)
    setTBody(data)
  } catch (error) {
    console.log(error.response.data);
    setTError(error.response.data.error);
  }
}

export const axiosPostEmployees = async (newElement, type) => {
  try {
    const { data } = (await axios.post(`/api/${type}`, newElement))
    console.log("POST:", data)
    toast.success(data.msg);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (error) {
    console.log(error.response.data)
    toast.success(error.response.data);
  }
};

export const axiosPutEmployees = (newState, _id, type) => {
  axios.put(`/api/${type}/${_id}`, newState)
    .then((res) => {
      console.log("BUTTON edit:", res.data);
      toast.success(res.data.change);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    })
    .catch((err) => {
      console.log(err.response.data.error);
      toast.success(err.response.data.error);
    });
};

export const axiosDeleteEmployees = async (id, type) => {
  await axios.delete(`/api/${type}/${id}`)
    .then((res) => {
      console.log("BUTTON delete:", res.data);
      toast.success(res.data.message);
    })
    .catch((err) => {
      console.log(err.response.data.error);
      toast.success(err.response.data.error);
    });
};
