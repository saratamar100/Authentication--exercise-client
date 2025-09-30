import { httpGet, httpPost } from "./http";
export async function getBooks() {
  return httpGet("/books");
}

