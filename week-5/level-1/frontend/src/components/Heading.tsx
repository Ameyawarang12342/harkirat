interface HeadingProps {
    label: string;
}

export const Heading = ({label}: HeadingProps) =>{
    return (
        <div className="text-4xl font-bold pt-4 pb-2">
            {label}
        </div>
    )
}