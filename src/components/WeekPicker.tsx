import { useEffect } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {
  format,
  startOfWeek,
  addDays,
  isSameDay,
  addWeeks,
  subWeeks,
  differenceInWeeks,
} from 'date-fns';
import { useDatePickerStore } from '../store/datePickerStore';

const WeekPicker = () => {
  const { selectedDate, setSelectedDate, setCurrentMonth, currentMonth } =
    useDatePickerStore();

  useEffect(() => {
    // Set the current month to the start of the current week
    setCurrentMonth(startOfWeek(new Date(), { weekStartsOn: 1 }));
    setSelectedDate(new Date());
  }, []); // This effect runs only once when the component mounts

  const changeWeekHandle = (btnType: string) => {
    const selectedMonth =
      btnType === 'prev'
        ? subWeeks(currentMonth, 1)
        : addWeeks(currentMonth, 1);

    const isPastWeek = differenceInWeeks(selectedMonth, new Date()) < 0;

    // Only allow going back to previous weeks until the current week
    if (btnType === 'prev' && isPastWeek) {
      setCurrentMonth(startOfWeek(new Date(), { weekStartsOn: 1 }));
    } else {
      setCurrentMonth(selectedMonth);
    }
  };

  const weekStart = startOfWeek(currentMonth, { weekStartsOn: 1 });

  // Create an array of dates representing the current week
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    const day = addDays(weekStart, i);
    weekDays.push(day);
  }

  const formattedWeek = format(weekStart, 'w');

  return (
    <>
      <h1 className="week-picker__title">Select date</h1>
      <div className="week-picker">
        <div className="select-week">
          <LeftOutlined
            className="select-week__icon"
            onClick={() => changeWeekHandle('prev')}
          />
          <h6 className="select-week__label">Week {formattedWeek}</h6>
          <RightOutlined
            className="select-week__icon"
            onClick={() => changeWeekHandle('next')}
          />
        </div>
        <div className="day-picker">
        {weekDays.map((day) => {
          const isPastDay = isSameDay(day, startOfWeek(new Date(), { weekStartsOn: 1 })) || day < startOfWeek(new Date(), { weekStartsOn: 1 });
          return (
            <div
              className={`day-picker__item ${
                isSameDay(day, selectedDate) ? 'selected' : ''
              } ${isPastDay ? 'past-day' : ''}`}
              key={day.toString()}
              onClick={() => !isPastDay && setSelectedDate(day)}
            >
              <h6>{format(day, 'EEE')}</h6>
              <span>{format(day, 'd')}</span>
            </div>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default WeekPicker;