import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

interface CalendarDialogProps {
  scrolled: boolean;
}

export function CalendarButton({ scrolled }: CalendarDialogProps) {
  let [isOpen, setIsOpen] = useState(false);

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
          <DialogPanel className="max-w-lg space-y-4 border bg-black p-12">
            <DialogTitle className="font-bold">Deactivate account</DialogTitle>
            <Description>
              This will permanently deactivate your account
            </Description>
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed.
            </p>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)}>Deactivate</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
