import { Card } from 'antd';
import mockedBookings from '../../mockups/mockedBookings';
import { describeDate, formatDate, formatTime, getDayOfWeek } from '../utils';
import { EditOutlined } from '@ant-design/icons';

const ActiveBookings = () => {
  return (
    <div className="active-bookings">
      <h6>Active Bookings</h6>
      {mockedBookings.length > 0 ? (
        mockedBookings.map((booking) => (
          <Card
            key={booking.id}
            size="small"
            title={
              <div className="booking__title">
                <span>{booking.facility.name}</span>
                <span className="booking__weekday">
                  {describeDate(booking.date)}
                </span>
              </div>
            }
            extra={<EditOutlined className="booking-edit" size={100} />}>
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
