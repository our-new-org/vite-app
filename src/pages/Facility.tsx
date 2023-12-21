import AnimatedDiv from '../components/AnimatedDiv';
import { setHours, startOfDay, setMinutes } from 'date-fns';
import 'react-day-picker/dist/style.css';
import SlotPicker from '../components/SlotPicker';
import image from '../assets/home.jpg';
import WeekPicker from '../components/WeekPicker';
import { useState } from 'react';
//const yesterday = subDays(new Date(), 1);

const Facility = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState<string | null>(null);
  const today = startOfDay(new Date()); // Set to midnight (00:00)
  const startTime = setHours(setMinutes(today, 0), 6); // Set to 06:00
  const endTime = setHours(setMinutes(today, 0), 22); //

  const showDetailsHandle = (dayStr: string) => {
    setData(dayStr);
    setShowDetails(true);
  };

  return (
    <AnimatedDiv>
      <div className="image-container">
        <img src={image} alt={'Laundry'} className="facility__image" />
      </div>
      <WeekPicker showDetailsHandle={showDetailsHandle} />
      <SlotPicker
        facilityName="Laundry"
        slotDuration={240}
        startTime={startTime}
        endTime={endTime}
      />
    </AnimatedDiv>
  );
};

export default Facility;
