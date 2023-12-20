import { ClockCircleOutlined, RightOutlined } from '@ant-design/icons';
import { format, addMinutes, getTime } from 'date-fns';

type SlotProps = {
  slot: Date;
  slotDuration: number;
  selectedSlot: Date | null;
  handleSlotSelect: (slot: Date) => void;
};

const Slot = ({
  slot,
  slotDuration,
  handleSlotSelect,
  selectedSlot,
}: SlotProps) => {
  return (
    <li
      className="slot-item"
      onClick={() => handleSlotSelect(slot)}
      style={{
        backgroundColor:
          getTime(Number(selectedSlot)) === getTime(slot)
            ? 'lightblue'
            : 'white',
      }}>
      <div className="slot-item__details">
        <h5 className="slot-item__details__label">Slot time</h5>
        <p className="slot-item__details__content">
          <ClockCircleOutlined style={{ marginRight: '5px' }} />
          {`${format(slot, 'HH:mm')} - ${format(
            addMinutes(slot, slotDuration),
            'HH:mm'
          )}`}
        </p>
      </div>
      <RightOutlined />
    </li>
  );
};

export default Slot;
