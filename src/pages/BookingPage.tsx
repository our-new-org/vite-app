import { useParams } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Button, Card, Divider, Flex } from 'antd';
import { getDayOfWeek, formatDate, formatTime } from '../utils';
import { useFacilityStore } from '../store/facilityStore';
import { useEffect } from 'react';
import FacilityInfo from '../components/FacilityInfo';

const BookingPage = () => {
  const { bookingId } = useParams();
  const { user } = useAuthStore();
  const booking = user?.bookings.find(
    (booking) => booking.id === Number(bookingId),
  );

  const { fetchFacility, facility } = useFacilityStore();

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
          <Button type="dashed">Delete</Button>
        </Flex>
      </Card>
      {facility && <FacilityInfo facility={facility} />}
    </div>
  );
};

export default BookingPage;
