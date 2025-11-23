import React from "react";

interface SpecialDay {
  date: string; // "YYYY-MM-DD"
  type: "dinner-only" | "closed" | "event" | "open";
  description: string;
}

interface CalendarProps {
  year: number;
  month: number; // 1-12
  specialDays?: SpecialDay[];
}

const Calendar: React.FC<CalendarProps> = ({
  year,
  month,
  specialDays = [],
}) => {
  const monthIndex = month - 1;
  const today = new Date();

  const specialDaysMap = new Map(specialDays.map((d) => [d.date, d]));

  const isRegularClosedDay = (date: Date): boolean => {
    const dayOfWeek = date.getDay();
    // const dayOfMonth = date.getDate();
    if (dayOfWeek === 2) return true;
    return false;
  };
  const getSpecialDay = (date: Date) => {
    const dateString = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    return specialDaysMap.get(dateString);
  };

  const renderDays = () => {
    const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();
    const lastDateOfMonth = new Date(year, monthIndex + 1, 0).getDate();
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      const date = new Date(year, monthIndex, i);
      const dayOfWeek = date.getDay();
      const specialDay = getSpecialDay(date);
      let isClosed = isRegularClosedDay(date);
      let isDinnerOnly = false;
      let isEvent = false;
      if (specialDay) {
        if (specialDay.type === "closed") isClosed = true;
        if (specialDay.type === "dinner-only") {
          isClosed = false;
          isDinnerOnly = true;
        }
        if (specialDay.type === "event") isEvent = true;
        if (specialDay.type === "open") isClosed = false;
      }
      const isToday =
        year === today.getFullYear() &&
        monthIndex === today.getMonth() &&
        i === today.getDate();
      const dayClasses = [
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "sm:h-10",
        "h-8",
        "text-base",
        "rounded-full",
        "transition-colors",
        "duration-300",
        "relative",
        isClosed
          ? "cursor-not-allowed line-through text-gray-50 bg-gray-500"
          : "cursor-pointer hover:bg-gray-100",
        isDinnerOnly ? "border-blue-800 border bg-amber-300" : "",
      ]
        .filter(Boolean)
        .join(" ");

      days.push(
        <div key={i} className={dayClasses} title={specialDay?.description}>
          {i}
          {isEvent && (
            <div className=" absolute bottom-1 w-1.5 h-1.5 bg-[#c0a062] rounded-full"></div>
          )}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="font-sans max-w-[98vw] sm:w-[400px] mx-2.5 bg-white rounded-lg shadow-lg p-6 text-gray-800">
      <div className="text-center mb-5">
        <h2 className="text-xl font-normal m-0 text-gray-900">{`${year}年 ${month}月`}</h2>
      </div>
      <div className="grid grid-cols-7 gap-2 pb-2.5">
        <div className="text-center text-sm font-light text-red-600">Sun</div>
        <div className="text-center text-sm font-light text-gray-400">Mon</div>
        <div className="text-center text-sm font-light text-gray-400">Tue</div>
        <div className="text-center text-sm font-light text-gray-400">Wed</div>
        <div className="text-center text-sm font-light text-gray-400">Thu</div>
        <div className="text-center text-sm font-light text-gray-400">Fri</div>
        <div className="text-center text-sm font-light text-blue-400">Sat</div>
      </div>
      <div className="grid grid-cols-7 gap-2">{renderDays()}</div>
      <div className="mt-5 pt-4 border-t border-gray-100 text-sm text-gray-500">
        <div className="flex items-center mb-1">
          <div className="w-4 h-4 rounded-full mr-2 bg-gray-500"></div>
          <span>定休日</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full mr-2 border-blue-800 border bg-amber-300"></div>
          <span>ディナーのみ営業</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
