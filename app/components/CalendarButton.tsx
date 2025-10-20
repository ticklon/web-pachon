import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import Calendar from "~/components/Calendar";

interface CalendarDialogProps {
  scrolled: boolean;
}

export function CalendarButton({ scrolled }: CalendarDialogProps) {
  let [isOpen, setIsOpen] = useState(false);

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
        className={`inline group relative hover:text-shadow-none text-shadow-lg text-shadow-stone-900 px-2 py-1
    transition-all duration-300 ${
      scrolled ? "text-gray-600 text-shadow-none" : "text-white"
    }`}
        onClick={() => setIsOpen(true)}
      >
        Calendar
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-gray-800/80">
          <DialogPanel className="space-y-4 bg-black mx-2 p-12 rounded-3xl">
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
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
