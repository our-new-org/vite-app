import { Card, Flex, Popover } from 'antd';
import { describeDate, formatDate, formatTime, getDayOfWeek } from '../utils';
import { EditOutlined } from '@ant-design/icons';
import { useAuthStore } from '../store/authStore';
import { Link } from 'react-router-dom';
import { Booking } from '../types';

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
    <Link to="/" type="link">
      Delete
    </Link>
  </Flex>
);

const renderTitle = (booking: Booking) => (
  <div className="booking__title">
    <span>{booking.facilityName}</span>
    <span className="booking__weekday">{describeDate(booking.date)}</span>
  </div>
);

const ActiveBookings = () => {
  const { user } = useAuthStore();

  return (
    <div className="active-bookings">
      <h6>Active Bookings</h6>
      {user && user?.bookings.length > 0 ? (
        user.bookings.map((booking) => (
          <Card
            className="shadow"
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
    </div>
  );
};

export default ActiveBookings;
