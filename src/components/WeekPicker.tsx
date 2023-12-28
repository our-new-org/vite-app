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

  const changeWeekHandle = (btnType: string) => {
    const selectedMonth =
      btnType === 'prev'
        ? subWeeks(currentMonth, 1)
        : addWeeks(currentMonth, 1);

    const isPastWeek = differenceInWeeks(selectedMonth, new Date()) < 0;

    // Only allow going back to previous weeks until the current week
    if (btnType === 'prev' && isPastWeek) {
      setCurrentMonth(currentMonth);
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

  const formattedWeek = format(currentMonth, 'w');

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
          {weekDays.map((day) => (
            <div
              className={`day-picker__item ${
                isSameDay(day, selectedDate) ? 'selected' : ''
              }`}
              key={day.toString()}
              onClick={() => setSelectedDate(day)}
            >
              <h6>{format(day, 'EEE')}</h6>
              <span>{format(day, 'd')}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WeekPicker;