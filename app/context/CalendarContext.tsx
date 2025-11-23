import { createContext, useContext, useState, type ReactNode } from "react";

interface CalendarContextType {
    isOpen: boolean;
    openCalendar: () => void;
    closeCalendar: () => void;
}

const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export function CalendarProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openCalendar = () => setIsOpen(true);
    const closeCalendar = () => setIsOpen(false);

    return (
        <CalendarContext.Provider value={{ isOpen, openCalendar, closeCalendar }}>
            {children}
        </CalendarContext.Provider>
    );
}

export function useCalendar() {
    const context = useContext(CalendarContext);
    if (context === undefined) {
        throw new Error("useCalendar must be used within a CalendarProvider");
    }
    return context;
}
