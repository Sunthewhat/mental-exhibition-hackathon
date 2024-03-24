interface Props {
    children: React.ReactNode;
}

export default function OuterBox({ children }: Props) {
    return (
        <div className="flex flex-col md:ml-[4%] md:mr-[4%] lg:ml-[8%] lg:mr-[8%] ml-5 mr-5 gap-10 z-10">
                {children}
        </div>
    );
}