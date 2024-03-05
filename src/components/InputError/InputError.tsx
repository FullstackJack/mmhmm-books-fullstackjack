import { FieldError } from "react-hook-form";

export function InputError({
  errors,
  fieldName,
}: {
  errors?: FieldError;
  fieldName: string;
}) {
  if (errors?.type !== "required") {
    return null;
  }
  return <p role="alert">{`${fieldName} is required.`}</p>;
}
