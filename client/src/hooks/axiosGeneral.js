import axios from "axios";
import { toast } from "react-toastify";

export const axiosGet = async (setTBody, setTError, type) => {
  try {
    const { data } = (await axios(`/api/${type}`))
    console.log("GET:", data)
    setTBody(data)
  } catch (error) {
    // console.log(error.response.data);
    console.log(error);
    // setTError(error.response.data.error);
    setTError(error);
  }
}

export const axiosPost = async (newElement, type) => {
  await axios.post(`/api/${type}`, newElement)
  .then(res => {
    console.log("POST:", res.data)
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }).catch(error => console.log(error.response.data.error))
};

export const axiosDelete = async (id, type) => {
  try {
    const { data } = (await axios.delete(`/api/${type}/${id}`))
    console.log("DELETE:", data)
    toast.success(`Proveedor ${id} eliminado`);
  } catch (error) {
    // console.log(error.response.data.error);
    console.log(error);
  }
};