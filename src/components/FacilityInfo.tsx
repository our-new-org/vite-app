import { Facility } from '../types';
import { Card } from 'antd';

type FacilityInfoProps = {
  facility: Facility;
};

const FacilityInfo = ({ facility }: FacilityInfoProps) => {
  return (
    <Card className="facility-info" size="small">
      <img src={facility.image} alt="" className="facility-info__image" />
      <h2>Capacity: {facility.capacity}</h2>
      <h2>Opens: {facility.closingHour}</h2>
      <h2>Closes: {facility.openingHour}</h2>
      <h2>Slot duration: {facility.slotDuration}</h2>
      <p>{facility?.description}</p>
    </Card>
  );
};

export default FacilityInfo;
