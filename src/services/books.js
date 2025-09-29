import { httpGet } from "./http";
export async function getBooks() {
  return httpGet("/books");
}
