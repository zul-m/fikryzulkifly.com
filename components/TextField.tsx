import { TextfieldProps } from "../types";

export default function TextField({
  label,
  type,
  name,
  value,
  legend,
  placeholder,
  onChange,
  onBlur,
}: TextfieldProps) {
  return (
    <>
      <label className="font-medium">{label}</label>
      <input
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        onBlur={onBlur}
        className="w-full rounded-md border py-3 mt-2 px-[14px] text-base outline-none focus-visible:shadow-none"
      />
      <p className="pt-1.5 ms-2 text-xs">{legend}</p>
    </>
  );
}
