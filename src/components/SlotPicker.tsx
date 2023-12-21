import React, { useState } from 'react';
import { addMinutes } from 'date-fns';
import Slot from './Slot';
import { Button } from 'antd';

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

  const handleSlotSelect = (slot: Date) => {
    setSelectedSlot(slot);
  };

  // Create an array of slots within the specified start and end time
  const slots: Date[] = [];
  let currentTime = startTime;
  while (currentTime < endTime) {
    slots.push(currentTime);
    currentTime = addMinutes(currentTime, slotDuration);
  }

  return (
    <section className="facility">
      <h1 className="facility__title">{facilityName}</h1>
      <ul className="slot-list">
        {slots.map((slot, index) => (
          <Slot
            slot={slot}
            key={index}
            slotDuration={slotDuration}
            handleSlotSelect={handleSlotSelect}
            selectedSlot={selectedSlot}
          />
        ))}
      </ul>
      <Button type="primary" block size="large">
        Book slot
      </Button>
    </section>
  );
};

export default SlotPicker;
