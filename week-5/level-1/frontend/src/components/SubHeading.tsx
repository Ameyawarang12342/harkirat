interface SubHeadingProps {
    label: string;
}

export const SubHeading = ({label}: SubHeadingProps) => {
    return (
        <div className="text-lg font-semibold py-2">
            {label}
        </div>
    )
}