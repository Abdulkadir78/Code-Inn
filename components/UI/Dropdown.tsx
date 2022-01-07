import { DropdownProps } from "../../TS-models/models";

const Dropdown: React.FunctionComponent<DropdownProps> = ({
  options,
  onChange,
  className,
  label,
}) => {
  return (
    <div className={className}>
      <label className="block">{label}</label>

      <select
        className="border-2 outline-none w-full sm:w-64 px-3 py-3 mt-1 cursor-pointer rounded-md"
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
