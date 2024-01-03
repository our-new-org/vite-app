import {
  ClockCircleOutlined,
  LockOutlined,
  TeamOutlined,
  UnlockOutlined,
} from '@ant-design/icons';
import { Facility } from '../types';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

type FacilityInfoProps = {
  facility: Facility;
};

const FacilityInfo = ({ facility }: FacilityInfoProps) => {
  const slotDurationInHours = facility.slotDuration / 60;
  return (
    <Card className="facility-info" size="small">
      <div className="facility-info__container">
        <img src={facility.image} alt="" className="facility-info__image" />
        <div className="facility-info__details">
          <h3>
            <TeamOutlined className="icon" /> Capacity:
            <span className="facility-info__data">{facility.capacity}</span>
          </h3>
          <h3>
            <UnlockOutlined className="icon" /> Opens:
            <span className="facility-info__data">{`${facility.openingHour}:00`}</span>
          </h3>
          <h3>
            <LockOutlined className="icon" /> Closes:
            <span className="facility-info__data">{`${facility.closingHour}:00`}</span>
          </h3>
          <h3>
            <ClockCircleOutlined className="icon" /> Slot duration:
            <span className="facility-info__data">
              {' '}
              {slotDurationInHours}{' '}
              {slotDurationInHours === 1 ? 'hour' : 'hours'}
            </span>
          </h3>
        </div>
      </div>
      <p className="facility-info__description">{facility?.description}</p>
      <Link to="/dashboard" className="confirmation-link">
        Go Back to Dashboard
      </Link>
    </Card>
  );
};

export default FacilityInfo;
