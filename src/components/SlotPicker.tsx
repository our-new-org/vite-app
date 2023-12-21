import React, { useState } from 'react';
import { addMinutes } from 'date-fns';
import Slot from './Slot';
import { Button } from 'antd';
import { useFacilityStore } from '../store/facilityStore';
import { combineDateAndTime } from '../utils';

interface SlotPickerProps {}

const SlotPicker: React.FC<SlotPickerProps> = () => {
  const { facility } = useFacilityStore();
  const [selectedSlot, setSelectedSlot] = useState<Date | null>(null);

  const handleSlotSelect = (slot: Date) => {
    setSelectedSlot(slot);
  };

  // Create an array of slots within the specified start and end time
  const slots: Date[] = [];
  let currentTime = combineDateAndTime(new Date(), facility!.openingHour);
  const endTime = combineDateAndTime(new Date(), facility!.closingHour);
  while (currentTime < endTime) {
    slots.push(currentTime);
    currentTime = addMinutes(currentTime, facility!.slotDuration);
  }

  return (
    <section className="facility">
      <h1 className="facility__title">Available Slots</h1>
      <ul className="slot-list">
        {slots?.map((slot, index) => (
          <Slot
            slot={slot}
            key={index}
            slotDuration={facility!.slotDuration}
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
