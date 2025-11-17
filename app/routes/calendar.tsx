import Calendar from "~/components/Calendar";
import { FloatingCTA } from "./home";

export default function CalendarPage() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  // Example of passing an array
  const specialDays = [
    {
      date: `${year}-${String(month).padStart(2, "0")}-15`,
      type: "dinner-only" as const,
      description: "Dinner only",
    },
    {
      date: `${year}-${String(month).padStart(2, "0")}-29`,
      type: "dinner-only" as const,
      description: "Dinner only",
    },
    {
      date: `${year}-${String(month).padStart(2, "0")}-08`,
      type: "closed" as const,
      description: "Temporary closure",
    },
  ];

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
