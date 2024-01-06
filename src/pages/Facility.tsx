import { useEffect } from 'react';
import AnimatedDiv from '../components/AnimatedDiv';
import 'react-day-picker/dist/style.css';
import SlotPicker from '../components/SlotPicker';
import WeekPicker from '../components/WeekPicker';
import { useParams } from 'react-router-dom';
import { useFacilityStore } from '../store/facilityStore';
import { Button } from 'antd';
import { useDatePickerStore } from '../store/datePickerStore';
import useBooking from '../hooks/useBooking'; // Import your custom hook
import { ClockCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import { PiUsersThree } from 'react-icons/pi';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineTimer } from 'react-icons/md';

const Facility = () => {
  const { id } = useParams();
  const { fetchFacility, facility } = useFacilityStore();
  const { selectedSlot } = useDatePickerStore();
  const { handleBooking } = useBooking();

  useEffect(() => {
    if (id) fetchFacility(Number(id));
  }, [id, fetchFacility]);

  if (!facility) {
    return (
      <AnimatedDiv>
        <div
          style={{
            opacity: 0.3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <div>
            <LoadingOutlined
              spin
              style={{ fontSize: 80, marginBottom: '40px' }}
            />
          </div>
          Loading facility...
        </div>
      </AnimatedDiv>
    );
  }

  return (
    <AnimatedDiv>
      <div className="facility">
        <div className="facility__info">
          <div className="image-container">
            <img
              src={facility.image}
              alt={facility.name}
              className="facility__image"
            />
          </div>
          <div className="facility__info__group">
            <MdOutlineTimer className="facility__info__icon" />
            <small className="facility__info__small">
              {facility.slotDuration === 0
                ? '1 day'
                : facility.slotDuration / 60 === 1
                ? '1 hour'
                : facility.slotDuration / 60 + ' hours'}
            </small>
          </div>
          <div className="facility__info__group">
            <PiUsersThree className="facility__info__icon" />
            <small className="facility__info__small">{facility.capacity}</small>
          </div>
          <div className="facility__info__group">
            <ClockCircleOutlined className="facility__info__icon" />
            <small className="facility__info__small">
              {facility.openingHour} - {facility.closingHour}
            </small>
          </div>
          <h2 className="facility__info__title">{facility.name}</h2>
          <p className="facility__info__description">{facility.description}</p>
          <div className="book__now">
            <small>Book Now</small>
            <IoIosArrowDown className="book__now__icon" />
          </div>
        </div>
        {/* <h1 className="page__title">Start Booking</h1> */}
        <WeekPicker />
        <SlotPicker />
        <div style={{ width: '100%', maxWidth: '640px' }}>
          <Button
            disabled={!selectedSlot}
            type="primary"
            className="shadow"
            block
            size="large"
            onClick={handleBooking}>
            Book Slot
          </Button>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default Facility;
