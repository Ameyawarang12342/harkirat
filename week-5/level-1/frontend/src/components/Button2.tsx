interface ButtonProps{
    label: string;
    type: "submit" | "reset" | "button" | undefined;
    onClick(): any;
}

export const Button2 = ({label, onClick, type}: ButtonProps) => {
    return (
        <div>
            <button 
                onClick={onClick} 
                className="w-24 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 me-2 mt-4 mb-2"
                type={type}
            >{label}</button>
        </div>
    )
}