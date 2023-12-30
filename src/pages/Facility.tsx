import { useEffect } from 'react';
import AnimatedDiv from '../components/AnimatedDiv';
import 'react-day-picker/dist/style.css';
import SlotPicker from '../components/SlotPicker';
import WeekPicker from '../components/WeekPicker';
import { useParams } from 'react-router-dom';
import { useFacilityStore } from '../store/facilityStore';
import { Button } from 'antd';
import { useDatePickerStore } from '../store/datePickerStore';
import useBooking from '../hooks/useBooking'; // Import your custom hook

const Facility = () => {
  const { id } = useParams();
  const { fetchFacility, facility } = useFacilityStore();
  const { selectedSlot } = useDatePickerStore();
  const { handleBooking } = useBooking();

  useEffect(() => {
    if (id) fetchFacility(Number(id));
  }, [id, fetchFacility]);

  if (!facility) {
    return <div>Loading facility data...</div>;
  }

  return (
    <AnimatedDiv>
      <div className="image-container">
        <img
          src={facility.image}
          alt={facility.name}
          className="facility__image"
        />
      </div>
      <WeekPicker />
      <SlotPicker />
      <div style={{ padding: '20px' }}>
        <Button
          disabled={!selectedSlot}
          type="primary"
          className="shadow"
          block
          size="large"
          onClick={handleBooking}>
          Book Slot
        </Button>
      </div>
    </AnimatedDiv>
  );
};

export default Facility;
