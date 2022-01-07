import { CheckboxProps } from "../../TS-models/models";

const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  label,
  className,
  onChange,
  checked,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="cursor-pointer">{label}</label>
      <input
        checked={checked}
        onChange={onChange}
        type="checkbox"
        className="w-7 h-7 cursor-pointer mt-2 form-checkbox text-primary border-2 
        outline-none rounded-sm border-gray-300 focus:border-gray-300 checked:border-primary"
      />
    </div>
  );
};

export default Checkbox;
