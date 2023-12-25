import AnimatedDiv from '../components/AnimatedDiv';
import 'react-day-picker/dist/style.css';
import SlotPicker from '../components/SlotPicker';
import WeekPicker from '../components/WeekPicker';
import { useNavigate, useParams } from 'react-router-dom';
import { useFacilityStore } from '../store/facilityStore';
import { useEffect } from 'react';
import { Button } from 'antd';
import { useAuthStore } from '../store/authStore';
import { useDatePickerStore } from '../store/datePickerStore';
import { addDurationToDate } from '../utils';
import { formatISO } from 'date-fns';
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
          facilityName: facility?.name,
          date: formatISO(selectedDate),
          startTime: formatISO(selectedSlot!),
          endTime: formatISO(
            addDurationToDate(selectedSlot!, facility!.slotDuration),
          ),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const booking = await response.json();
      console.log(booking);
      navigate('/dashboard/bookings');
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
      <div style={{ padding: '20px' }}>
        <Button
          disabled={!selectedSlot}
          type="primary"
          block
          size="large"
          onClick={handleBooking}>
          Book slot
        </Button>
      </div>
    </AnimatedDiv>
  );
};

export default Facility;
