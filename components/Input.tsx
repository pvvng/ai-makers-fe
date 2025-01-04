interface InputProps {
  htmlId: string;
  label: string;
  placeholder: string;
  type: string;
}

export default function Input({inputProps}: {inputProps: InputProps}) {
  const { htmlId, label, placeholder, type } = inputProps;
  
  return (
    <div id={`${htmlId} input`} className="w-full mb-6">
      <label
        htmlFor={htmlId}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start"
      >
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type={type}
        id={htmlId}
        placeholder={placeholder}
        name={htmlId}
      />
    </div>
  );
}
