import { Dialog, DialogPanel } from "@headlessui/react";
import { X } from "lucide-react";
import Calendar from "~/components/Calendar";
import { calendarConfig, calendarConfig2 } from "~/config/calendar";
import { useCalendar } from "~/context/CalendarContext";

export function CalendarModal() {
    const { isOpen, closeCalendar } = useCalendar();

    return (
        <Dialog open={isOpen} onClose={closeCalendar} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center bg-gray-800/80">
                <DialogPanel className="relative space-y-4 bg-black mx-0.5 p-3 md:p-12 max-h-[85vh] overflow-x-visible overflow-y-auto">
                    <div
                        className="absolute right-2 top-2 w-11 h-11 border-2 border-white bg-red-400 rounded-full flex justify-center items-center cursor-pointer hover:bg-red-500 transition-colors"
                        onClick={closeCalendar}
                    >
                        <X className="text-white" />
                    </div>
                    <div className="flex flex-col justify-center items-center pt-6 pb-4">
                        <h1 className="text-2xl font-bold mb-4">営業日カレンダー</h1>
                        <div className="flex md:flex-row flex-col justify-center space-y-4 md:space-y-0 space-x-4 overflow-auto">
                            <Calendar
                                year={calendarConfig.year}
                                month={calendarConfig.month}
                                specialDays={calendarConfig.specialDays}
                            />
                            <Calendar
                                year={calendarConfig2.year}
                                month={calendarConfig2.month}
                                specialDays={calendarConfig2.specialDays}
                            />
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
