import { ClockCircleOutlined } from '@ant-design/icons';
import { Facility } from '../types';
import { MdOutlineTimer } from 'react-icons/md';
import { PiUsersThree } from 'react-icons/pi';

type FacilityInfoProps = {
  facility: Facility;
};

const FacilityInfo = ({ facility }: FacilityInfoProps) => {
  return (
    <div className="facility" style={{ padding: '0px' }}>
      <div className="facility__info">
        <div className="image-container">
          <img
            src={facility.image}
            alt={facility.name}
            className="facility__image"
          />
        </div>
        <div className="group-container">
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
        </div>

        <h2 className="facility__info__title">{facility.name}</h2>
        <p className="facility__info__description">{facility.description}</p>
        <div className="book__now"></div>
      </div>
    </div>
  );
};

export default FacilityInfo;
