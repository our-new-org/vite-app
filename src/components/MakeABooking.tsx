import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const MakeABooking = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '0px 20px', marginBottom: '50px' }}>
      <Button
        block
        type="primary"
        size="large"
        onClick={() => navigate('/dashboard/facilities')}>
        Make a Booking
      </Button>
    </div>
  );
};

export default MakeABooking;
