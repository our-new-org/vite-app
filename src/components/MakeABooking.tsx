import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const MakeABooking = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '20px', width: '100%', maxWidth: '640px' }}>
      <Button
        block
        type="primary"
        size="large"
        className="shadow"
        onClick={() => navigate('/dashboard/facilities')}>
        Make a Booking
      </Button>
    </div>
  );
};

export default MakeABooking;
