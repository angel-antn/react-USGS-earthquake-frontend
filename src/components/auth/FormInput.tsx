interface FormInputProps {
  label: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeHolder: string;
  visible: boolean;
  colSpan?: number;
}

export const FormInput = ({
  label,
  value,
  placeHolder,
  onChange,
  visible,
  colSpan,
}: FormInputProps) => {
  return (
    <div
      className={`mt-5 text-gray-500 ${colSpan && `md:col-span-${colSpan}`}`}
    >
      <label className="ml-2" htmlFor={label}>
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id={label}
        className="ring-1 ring-slate-200 rounded-full w-full p-3 mt-1"
        type={visible ? "text" : "password"}
        placeholder={placeHolder}
      />
    </div>
  );
};
