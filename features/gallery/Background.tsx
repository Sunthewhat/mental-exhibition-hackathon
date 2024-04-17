import { ReactNode } from "react"

interface Props {
  children: ReactNode;
}

export default function Background({children}: Props) {
  return (
    <div
      className="relative"
    >
      <div className="relative">
        {children}
      </div>
    </div>
  )
}