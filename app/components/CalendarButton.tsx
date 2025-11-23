import { useCalendar } from "~/context/CalendarContext";

interface CalendarDialogProps {
  scrolled: boolean;
}

export function CalendarButton({ scrolled }: CalendarDialogProps) {
  const { openCalendar } = useCalendar();

  return (
    <div
      className={`group relative inline cursor-pointer text-shadow-lg text-shadow-stone-900 px-2 py-1 transition-all
    duration-500 ${scrolled ? "text-gray-600 text-shadow-none" : "text-white"}`}
      onClick={openCalendar}
    >
      Calendar
      <span
        className={`absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${scrolled ? "bg-gray-600" : "bg-white"
          }`}
      ></span>
    </div>
  );
}
