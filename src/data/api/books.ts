import { BOOKS_API_URL } from "@/constants/books";
import { Book } from "@/types";

export async function createBook(data: Book) {
  const response = await fetch(BOOKS_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${btoa("kylebedell:")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function deleteBook(id: string) {
  const response = await fetch(`${BOOKS_API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Basic ${btoa("kylebedell:")}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

export async function getBooks() {
  const response = await fetch(BOOKS_API_URL, {
    headers: {
      Authorization: `Basic ${btoa("kylebedell:")}`,
    },
  });
  return response.json();
}
