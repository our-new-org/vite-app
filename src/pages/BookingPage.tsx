import { useParams } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Button, Card, Divider, Flex } from 'antd';
import { getDayOfWeek, formatDate, formatTime } from '../utils';
import { useFacilityStore } from '../store/facilityStore';
import { useEffect, useState } from 'react';
import FacilityInfo from '../components/FacilityInfo';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../components/ConfirmationModal';
import { useBookingStore } from '../store/bookingStore';
import AnimatedDiv from '../components/AnimatedDiv';
import { LoadingOutlined } from '@ant-design/icons';

const BookingPage = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();

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
    if (booking?.facilityId) {
      fetchFacility(Number(booking?.facilityId));
    }
  }, [user, facility]);

  useEffect(() => {
    if (!booking) navigate('/dashboard');
  }, [booking]);

  if (!facility) {
    return (
      <AnimatedDiv>
        <div
          style={{
            opacity: 0.3,
            display: 'flex',
            flexDirection: 'column',
            marginTop: '200px',
            alignItems: 'center',
          }}>
          <div>
            <LoadingOutlined
              spin
              style={{ fontSize: 80, marginBottom: '40px' }}
            />
          </div>
          Loading details...
        </div>
      </AnimatedDiv>
    );
  }

  return (
    <AnimatedDiv>
      <h1 className="page__title">{facility.name} Booking</h1>
      <div className="details-page">
        {facility && <FacilityInfo facility={facility} />}
        {booking && (
          <Card
            className="shadow booking-details-wrapper"
            key={booking.id}
            size="small"
            extra={null}>
            <div
              style={{
                display: 'flex',
                minWidth: '180px',
                gap: '5px',
                flexDirection: 'column',
                width: '100%',
              }}>
              <h4 className="booking-details-wrapper__heading">
                Booking Details
              </h4>
              <p
                style={{
                  borderBottom: '1px solid lightgrey',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                <span className="booking__label">Facility</span>{' '}
                <span>{booking.facilityName}</span>
              </p>
              <p
                style={{
                  borderBottom: '1px solid lightgrey',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                <span className="booking__label">Time</span>{' '}
                {formatTime(booking.startTime)} - {formatTime(booking.endTime)}
              </p>
              <p
                style={{
                  borderBottom: '1px solid lightgrey',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                <span className="booking__label">When</span>{' '}
                {getDayOfWeek(booking.date)} {formatDate(booking.date)}
              </p>

              <p
                style={{
                  borderBottom: '1px solid lightgrey',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                <span className="booking__label">Created: </span>
                {formatDate(String(booking.createdAt))}
              </p>
              <Divider />
              <Flex justify="end" gap={20}>
                <Button
                  type="primary"
                  style={{ width: '50%' }}
                  onClick={() =>
                    navigate(
                      `/dashboard/bookings/${bookingId}/${facility?.id}/edit`,
                    )
                  }>
                  Reschedule
                </Button>
                <Button
                  type="dashed"
                  style={{ width: '50%' }}
                  onClick={() => handleCancelBooking(booking.id)}>
                  Cancel Booking
                </Button>
              </Flex>
              <ConfirmationModal
                open={isModalVisible}
                onConfirm={() => handleConfirm(booking.id)}
                onCancel={handleCancelModal}
              />
            </div>
          </Card>
        )}
      </div>
    </AnimatedDiv>
  );
};

export default BookingPage;
