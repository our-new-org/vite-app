import React, { useState } from 'react';
import { format, addMinutes } from 'date-fns';
import { ClockCircleOutlined, RightOutlined } from '@ant-design/icons';

interface SlotPickerProps {
  facilityName: string;
  slotDuration: number; // Slot duration in minutes
  startTime: Date; // Start time for slots
  endTime: Date; // End time for slots
}

const SlotPicker: React.FC<SlotPickerProps> = ({
  facilityName,
  slotDuration,
  startTime,
  endTime,
}) => {
  const [selectedSlot, setSelectedSlot] = useState<Date | null>(null);

  // Create an array of slots within the specified start and end time
  const slots: Date[] = [];
  let currentTime = startTime;
  while (currentTime < endTime) {
    slots.push(currentTime);
    currentTime = addMinutes(currentTime, slotDuration);
  }

  // Function to handle slot selection
  const handleSlotSelect = (slot: Date) => {
    setSelectedSlot(slot);
    // You can perform additional actions here when a slot is selected
  };

  return (
    <div>
      <ul className="slot-list">
        {slots.map((slot, index) => (
          <li
            key={index}
            className="slot-item"
            onClick={() => handleSlotSelect(slot)}
            style={{
              backgroundColor: selectedSlot === slot ? 'lightblue' : 'white',
            }}>
            <div className="slot-item__details">
              <h5 className="slot-item__details__label">{facilityName} slot</h5>
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
        ))}
      </ul>
    </div>
  );
};

export default SlotPicker;
