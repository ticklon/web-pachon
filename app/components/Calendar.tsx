
import React from 'react';

interface SpecialDay {
  date: string; // "YYYY-MM-DD"
  type: 'dinner-only' | 'closed' | 'event';
  description: string;
}

interface CalendarProps {
  year: number;
  month: number; // 1-12
  specialDays?: SpecialDay[];
}

const Calendar: React.FC<CalendarProps> = ({ year, month, specialDays = [] }) => {
  const monthIndex = month - 1;
  const today = new Date();

  const specialDaysMap = new Map(specialDays.map(d => [d.date, d]));

  // 定休日の基本ルール
  const isRegularClosedDay = (date: Date): boolean => {
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();
    // 毎週月曜日
    if (dayOfWeek === 1) return true;
    // 第1・第3火曜日
    if (dayOfWeek === 2 && (dayOfMonth >= 1 && dayOfMonth <= 7 || dayOfMonth >= 15 && dayOfMonth <= 21)) {
      return true;
    }
    return false;
  };

  const getSpecialDay = (date: Date) => {
    const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    return specialDaysMap.get(dateString);
  };

  const renderCalendar = () => {
    const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();
    const lastDateOfMonth = new Date(year, monthIndex + 1, 0).getDate();

    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      const date = new Date(year, monthIndex, i);
      const dayOfWeek = date.getDay();
      const specialDay = getSpecialDay(date);

      const classNames = ['day'];
      let isClosed = isRegularClosedDay(date);

      if (specialDay) {
        if (specialDay.type === 'closed') {
          isClosed = true;
        } else if (specialDay.type === 'dinner-only') {
          isClosed = false; // ディナーのみ営業日は休業日ではない
          classNames.push('dinner-only');
        } else if (specialDay.type === 'event') {
          classNames.push('event');
        }
      }

      if (year === today.getFullYear() && monthIndex === today.getMonth() && i === today.getDate()) {
        classNames.push('today');
      }
      if (dayOfWeek === 0) classNames.push('sunday');
      if (dayOfWeek === 6) classNames.push('saturday');
      
      if (isClosed) {
        classNames.push('closed');
      }

      days.push(
        <div key={i} className={classNames.join(' ')} title={specialDay?.description}>
          {i}
          {specialDay?.type === 'event' && <div className="event-dot"></div>}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="calendar-widget">
      <div className="calendar-header">
        <h2>{`${year}年 ${month}月`}</h2>
      </div>
      <div className="calendar-grid weekdays">
        <div className="weekday">Sun</div>
        <div className="weekday">Mon</div>
        <div className="weekday">Tue</div>
        <div className="weekday">Wed</div>
        <div className="weekday">Thu</div>
        <div className="weekday">Fri</div>
        <div className="weekday">Sat</div>
      </div>
      <div className="calendar-grid" id="calendar-days">
        {renderCalendar()}
      </div>
      <div className="legend">
        <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#c0a062' }}></div>
            定休日
        </div>
        <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#fcf8f0' }}></div>
            ディナーのみ営業
        </div>
      </div>
    </div>
  );
};

export default Calendar;
