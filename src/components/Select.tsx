import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

interface Props {
  title: string;
  options: number[];
  className: string;
  defaultValue: number;
}

const Select = ({ title, options, className, defaultValue }: Props) => {

  return (
    <div className="relative dark:text-black">
      <select
        defaultValue={defaultValue || 0}
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