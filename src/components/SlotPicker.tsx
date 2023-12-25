import { addMinutes } from 'date-fns';
import Slot from './Slot';
import { useFacilityStore } from '../store/facilityStore';
import { combineDateAndTime } from '../utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useDatePickerStore } from '../store/datePickerStore';

interface SlotPickerProps {}

const SlotPicker: React.FC<SlotPickerProps> = () => {
  const { facility } = useFacilityStore();
  const { setSelectedSlot, selectedSlot, selectedDate } = useDatePickerStore();

  // Create an array of slots within the specified start and end time
  const slots: Date[] = [];
  let currentTime = combineDateAndTime(selectedDate, facility!.openingHour);
  const endTime = combineDateAndTime(selectedDate, facility!.closingHour);
  while (currentTime < endTime) {
    slots.push(currentTime);
    currentTime = addMinutes(currentTime, facility!.slotDuration);
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedDate.getTime()} // UNIX date
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}>
        <section className="facility">
          <h1 className="facility__title">Available Slots</h1>
          <ul className="slot-list">
            {slots?.map((slot, index) => (
              <Slot
                slot={slot}
                key={index}
                slotDuration={facility!.slotDuration}
                handleSlotSelect={(slot) => {
                  slot.setSeconds(0);
                  slot.setMilliseconds(0);
                  setSelectedSlot(slot);
                }}
                selectedSlot={selectedSlot}
              />
            ))}
          </ul>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default SlotPicker;
