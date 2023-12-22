import AnimatedDiv from '../components/AnimatedDiv';
import 'react-day-picker/dist/style.css';
import SlotPicker from '../components/SlotPicker';
import WeekPicker from '../components/WeekPicker';
import { useNavigate, useParams } from 'react-router-dom';
import { useFacilityStore } from '../store/facilityStore';
import { useEffect } from 'react';
import { Button } from 'antd';
import { useAuthStore } from '../store/authStore';
import { useDatePickerStore } from '../store/DatePickerStore';
import { addDurationToDate } from '../utils';
const API_URL = import.meta.env.VITE_API_URL;

const Facility = () => {
  const { id } = useParams();
  const { user } = useAuthStore();
  const { fetchFacility, facility } = useFacilityStore();
  const { selectedDate, selectedSlot } = useDatePickerStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchFacility(Number(id));
  }, []);

  const handleBooking = async () => {
    try {
      const response = await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        body: JSON.stringify({
          userId: user?.id,
          facilityId: facility?.id,
          date: selectedDate,
          startTime: selectedSlot,
          endTime: addDurationToDate(selectedSlot!, facility!.slotDuration),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const booking = await response.json();
      console.log(booking);
      navigate('/vite-app/bookings');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <AnimatedDiv>
      <div className="image-container">
        <img
          src={facility?.image}
          alt={facility?.name}
          className="facility__image"
        />
      </div>
      {facility && (
        <>
          <WeekPicker />
          <SlotPicker />
        </>
      )}
      <Button type="primary" block size="large" onClick={handleBooking}>
        Book slot
      </Button>
    </AnimatedDiv>
  );
};

export default Facility;
