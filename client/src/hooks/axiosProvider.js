import axios from "axios";
const { VITE_BACKEND_URL } = import.meta.env;

export const axiosGetProviders = (setTBody, setTError) => {
  axios(`${VITE_BACKEND_URL}/api/providers`)
    .then(info => {
      // console.log(info.data);
      setTBody(info.data)
    })
    .catch(err => {
      console.log(err.response.data.error);
      setTError(err.response.data.error)
    });
}

export const axiosPostProvider = (newElement) => {
  console.log("POST:", newElement)
  axios
    .post(`${VITE_BACKEND_URL}/api/provider`, newElement)
    .then((res) => {
      console.log("BUTTON ADD:", res.data);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    })
    .catch((err) => {
      // console.log(err.response.data.error);
      console.log(err.response);
    });
};