import { useParams } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Button, Card, Divider, Flex } from 'antd';
import { getDayOfWeek, formatDate, formatTime } from '../utils';
import { useFacilityStore } from '../store/facilityStore';
import { useEffect, useState } from 'react';
import FacilityInfo from '../components/FacilityInfo';
import ConfirmationModal from '../components/ConfirmationModal';
import { useBookingStore } from '../store/bookingStore';

const BookingPage = () => {
  const { bookingId } = useParams();
  const { user } = useAuthStore();
  const booking = user?.bookings.find(
    (booking) => booking.id === Number(bookingId),
  );

  const { fetchFacility, facility } = useFacilityStore();
  const { cancelBooking } = useBookingStore();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleCancelBooking = (bookingId: number) => {
    if (bookingId) {
      setModalVisible(true);
    }
  };

  const handleConfirm = (bookingId: number) => {
    if (bookingId !== undefined) {
      cancelBooking(bookingId);
    }
    setModalVisible(false);
  };

  const handleCancelModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    fetchFacility(Number(booking?.facilityId));
  }, [user, facility]);

  if (!booking) return <h1>Loading page...</h1>;
  return (
    <div style={{ padding: '20px' }}>
      <h2>{booking.facilityName} Booking</h2>
      <Card className="shadow" key={booking.id} size="small" extra={null}>
        <p>
          <span className="booking__label">When:</span>{' '}
          {getDayOfWeek(booking.date)} {formatDate(booking.date)}
        </p>
        <p>
          <span className="booking__label">Time:</span>{' '}
          {formatTime(booking.startTime)} - {formatTime(booking.endTime)}
        </p>
        <Divider />
        <Flex justify="end" gap={20}>
          <Button type="primary">Edit</Button>
          <Button type="dashed" onClick={() => handleCancelBooking(booking.id)}>
            Delete
          </Button>
        </Flex>
        <ConfirmationModal
          open={isModalVisible}
          onConfirm={() => handleConfirm(booking.id)}
          onCancel={handleCancelModal}
        />
      </Card>
      {facility && <FacilityInfo facility={facility} />}
    </div>
  );
};

export default BookingPage;
