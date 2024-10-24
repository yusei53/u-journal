import "./input.css";

type CustomInputProps = {
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter?: () => void;
  onCompositionStart?: () => void;
  onCompositionEnd?: () => void;
};

export const CustomInput: React.FC<CustomInputProps> = ({
  id,
  placeholder,
  value,
  onChange,
  onEnter,
  onCompositionStart,
  onCompositionEnd,
}) => {
  return (
    <input
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={(e) => {
        if (e.key === "Enter" && onEnter) {
          onEnter();
        }
      }}
      onCompositionStart={onCompositionStart}
      onCompositionEnd={onCompositionEnd}
      className="custom-input"
    />
  );
};
