import { useNavigate } from 'react-router-dom';
import { useBookingStore } from '../store/bookingStore';
import { format } from 'date-fns';
import ConfirmationModal from './ConfirmationModal';
import { useState } from 'react';
import { Button } from 'antd';
import AnimatedDiv from './AnimatedDiv';

const ConfirmationInfo = () => {
  const { bookingDetails, cancelBooking } = useBookingStore();
  const [isModalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();
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
    ? format(new Date(bookingDetails.startTime), 'h:mm')
    : '';
  const formattedEndTime = bookingDetails
    ? format(new Date(bookingDetails.endTime), 'h:mm')
    : '';

  return (
    <AnimatedDiv>
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
          </>
        ) : (
          <p>Booking cancelled successfully</p>
        )}
        <Button
          type="primary"
          onClick={() => navigate('/dashboard')}
          className="confirmation-link"
          style={{ textAlign: 'center' }}>
          Return to my Bookings
        </Button>
        {bookingDetails && (
          <Button
            type="text"
            className="cancel-button"
            onClick={handleCancelBooking}>
            Cancel Booking
          </Button>
        )}
        <ConfirmationModal
          open={isModalVisible}
          onConfirm={handleConfirm}
          onCancel={handleCancelModal}
        />
      </div>
    </AnimatedDiv>
  );
};

export default ConfirmationInfo;
