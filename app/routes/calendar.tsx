import Calendar from "~/components/Calendar";
import { FloatingCTA } from "./home";

import { calendarConfig } from "~/config/calendar";

export default function CalendarPage() {
  const { year, month, specialDays } = calendarConfig;

  return (
    <>
      <div
        style={{
          paddingTop: "100px",
          paddingBottom: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="text-2xl font-bold mb-4">営業日カレンダー</h1>
        <Calendar year={year} month={month} specialDays={specialDays} />
      </div>
      <FloatingCTA />
    </>
  );
}
