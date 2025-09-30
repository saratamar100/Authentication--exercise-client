import { httpPost } from "./http";

export async function login(username, password) {
  return httpPost("/login", { username, password }).then((res) => {
    if (res.token) {
      localStorage.setItem("token", res.token);
    }
    return res;
  });
}
export async function logout() {
  const token = localStorage.getItem("token");
  if (token) {
    return httpPost("logout").then((res) => {
      localStorage.removeItem("token");
      return res;
    });
  }
}
