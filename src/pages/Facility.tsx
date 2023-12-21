import AnimatedDiv from '../components/AnimatedDiv';
import 'react-day-picker/dist/style.css';
import SlotPicker from '../components/SlotPicker';
import image from '../assets/home.jpg';
import WeekPicker from '../components/WeekPicker';
import { useParams } from 'react-router-dom';
import { useFacilityStore } from '../store/facilityStore';
import { useEffect } from 'react';
import { combineDateAndTime } from '../utils';
//const yesterday = subDays(new Date(), 1);

const Facility = () => {
  const { id } = useParams();
  const { fetchFacility } = useFacilityStore();
  const facility = useFacilityStore((state) => state.facility);

  useEffect(() => {
    fetchFacility(Number(id));
  }, []);

  const showDetailsHandle = (pickedDay: Date) => {
    console.log(pickedDay);
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
            startTime={combineDateAndTime(new Date(), facility?.openingHour)}
            endTime={combineDateAndTime(new Date(), facility?.closingHour)}
          />
        </>
      )}
    </AnimatedDiv>
  );
};

export default Facility;
