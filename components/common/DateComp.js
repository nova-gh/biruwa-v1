import { format } from "date-fns";
import { useEffect, useState } from "react";

const DateComp = ({ date }) => {
  const [formattedDate, setFormattedDate] = useState(null);
  useEffect(() => {
    setFormattedDate(format(new Date(date), "LLL	d, yyyy"));
  }, []);

  return (
    <div className="">
      <time dateTime={date} className="text-sm leading-normal text-blue-700 ">
        {formattedDate}
      </time>
    </div>
  );
};

export default DateComp;
