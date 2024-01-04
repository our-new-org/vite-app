import { Button, Card, Flex, Popover } from 'antd';
import { describeDate, formatDate, formatTime, getDayOfWeek } from '../utils';
import { EditOutlined } from '@ant-design/icons';
import { useAuthStore } from '../store/authStore';
import { Link } from 'react-router-dom';
import { Booking } from '../types';
import { useBookingStore } from '../store/bookingStore';
import ConfirmationModal from './ConfirmationModal';
import { useEffect, useState } from 'react';

const ActiveBookings = () => {
  const { user } = useAuthStore();
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

  const handleCancelModal = () => {
    setModalVisible(false);
  };

  const renderEditMenu = (booking: Booking) => (
    <Flex vertical align="start">
      <Link to={`/dashboard/bookings/${booking.id}`} type="link">
        Details
      </Link>

      <Link
        to={`/dashboard/bookings/${booking.id}/${booking.facilityId}/edit`}
        type="link">
        Edit
      </Link>
      <Button type="link" onClick={() => handleCancelBooking(booking.id)}>
        Delete
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
      <h2 className="page__secondary__title">Active Bookings</h2>
      {user && user?.bookings.length > 0 ? (
        user.bookings.map((booking) => (
          <Card
            className="shadow active__booking__card"
            key={booking.id}
            size="small"
            title={renderTitle(booking)}
            extra={
              <Popover placement="leftTop" content={renderEditMenu(booking)}>
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
