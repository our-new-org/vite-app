import { Link } from 'react-router-dom';
import { useBookingStore } from '../store/bookingStore';
import { format } from 'date-fns';

const ConfirmationInfo = () => {
  const { bookingDetails } = useBookingStore();

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
    <div className="confirmation-container">
      <h2 className="confirmation-heading">Booking Confirmation</h2>
      <p className="confirmation-paragraph">
        <span className="confirmation-paragraph__text">Facility: </span>{' '}
        {bookingDetails?.facilityName}
      </p>
      <p className="confirmation-paragraph">
        <span className="confirmation-paragraph__text">Booking Date: </span>{' '}
        {formattedDate}
      </p>
      <p className="confirmation-paragraph">
        <span className="confirmation-paragraph__text">Time Slot: </span>{' '}
        {formattedStartTime} - {formattedEndTime}
      </p>
      <button className="cancel-booking-button">Cancel Booking</button>
      <Link to="/dashboard" className="confirmation-link">
        Go Back to Dashboard
      </Link>
    </div>
  );
};

export default ConfirmationInfo;
