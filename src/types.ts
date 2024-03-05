export type Book = {
  description: string;
  imageUrl: string;
  author: string;
  title: string;
};

export type BookItem = Book & {
  id: string;
};

export type BookItemList = BookItem[];
