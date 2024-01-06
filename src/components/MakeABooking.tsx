import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDatePickerStore } from '../store/datePickerStore';

const MakeABooking = () => {
  const navigate = useNavigate();
  const { setSelectedSlot } = useDatePickerStore();

  const handleClick = () => {
    navigate('/dashboard/facilities');
    setSelectedSlot(null);
  };

  return (
    <div style={{ padding: '20px', width: '100%', maxWidth: '640px' }}>
      <Button
        block
        type="primary"
        size="large"
        className="shadow"
        onClick={handleClick}>
        Make a Booking
      </Button>
    </div>
  );
};

export default MakeABooking;
