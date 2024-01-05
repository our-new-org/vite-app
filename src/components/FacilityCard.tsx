import { Button } from 'antd';
import { Facility } from '../types';
import { useNavigate } from 'react-router-dom';

type FacilityCardProp = {
  facility: Facility;
};

const FacilityCard = ({ facility }: FacilityCardProp) => {
  const navigate = useNavigate();
  return (
    <div
      className="grid-item"
      onClick={() => navigate(`/dashboard/facilities/${facility.id}`)}>
      <img src={facility.image} alt="facility image" className="img" />
      <div className="item-absolute-wrapper">
        <div className="item-content">
          <h4>{facility.name}</h4>
          <Button
            type="primary"
            size="small"
            onClick={() => navigate(`/dashboard/facilities/${facility.id}`)}>
            Book now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
// <Link to={`/dashboard/facilities/${id}`}>{name}</Link>
