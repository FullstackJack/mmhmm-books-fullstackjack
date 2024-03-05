import { BookItem } from "@/types";
import { IconButton } from "../IconButton/IconButton";
import { TrashIcon } from "../icons/TrashIcon";
import { MouseEventHandler } from "react";

interface CardProps extends BookItem {
  onDeleteClick: MouseEventHandler<HTMLButtonElement>;
}

export function Card({
  title,
  description,
  imageUrl,
  author,
  onDeleteClick,
}: CardProps) {
  return (
    <div className="bg-white rounded p-3 drop-shadow-2xl mb-8">
      <div className="flex flex-row gap-4">
        <div className="flex-none">
          <img
            className="object-cover"
            src={imageUrl}
            alt={`Photo of the book cover for ${title}`}
            width="125"
            height="200"
          />
        </div>
        <div className="flex flex-col grow gap-y-2.5">
          <div className="text-xl font-bold">{title}</div>
          <div className="text-xs">{author}</div>
          <div className="text-sm">{description}</div>
        </div>
        <div className="flex-none">
          <IconButton onClick={onDeleteClick}>
            <TrashIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
