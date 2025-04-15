import { PropsWithChildren } from "react";

interface SrcProps {
  src: string;
  alt: string;
}

type ImageProps = PropsWithChildren<{ image: SrcProps }>;

export function Header({ image, children }: ImageProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}
