export const calendarConfig = {
    year: 2025,
    month: 12,
    specialDays: [
        {
            date: "2025-12-03",
            type: "dinner-only" as const,
            description: "Dinner only",
        },
        {
            date: "2025-12-10",
            type: "dinner-only" as const,
            description: "Dinner only",
        },
        {
            date: "2025-12-17",
            type: "closed" as const,
            description: "Closed",
        },
        {
            date: "2025-12-23",
            type: "open" as const,
            description: "Open",
        },
        {
            date: "2025-12-30",
            type: "open" as const,
            description: "Open",
        },
    ],
};
export const calendarConfig2 = {
    year: 2026,
    month: 1,
    specialDays: [
        {
            date: "2026-01-01",
            type: "closed" as const,
            description: "Closed",
        },
        {
            date: "2026-01-05",
            type: "closed" as const,
            description: "Closed",
        },
        {
            date: "2026-01-07",
            type: "closed" as const,
            description: "Closed",
        },
        {
            date: "2026-01-08",
            type: "dinner-only" as const,
            description: "Dinner only",
        },
    ],
};
