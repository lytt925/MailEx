const fixedInputClass = "flex-1 rounded-md appearance-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-app-primary focus:border-app-primary focus:z-10 sm:text-sm"

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
    maxLength,
    options = []
}) {

    if (type === "select") {
        return (
            <div className="my-5 flex items-center gap-3 w-full">
                <div className="mb-1 w-[25%] max-w-[70px]">
                    <label className="text-base" htmlFor={labelFor}>
                        {labelText}
                    </label>
                </div>
                <select
                    onChange={handleChange}
                    id={id}
                    name={name}
                    required={isRequired}
                    className={fixedInputClass + " " + customClass}
                    value={value}
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

    if (type === "textarea") {
        return (
            <div className="my-5">
                <div className="mb-2">
                    <label className="text-base" htmlFor={labelFor}>
                        {labelText}
                    </label>
                </div>
                <textarea
                    onChange={handleChange}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    className={customClass + " p-3 w-full resize-none border border-gray-300 rounded-md shadow-sm focus:ring-app-primary focus:border-app-primary sm:text-sm"}
                    value={value}
                />
            </div>
        )
    }

    return (
        <div className="my-5 flex items-center gap-3">
            <div className="mb-1 w-[25%]">
                <label className="text-base" htmlFor={labelFor}>
                    {labelText}
                </label>
            </div>
            <input
                onChange={handleChange}
                value={value}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                className={fixedInputClass + " " + customClass + " placeholder:text-base"}
                placeholder={placeholder}
            />
        </div>
    )
}