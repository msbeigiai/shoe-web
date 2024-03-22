import { ChangeEvent } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

interface Props {
  title: string;
  options: number[];
  className: string;
  onChange: (sizeOrQty: number) => void;
  value: number;
}

const Select = ({ title, options, className, value, onChange }: Props) => {

  return (
    <div className="relative dark:text-black">
      <select
        onChange={(event: ChangeEvent<HTMLSelectElement>) => onChange(parseInt(event.target.value))}
        value={value || ""}
        className={twMerge(`w-24 appearance-none border bg-white border-gray-300 p-4 ${className}`)}
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex-center pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  )
}

export default Select