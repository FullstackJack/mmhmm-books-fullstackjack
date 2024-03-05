"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Heading } from "@/components/Heading/Heading";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import useBooks from "@/hooks/useBooks";
import { TextArea } from "@/components/TextArea/TextArea";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import Link from "next/link";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { useRouter } from "next/navigation";

interface IFormInput {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
}

export default function Create() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const { addBook } = useBooks();
  const router = useRouter();

  const handleOnSubmit: SubmitHandler<IFormInput> = (data) => {
    try {
      addBook(data);
      router.push("/");
    } catch (error) {
      // NOTE: Would not use an alert normally, but for a POC, it saves time.
      alert(error);
    }
  };

  return (
    <div className="w-full">
      <PageHeader>
        <Heading>Add a new book</Heading>
        <Link href="/">
          <CloseIcon />
        </Link>
      </PageHeader>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Input
          id="title"
          labelText="Title"
          errors={errors["title"]}
          {...register("title", { required: true })}
        />
        <Input
          id="author"
          labelText="Author"
          errors={errors["author"]}
          {...register("author", { required: true })}
        />
        <TextArea
          id="description"
          labelText="Description"
          errors={errors["description"]}
          {...register("description", { required: true })}
        />
        <Input
          id="imageUrl"
          labelText="Image URL"
          errors={errors["imageUrl"]}
          {...register("imageUrl", { required: true })}
        />

        <Button type="submit">Save</Button>
      </form>
    </div>
  );
}
