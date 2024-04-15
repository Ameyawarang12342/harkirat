import { ChangeEvent } from "react";

interface InputProps{
    label: string;
    value: string;
    placeholder: string;
    onChange(e: ChangeEvent<HTMLInputElement>): any
}

export const InputBox = ({label, value, placeholder, onChange}: InputProps) => {
    return (
        <div>
            <label 
                htmlFor="input" 
                className="block mb-1 text-sm font-medium text-gray-900"
            >
                {label}
            </label>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                type="text" 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                required
            />
        </div>
    )
}