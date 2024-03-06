import { BOOKS_API_URL } from "@/data/constants/books";
import { getBooks, createBook, deleteBook } from "@/data/api/books";
import { Book } from "@/types";
import useSWR, { mutate } from "swr";

export default function useBooks() {
  const { data, error, isLoading } = useSWR(BOOKS_API_URL, getBooks);

  const removeBook = async (id: string) => {
    await deleteBook(id);
    mutate(BOOKS_API_URL);
  };

  const addBook = async (bookData: Book) => {
    await createBook(bookData);
    mutate(BOOKS_API_URL, [...data, bookData]);
  };

  return {
    data: data ?? [],
    isLoading,
    addBook,
    removeBook,
    error,
  };
}
