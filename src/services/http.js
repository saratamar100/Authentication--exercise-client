import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
const httpGet = (url) => {
  return apiClient
    .get(url)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

const httpPost = (url, body) => {
  return apiClient
    .post(url, body)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

export { httpGet, httpPost };
