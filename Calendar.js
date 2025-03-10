import React from 'react';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [days, setDays] = React.useState([]);

  React.useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysArray = [];

    // Empty slots before the first day
    for (let i = 0; i < firstDayIndex; i++) {
      daysArray.push('');
    }

    // Days in the current month
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    setDays(daysArray);
  }, [currentDate]);

  const getMonthName = (monthIndex) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[monthIndex];
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="calendar-background">
      <div className="calendar-container">
        <div className="calendar-header">
          <button onClick={goToPreviousMonth}>&lt;</button>
          <span>{getMonthName(currentDate.getMonth())} {currentDate.getFullYear()}</span>
          <button onClick={goToNextMonth}>&gt;</button>
        </div>
        <div className="calendar-grid">
          <div className="calendar-day">Sun</div>
          <div className="calendar-day">Mon</div>
          <div className="calendar-day">Tue</div>
          <div className="calendar-day">Wed</div>
          <div className="calendar-day">Thu</div>
          <div className="calendar-day">Fri</div>
          <div className="calendar-day">Sat</div>
          {days.map((day, index) => (
            <div key={index} className={`calendar-date ${day === '' ? 'empty' : ''}`}>
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
