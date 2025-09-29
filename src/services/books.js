import { httpGet, httpPost } from "./http";
export async function getBooks() {
  return httpGet("/books");
}
export async function login(username, password) {
  return httpPost("/login", { username, password }).then((res) => {
    if (res.token) {
      localStorage.setItem("token", res.token);
    } 
    return res;
  });
}
