type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const Input = ({ value, onChange, placeholder }: InputProps) => (
  <input
    className="border p-2 rounded w-full"
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);
