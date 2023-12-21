import AnimatedDiv from '../components/AnimatedDiv';
import { setHours, startOfDay, setMinutes } from 'date-fns';
import 'react-day-picker/dist/style.css';
import SlotPicker from '../components/SlotPicker';
import image from '../assets/home.jpg';
import WeekPicker from '../components/WeekPicker';
import { useParams } from 'react-router-dom';
import { useFacilityStore } from '../store/facilityStore';
import { useEffect } from 'react';
//const yesterday = subDays(new Date(), 1);

const Facility = () => {
  const { id } = useParams();
  const { fetchFacility } = useFacilityStore();
  const facility = useFacilityStore((state) => state.facility);

  useEffect(() => {
    fetchFacility(Number(id));
  }, []);

  const today = startOfDay(new Date()); // Set to midnight (00:00)
  const startTime = setHours(setMinutes(today, 0), 6); // Set to 06:00
  const endTime = setHours(setMinutes(today, 0), 22); //
  console.log(startTime);
  console.log(endTime);

  const showDetailsHandle = (pickedDay: Date) => {
    console.log(pickedDay.getTime());
  };

  return (
    <AnimatedDiv>
      <div className="image-container">
        <img src={image} alt={facility?.name} className="facility__image" />
      </div>
      {facility && (
        <>
          <WeekPicker showDetailsHandle={showDetailsHandle} />
          <SlotPicker
            facilityName={facility?.name}
            slotDuration={facility?.slotDuration}
            startTime={startTime}
            endTime={endTime}
          />
        </>
      )}
    </AnimatedDiv>
  );
};

export default Facility;
