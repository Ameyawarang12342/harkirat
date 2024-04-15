import { ChangeEvent } from "react";

interface TextareaProps {
    label: string;
    value: string;
    onChange(e: ChangeEvent<HTMLTextAreaElement>): any;
    rows?: number | undefined
}

export const TextareaBox = ({label, value, onChange}: TextareaProps) => {
    return (
        <div>
            <label 
                htmlFor="textarea" 
                className="block mb-1 text-sm font-medium text-gray-900 pt-2"
            >
                {label}
            </label>
            <textarea 
                id="textarea" 
                rows={2}
                className="block p-2.5 pt-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                value={value}
                onChange={onChange}
                placeholder="Write something about yourself"
                required
            ></textarea>

        </div>
    )
}