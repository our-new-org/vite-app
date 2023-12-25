// SlotPicker component
import React from 'react';
import Slot from './Slot';
import { useFacilityStore } from '../store/facilityStore';
import { useDatePickerStore } from '../store/datePickerStore';
import { isSlotBooked } from '../utils';
import { AnimatePresence, motion } from 'framer-motion';
import useSlots from '../hooks/useSlots'; // Custom hook for slot generation

const SlotPicker: React.FC = () => {
  // Fetching global state from Zustand stores
  const { facility } = useFacilityStore();
  const { selectedDate, selectedSlot, setSelectedSlot } = useDatePickerStore();

  // Using a custom hook for slots calculation
  const slots = useSlots(selectedDate, facility);

  if (!facility) {
    return <div>Loading facility data...</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedDate.getTime()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}>
        <section className="facility">
          <h1 className="facility__title">Available Slots</h1>
          <ul className="slot-list">
            {slots.map((slot) => (
              <Slot
                key={slot.getTime()}
                slot={slot}
                disabled={isSlotBooked(slot, facility.bookings)}
                slotDuration={facility.slotDuration}
                selectedSlot={selectedSlot}
                handleSlotSelect={() => setSelectedSlot(slot)}
              />
            ))}
          </ul>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default SlotPicker;
