import { ClockCircleOutlined, RightOutlined } from '@ant-design/icons';
import { format, addMinutes, getTime } from 'date-fns';

type SlotProps = {
  slot: Date;
  slotDuration: number;
  selectedSlot: Date | null;
  handleSlotSelect: (slot: Date) => void;
  disabled?: boolean;
};

const Slot = ({
  slot,
  slotDuration,
  handleSlotSelect,
  selectedSlot,
  disabled = false,
}: SlotProps) => {
  const handleItemColor = () => {
    const isMatch = getTime(Number(selectedSlot)) === getTime(slot);
    if (!disabled) return isMatch ? '#f8dee1' : '';
  };

  return (
    <li
      className={`slot-item ${disabled ? 'slot-item--disabled' : ''}`}
      onClick={() => !disabled && handleSlotSelect(slot)}
      style={{ backgroundColor: handleItemColor() }}>
      <div className="slot-item__details">
        <h5 className="slot-item__details__label">Slot time</h5>
        <p className="slot-item__details__content">
          <ClockCircleOutlined style={{ marginRight: '5px' }} />
          {`${format(slot, 'HH:mm')} - ${format(
            addMinutes(slot, slotDuration),
            'HH:mm',
          )}`}
        </p>
      </div>
      <RightOutlined className="slot-item__arrow" />
    </li>
  );
};

export default Slot;
