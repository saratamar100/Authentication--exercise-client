import { httpGet } from "./http";
export async function getBooks() {
  return httpGet("http://localhost:5000/api/books");
}
