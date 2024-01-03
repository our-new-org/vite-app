import { Button } from 'antd';
import AnimatedDiv from '../components/AnimatedDiv';
import SlotPicker from '../components/SlotPicker';
import WeekPicker from '../components/WeekPicker';
import { useFacilityStore } from '../store/facilityStore';
import { useDatePickerStore } from '../store/datePickerStore';
import useEditBooking from '../hooks/useEditBooking';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const EditBookingPage = () => {
  const { facility, fetchFacility } = useFacilityStore();
  const { bookingId, facilityId } = useParams();

  useEffect(() => {
    if (facilityId) fetchFacility(Number(facilityId));
  }, [facilityId, fetchFacility]);

  const { handleEditBooking } = useEditBooking(bookingId);
  const { selectedSlot } = useDatePickerStore();

  if (!facility) return <div>Loading booking</div>;
  return (
    <AnimatedDiv>
      <div className="image-container">
        <img
          src={facility.image}
          alt={facility.name}
          className="facility__image"
        />
      </div>
      <WeekPicker bookingId={bookingId} />
      <SlotPicker />
      <div style={{ padding: '20px' }}>
        <Button
          disabled={!selectedSlot}
          type="primary"
          className="shadow"
          block
          size="large"
          onClick={handleEditBooking}>
          Update Slot
        </Button>
      </div>
    </AnimatedDiv>
  );
};

export default EditBookingPage;
