import axios from "axios";
import { toast } from "react-toastify";
const { VITE_BACKEND_URL } = import.meta.env;

export const axiosGet = async (setTBody, setTError, type) => {
  // await axios(`${VITE_BACKEND_URL}/api/${type}`)
  await axios(`/api/${type}`)
    .then(info => {
      setTBody(info.data)
    })
    .catch(err => {
      console.log(err.response.data.error);
      setTError(err.response.data.error)
    });
}

export const axiosPost = async (newElement, type) => {
  // await axios.post(`${VITE_BACKEND_URL}/api/${type}`, newElement)
  await axios.post(`/api/${type}`, newElement)
    .then((res) => {
      console.log("BUTTON ADD:", res.data);
      setTimeout(() => {
        // window.location.reload();
        window.location.reload(true);
      }, 1000);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const axiosDelete = async (id, type) => {
  // await axios.delete(`${VITE_BACKEND_URL}/api/${type}/${id}`)
  await axios.delete(`/api/${type}/${id}`)
    .then((res) => {
      console.log("BUTTON delete:", res.data);
      // setTimeout(() => {
      //   // window.location.reload();
      //   window.location.reload(true);
      // }, 1000);
    })
    .catch((err) => {
      console.log(err.response.data.error);
    });
  // axiosGet();
  toast.success(`Proveedor ${id} eliminado`);
};