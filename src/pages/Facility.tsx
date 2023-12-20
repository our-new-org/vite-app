import AnimatedDiv from '../components/AnimatedDiv';
import { setHours, startOfDay, setMinutes } from 'date-fns';
import 'react-day-picker/dist/style.css';
import SlotPicker from '../components/SlotPicker';
import image from '../assets/home.jpg';
//const yesterday = subDays(new Date(), 1);

const Facility = () => {
  const today = startOfDay(new Date()); // Set to midnight (00:00)
  const startTime = setHours(setMinutes(today, 0), 6); // Set to 06:00
  const endTime = setHours(setMinutes(today, 0), 22); //

  return (
    <AnimatedDiv>
      <div className="image-container">
        <img src={image} alt={'Laundry'} className="facility__image" />
      </div>
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

/**
      <DayPicker
        mode="single"
        className="rdp"
        selected={selected}
        onSelect={setSelected}
        disabled={{ from: new Date(1970, 1, 1), to: yesterday }}
      />
 */
