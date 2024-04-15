export const InputBox = ({label, value, onChange}) => {
    return(
        <div>
            <label 
                for="input" 
                className="block mb-2 text-sm font-medium text-gray-900"
            >
                {label}
            </label>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                type="text" 
                placeholder="Go to gym" 
                value={value} 
                onChange={onChange} 
                required
            />
        </div>
    )
}