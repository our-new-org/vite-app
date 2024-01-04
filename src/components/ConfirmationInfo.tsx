import { Link } from 'react-router-dom';
import { useBookingStore } from '../store/bookingStore';
import { format } from 'date-fns';
import ConfirmationModal from './ConfirmationModal';
import { useState } from 'react';
import { Button } from 'antd';

const ConfirmationInfo = () => {
  const { bookingDetails, cancelBooking } = useBookingStore();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleCancelBooking = () => {
    if (bookingDetails?.id) {
      setModalVisible(true);
    }
  };

  const handleConfirm = () => {
    if (bookingDetails?.id !== undefined) {
      cancelBooking(bookingDetails.id);
    }
    setModalVisible(false);
  };

  const handleCancelModal = () => {
    setModalVisible(false);
  };

  // Format the date and time using date-fns
  const formattedDate = bookingDetails
    ? format(new Date(bookingDetails.date), 'MM-dd-yyyy')
    : '';
  const formattedStartTime = bookingDetails
    ? format(new Date(bookingDetails.startTime), 'h:mm a')
    : '';
  const formattedEndTime = bookingDetails
    ? format(new Date(bookingDetails.endTime), 'h:mm a')
    : '';

  return (
    <div style={{ padding: '20px' }}>
      <div className="confirmation-container">
        {bookingDetails ? (
          <>
            <h2 className="confirmation-heading">Booking Confirmation</h2>
            <p className="confirmation-paragraph">
              <span className="confirmation-paragraph__text">Facility: </span>{' '}
              {bookingDetails.facilityName}
            </p>
            <p className="confirmation-paragraph">
              <span className="confirmation-paragraph__text">
                Booking Date:{' '}
              </span>{' '}
              {formattedDate}
            </p>
            <p className="confirmation-paragraph">
              <span className="confirmation-paragraph__text">Time Slot: </span>{' '}
              {formattedStartTime} - {formattedEndTime}
            </p>
            <Button type="primary" onClick={handleCancelBooking}>
              Cancel Booking
            </Button>
          </>
        ) : (
          <p>Booking cancelled successfully</p>
        )}
        <Link
          to="/dashboard"
          className="confirmation-link"
          style={{ textAlign: 'center' }}>
          Go Back to Dashboard
        </Link>
        <ConfirmationModal
          open={isModalVisible}
          onConfirm={handleConfirm}
          onCancel={handleCancelModal}
        />
      </div>
    </div>
  );
};

export default ConfirmationInfo;
