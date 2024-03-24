import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  position?: 'relative' | 'absolute' | '';
  depth: number;
}

export default function Layer({children, position, depth} : Props) {

  const zIndex = depth < 0 ? `-z-${depth*10}` : `z-${depth*10}`;

  return (
    <div className={`${zIndex} ${position}`}>
      {children}
    </div>
  )

}