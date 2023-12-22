import { addMinutes } from 'date-fns';
import Slot from './Slot';
import { Button } from 'antd';
import { useFacilityStore } from '../store/facilityStore';
import { combineDateAndTime } from '../utils';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useDatePickerStore } from '../store/DatePickerStore';
const API_URL = import.meta.env.VITE_API_URL;

interface SlotPickerProps {}

const SlotPicker: React.FC<SlotPickerProps> = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const { facility } = useFacilityStore();
  const { setSelectedSlot, selectedSlot, selectedDate } = useDatePickerStore();

  const handleSlotSelect = (slot: Date) => {
    setSelectedSlot(slot);
    console.log(slot);
  };

  const handleBooking = async () => {
    try {
      const response = await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        body: JSON.stringify({
          userId: user?.id,
          facilityId: facility?.id,
          date: selectedSlot,
          startTime: null,
          endTime: null,
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

  // Create an array of slots within the specified start and end time
  const slots: Date[] = [];
  let currentTime = combineDateAndTime(selectedDate, facility!.openingHour);
  const endTime = combineDateAndTime(selectedDate, facility!.closingHour);
  while (currentTime < endTime) {
    slots.push(currentTime);
    currentTime = addMinutes(currentTime, facility!.slotDuration);
  }

  return (
    <section className="facility">
      <h1 className="facility__title">Available Slots</h1>
      <ul className="slot-list">
        {slots?.map((slot, index) => (
          <Slot
            slot={slot}
            key={index}
            slotDuration={facility!.slotDuration}
            handleSlotSelect={handleSlotSelect}
            selectedSlot={selectedSlot}
          />
        ))}
      </ul>
      <Button type="primary" block size="large" onClick={handleBooking}>
        Book slot
      </Button>
    </section>
  );
};

export default SlotPicker;
