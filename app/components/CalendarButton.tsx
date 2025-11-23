import { Dialog, DialogPanel } from "@headlessui/react";
import { X } from "lucide-react";
import { useState } from "react";
import Calendar from "~/components/Calendar";
import { calendarConfig, calendarConfig2 } from "~/config/calendar";

interface CalendarDialogProps {
  scrolled: boolean;
}

export function CalendarButton({ scrolled }: CalendarDialogProps) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`group relative inline cursor-pointer text-shadow-lg text-shadow-stone-900 px-2 py-1 transition-all
    duration-500 ${scrolled ? "text-gray-600 text-shadow-none" : "text-white"}`} onClick={() => setIsOpen(true)}
      >
        Calendar
        <span className={`absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${scrolled
          ? "bg-gray-600" : "bg-white"}`}></span>
      </div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center bg-gray-800/80">
          <DialogPanel className="relative space-y-4 bg-black mx-0.5 p-3 md:p-12 max-h-[85vh] overflow-x-visible overflow-y-auto">
            <div
              className="absolute right-2 top-2 w-11 h-11 border-2 border-white bg-red-400 rounded-full flex justify-center items-center cursor-pointer hover:bg-red-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X className="text-white" />
            </div>
            <div className="flex flex-col justify-center items-center pt-6 pb-4">
              <h1 className="text-2xl font-bold mb-4">営業日カレンダー</h1>
              <div className="flex md:flex-row flex-col justify-center space-y-4 md:space-y-0 space-x-4 overflow-auto">
                <Calendar year={calendarConfig.year} month={calendarConfig.month}
                  specialDays={calendarConfig.specialDays} />
                <Calendar year={calendarConfig2.year} month={calendarConfig2.month}
                  specialDays={calendarConfig2.specialDays} />
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
