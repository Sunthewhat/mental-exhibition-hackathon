import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  depth: string;
}

export default function Layer({ children, depth }: Props) {
  const style = `${depth}`;

  return <div className={style}>{children}</div>;
}
