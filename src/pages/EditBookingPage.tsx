import { Button } from 'antd';
import AnimatedDiv from '../components/AnimatedDiv';
import SlotPicker from '../components/SlotPicker';
import WeekPicker from '../components/WeekPicker';
import { useFacilityStore } from '../store/facilityStore';
import { useDatePickerStore } from '../store/datePickerStore';
import useEditBooking from '../hooks/useEditBooking';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const EditBookingPage = () => {
  const { facility, fetchFacility } = useFacilityStore();
  const { bookingId, facilityId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (facilityId) fetchFacility(Number(facilityId));
  }, [facilityId, fetchFacility]);

  const { handleEditBooking } = useEditBooking(bookingId);
  const { selectedSlot } = useDatePickerStore();

  if (!facility) return <div>Loading booking</div>;
  return (
    <AnimatedDiv>
      <div style={{ padding: '20px' }}>
        <WeekPicker bookingId={bookingId} />
        <SlotPicker />
        <div
          style={{
            width: '100%',
            maxWidth: '640px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginTop: '50px',
          }}>
          <Button
            disabled={!selectedSlot}
            type="primary"
            className="shadow"
            block
            size="large"
            onClick={handleEditBooking}>
            Update Slot
          </Button>
          <Button
            disabled={!selectedSlot}
            type="text"
            block
            size="large"
            onClick={() => navigate(-1)}>
            Return
          </Button>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default EditBookingPage;
