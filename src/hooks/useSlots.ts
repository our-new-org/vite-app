import { useEffect, useState } from 'react';
import { addMinutes } from 'date-fns';
import { Facility } from '../types';
import { combineDateAndTime } from '../utils';

const useSlots = (selectedDate: Date, facility: Facility | null) => {
  const [slots, setSlots] = useState<Date[]>([]);

  useEffect(() => {
    if (!facility) {
      setSlots([]);
      return;
    }

    if (facility.slotDuration === 0) {
      // If slotDuration is 0, book for the entire day
      const daySlot = [combineDateAndTime(selectedDate, facility.openingHour)];
      setSlots(daySlot);
    } else {
      // Generate slots for the day
      const generateSlots = () => {
        const slotsArray: Date[] = [];
        let currentTime = combineDateAndTime(
          selectedDate,
          facility.openingHour,
        );

        while (
          currentTime < combineDateAndTime(selectedDate, facility.closingHour)
        ) {
          slotsArray.push(new Date(currentTime));
          currentTime = addMinutes(currentTime, facility.slotDuration);
        }

        return slotsArray;
      };

      setSlots(generateSlots());
    }
  }, [selectedDate, facility]);

  return slots;
};

export default useSlots;
