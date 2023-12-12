const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-app-primary focus:border-app-primary focus:z-10 sm:text-sm"


export default function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired = false,
    placeholder,
    customClass,
    options = []
}) {

    if (type === "select") {
        return (
            <div className="my-5 flex items-center" key={id}>
                <label className="text-base mr-4 w-[40%]" htmlFor={labelFor}>
                    {labelText}
                </label>
                <select
                    onChange={handleChange}
                    id={id}
                    name={name}
                    required={isRequired}
                    className={fixedInputClass + customClass}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        );
    }

    return (
        <div className="my-5">
            <label htmlFor={labelFor} className="sr-only">
                {labelText}
            </label>
            <input
                onChange={handleChange}
                value={value}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                className={fixedInputClass + customClass + " placeholder:text-base"}
                placeholder={placeholder}
            />
        </div>
    )
}