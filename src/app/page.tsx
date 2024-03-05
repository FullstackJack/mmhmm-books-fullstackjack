"use client";

import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { CardList } from "@/components/CardList/CardList";
import { Heading } from "@/components/Heading/Heading";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import useBooks from "@/hooks/useBooks";
import { BookItem } from "@/types";
import Link from "next/link";

export default function Home() {
  const { data: books, error, removeBook, isLoading } = useBooks();

  const handleOnDelete = (id: string) => () => {
    removeBook(id);
  };

  return (
    <div className="w-full">
      <PageHeader>
        <Heading>Bookshelf</Heading>
        <Link href="/create">
          <Button>Add book</Button>
        </Link>
      </PageHeader>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error loading page</div>}
      <CardList>
        {books?.map((book: BookItem) => (
          <Card
            key={book.id}
            onDeleteClick={handleOnDelete(book.id)}
            {...book}
          />
        ))}
      </CardList>
    </div>
  );
}
