import axios from "axios";

const httpGet = (url) => {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

const httpPost = (url, body) => {
  return axios
    .post(url, body)    
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

export { httpGet, httpPost };