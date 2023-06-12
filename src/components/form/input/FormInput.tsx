import { FC, InputHTMLAttributes } from "react";
import "./forminput.css";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInputs: FC<FormInputProps> = ({
  name,
  label,
  onChange,
  ...others
}) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} onChange={onChange} {...others}></input>
    </div>
  );
};

export default FormInputs;
