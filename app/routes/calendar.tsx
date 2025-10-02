import Calendar from '~/components/Calendar';

export default function CalendarPage() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  // Example of passing an array
  const specialDays = [
    { date: `${year}-${String(month).padStart(2, '0')}-10`, type: 'dinner-only' as const, description: 'Dinner only' },
    { date: `${year}-${String(month).padStart(2, '0')}-20`, type: 'closed' as const, description: 'Temporary closure' },
    { date: `${year}-${String(month).padStart(2, '0')}-25`, type: 'event' as const, description: 'Special event' },
  ];

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1 className="text-2xl font-bold mb-4">営業日カレンダー</h1>
      <Calendar year={year} month={month} specialDays={specialDays} />
    </div>
  );
}
