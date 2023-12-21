import React, { useState, useEffect } from "react";
import { startOfWeek, addDays, format, isAfter } from "date-fns";
import { LeftCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons";

interface WeekPickerProps {
  currentWeekNumber: number;
  onWeekChange: (weekNumber: number) => void;
}

const WeekPicker: React.FC<WeekPickerProps> = ({
  currentWeekNumber,
  onWeekChange,
}) => {
  const [currentWeek, setCurrentWeek] = useState<Date[]>([]);
  const [displayedWeekNumber, setDisplayedWeekNumber] =
    useState<number>(currentWeekNumber);

  useEffect(() => {
    const startDate = startOfWeek(new Date(), { weekStartsOn: 1 }); // Assuming Monday is the start of the week
    const weekDays = Array.from({ length: 7 }, (_, index) =>
      addDays(startDate, index)
    );
    setCurrentWeek(weekDays);
  }, []);

  const handleNextWeek = () => {
    const nextWeekNumber = displayedWeekNumber + 1;
    const nextWeekStartDate = startOfWeek(addDays(currentWeek[0], 7), {
      weekStartsOn: 1,
    });

    if (isAfter(nextWeekStartDate, new Date())) {
      onWeekChange(nextWeekNumber);
      const nextWeekDays = Array.from({ length: 7 }, (_, index) =>
        addDays(nextWeekStartDate, index)
      );
      setCurrentWeek(nextWeekDays);
      setDisplayedWeekNumber(nextWeekNumber);
    }
  };

  const handlePrevWeek = () => {
    const prevWeekNumber = displayedWeekNumber - 1;
    onWeekChange(prevWeekNumber);

    const prevWeekStartDate = startOfWeek(addDays(currentWeek[0], -7), {
      weekStartsOn: 1,
    });
    if (isAfter(prevWeekStartDate, new Date())) {
      onWeekChange(prevWeekNumber);
      const prevWeekDays = Array.from({ length: 7 }, (_, index) =>
        addDays(prevWeekStartDate, index)
      );
      setCurrentWeek(prevWeekDays);
      setDisplayedWeekNumber(prevWeekNumber);
    }
  };

  return (
    <div className="week-calendar">
      <div className="week-calendar__content">
        <LeftCircleTwoTone
          onClick={handlePrevWeek}
          className="week-calendar__arrow-icon"
        />
        <span className="week-calendar__week-number">
          Week: {displayedWeekNumber}
        </span>
        <RightCircleTwoTone
          onClick={handleNextWeek}
          className="week-calendar__arrow-icon"
        />
      </div>

      <ul className="week-calendar__weekdays">
        {currentWeek.map((day, index) => (
          <li key={index} className="custom-li-class">
            {format(day, "eeee, MMM dd")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeekPicker;
