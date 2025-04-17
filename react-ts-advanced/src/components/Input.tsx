import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputPropsType = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputPropsType>(function Input(
  { label, id, ...props }: InputPropsType,
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} ref={ref} />
    </p>
  );
});

export default Input;
