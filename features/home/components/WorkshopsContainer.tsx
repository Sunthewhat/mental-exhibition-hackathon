interface Props {
  children: React.ReactNode;
}

export default function WorkshopsContainer({children}: Props) {
  return (
    <div className="flex justify-between gap-[10px] sm:gap-[25px]">
      {children}
    </div>
  )
}