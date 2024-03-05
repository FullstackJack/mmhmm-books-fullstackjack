import { ChangeEventHandler, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { InputError } from "../InputError/InputError";
interface InputProps {
  id: string;
  name: string;
  labelText: string;
  onChange: ChangeEventHandler;
  errors?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function CustomInput({ id, name, labelText, errors, ...rest }, ref) {
    return (
      <div className="py-6 flex flex-col gap-2 ">
        <label className="text-sm font-bold" htmlFor={id}>
          {labelText}
        </label>
        <input
          ref={ref}
          className="p-2 w-full border-solid border border-black rounded"
          id={id}
          name={name}
          type="text"
          {...rest}
        />
        <InputError errors={errors} fieldName={labelText} />
      </div>
    );
  }
);
