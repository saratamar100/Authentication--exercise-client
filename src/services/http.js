import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
const httpGet = (url) => {
  const token = localStorage.getItem("token");
  return apiClient
    .get(url, {
      headers: { Authorization: token ? `Bearer ${token}` : "" },
    })
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

const httpPost = (url, body) => {
  const token = localStorage.getItem("token");
  return apiClient
    .post(url, body, {
      headers: { Authorization: token ? `Bearer ${token}` : "" },
    })
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

export { httpGet, httpPost };
