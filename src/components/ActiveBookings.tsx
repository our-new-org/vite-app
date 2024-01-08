import { Button, Card, Flex, Popover } from 'antd';
import { describeDate, formatDate, formatTime, getDayOfWeek } from '../utils';
import { EditOutlined } from '@ant-design/icons';
import { useAuthStore } from '../store/authStore';
import { Link, useNavigate } from 'react-router-dom';
import { Booking } from '../types';
import { useBookingStore } from '../store/bookingStore';
import ConfirmationModal from './ConfirmationModal';
import { useEffect, useState } from 'react';
import { useFacilityStore } from '../store/facilityStore';

const ActiveBookings = () => {
  const { user } = useAuthStore();
  const { setFacility } = useFacilityStore();
  const navigate = useNavigate();
  const { cancelBooking } = useBookingStore();
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentId, setCurrentId] = useState<number | null>(null);

  useEffect(() => {
    if (currentId) {
      setModalVisible(true);
    }
  }, [currentId]);

  const handleConfirm = () => {
    if (currentId) {
      cancelBooking(currentId);
    }
    setModalVisible(false);
  };

  const handleCancelBooking = (bookingId: number) => {
    if (bookingId) {
      setCurrentId(bookingId);
      setModalVisible(true);
    }
  };

  const handleDetailsClick = (bookingId: number) => {
    setFacility(null);
    navigate(`/dashboard/bookings/${bookingId}`);
  };

  const handleCancelModal = () => {
    setModalVisible(false);
  };

  const renderEditMenu = (booking: Booking) => (
    <Flex vertical align="start" className="edit-menu">
      <Button
        type="link"
        className="edit-menu__button"
        onClick={() => handleDetailsClick(booking.id)}>
        Booking Details
      </Button>
      <Link
        to={`/dashboard/bookings/${booking.id}/${booking.facilityId}/edit`}
        className="edit-menu__link">
        Reschedule
      </Link>
      <Button
        type="link"
        className="edit-menu__button"
        onClick={() => handleCancelBooking(booking.id)}>
        Cancel Booking
      </Button>
    </Flex>
  );

  const renderTitle = (booking: Booking) => (
    <div className="booking__title">
      <span>{booking.facilityName}</span>
      <span className="booking__weekday">{describeDate(booking.date)}</span>
    </div>
  );

  return (
    <div className="active-bookings">
      {user && user?.bookings.length > 0 ? (
        user.bookings.map((booking) => (
          <Card
            className="shadow active__booking__card"
            key={booking.id}
            size="small"
            title={renderTitle(booking)}
            extra={
              <Popover
                trigger="click"
                placement="leftTop"
                content={renderEditMenu(booking)}>
                <EditOutlined className="booking-edit" />
              </Popover>
            }>
            <p>
              <span className="booking__label">When:</span>{' '}
              {getDayOfWeek(booking.date)} {formatDate(booking.date)}
            </p>
            <p>
              <span className="booking__label">Time:</span>{' '}
              {formatTime(booking.startTime)} - {formatTime(booking.endTime)}
            </p>
          </Card>
        ))
      ) : (
        <span className="booking__no-active">
          You have no active bookings..
        </span>
      )}
      <ConfirmationModal
        open={isModalVisible}
        onConfirm={() => handleConfirm()}
        onCancel={handleCancelModal}
      />
    </div>
  );
};

export default ActiveBookings;
