interface Props {
  children: React.ReactNode;
}

export default function InnerBox({ children }: Props) {
  return (
    <div className="flex flex-col gap-6 bg-[#FFFFFF] bg-opacity-70 lg:px-20 px-5 py-20 rounded-[10px] z-20">
      {children}
    </div>
  );
}
