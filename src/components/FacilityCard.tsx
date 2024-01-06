import { Button } from 'antd';
import { Facility } from '../types';
import { useNavigate } from 'react-router-dom';
import { useFacilityStore } from '../store/facilityStore';
import { useDatePickerStore } from '../store/datePickerStore';

type FacilityCardProp = {
  facility: Facility;
};

const FacilityCard = ({ facility }: FacilityCardProp) => {
  const navigate = useNavigate();
  const { setFacility } = useFacilityStore();
  const { setSelectedSlot } = useDatePickerStore();

  const handleClick = () => {
    setFacility(null);
    setSelectedSlot(null);
    navigate(`/dashboard/facilities/${facility.id}`);
  };

  return (
    <div className="grid-item" onClick={handleClick}>
      <img src={facility.image} alt="facility image" className="img" />
      <div className="item-absolute-wrapper">
        <div className="item-content">
          <h4>{facility.name}</h4>
          <Button type="primary" size="small" onClick={handleClick}>
            Book now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
// <Link to={`/dashboard/facilities/${id}`}>{name}</Link>
