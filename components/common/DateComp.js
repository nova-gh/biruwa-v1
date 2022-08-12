import { format } from "date-fns";

const DateComp = ({ date }) => {
  return (
    <div className="">
      <time dateTime={date} className="text-sm leading-normal text-blue-700 ">
        {date && format(new Date(date), "LLL	d, yyyy")}
      </time>
    </div>
  );
};

export default DateComp;
