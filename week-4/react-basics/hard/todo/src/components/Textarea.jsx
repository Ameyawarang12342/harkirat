export const TextareaBox = ({label, value, onChange}) => {
    return (
        <div>
            <label 
                for="textarea" 
                className="block mb-2 text-sm font-medium text-gray-900"
            >
                {label}
            </label>
            <textarea 
                id="textarea" 
                rows="2" 
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                value={value}
                onChange={onChange}
                placeholder="Do upperbody for 1 hour"
                required
            ></textarea>

        </div>
    )
}