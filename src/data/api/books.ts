import { BOOKS_API_URL } from "@/data/constants/books";
import { Book } from "@/types";

const headers = {
  Authorization: `Basic ${btoa("kylebedell:")}`,
};

export async function createBook(data: Book) {
  const response = await fetch(BOOKS_API_URL, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function deleteBook(id: string) {
  const response = await fetch(`${BOOKS_API_URL}/${id}`, {
    method: "DELETE",
    headers,
  });
  return response.json();
}

export async function getBooks() {
  const response = await fetch(BOOKS_API_URL, {
    headers,
  });
  return response.json();
}
