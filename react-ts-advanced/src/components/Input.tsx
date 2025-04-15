import { ComponentPropsWithoutRef } from "react";

type InputPropsType = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ label, id, ...props }: InputPropsType) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </p>
  );
}
