import { useState } from "react";
import AnimatedDiv from "../components/AnimatedDiv";
import WeekPicker from "../components/WeekPicker";
import { getISOWeek } from "date-fns";
const Laundry = () => {
  const [currentWeekNumber, setCurrentWeekNumber] = useState<number>(
    getISOWeek(new Date())
  );

  const handleWeekChange = (weekNumber: number) => {
    setCurrentWeekNumber(weekNumber);
  };

  return (
    <AnimatedDiv>
      <WeekPicker
        currentWeekNumber={currentWeekNumber}
        onWeekChange={handleWeekChange}
      />
    </AnimatedDiv>
  );
};

export default Laundry;
