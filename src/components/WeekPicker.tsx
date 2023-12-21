import React, { useState } from 'react';
import {
  format,
  startOfWeek,
  addDays,
  isSameDay,
  subWeeks,
  addWeeks,
} from 'date-fns';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

type WeekPickerProps = {
  showDetailsHandle: (dayStr: Date) => void;
};

const WeekPicker: React.FC<WeekPickerProps> = ({ showDetailsHandle }) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const changeWeekHandle = (btnType: string) => {
    setCurrentMonth((prevMonth) =>
      btnType === 'prev' ? subWeeks(prevMonth, 1) : addWeeks(prevMonth, 1),
    );
  };

  const onDateClickHandle = (day: Date) => {
    setSelectedDate(day);
    showDetailsHandle(day);
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
              onClick={() => onDateClickHandle(day)}>
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
