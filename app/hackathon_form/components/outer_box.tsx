interface Props {
    children: React.ReactNode;
}

export default function OuterBox({ children }: Props) {
    return (
        <div className="flex flex-col ml-5 mr-5 mt-[-34px] mb-[-34px] gap-10">
                {children}
        </div>
    );
}