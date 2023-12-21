/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import AnimatedDiv from "../components/AnimatedDiv";
import WeekPicker from "../components/WeekPicker";

const Laundry = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState<string | null>(null);

  const showDetailsHandle = (dayStr: string) => {
    setData(dayStr);
    setShowDetails(true);
  };

  return (
    <AnimatedDiv>
      <WeekPicker
        showDetailsHandle={showDetailsHandle} 
      />
    </AnimatedDiv>
  );
};

export default Laundry;
