import { useState } from 'react';
import AnimatedDiv from '../components/AnimatedDiv';
import { DayPicker } from 'react-day-picker';
import { subDays, toDate } from 'date-fns';
import 'react-day-picker/dist/style.css';

const yesterday = subDays(new Date(), 1);
const today = toDate(new Date());

const Facility = () => {
  const [selected, setSelected] = useState<Date | undefined>(today);

  return (
    <AnimatedDiv>
      <DayPicker
        mode="single"
        className="rdp"
        selected={selected}
        onSelect={setSelected}
        disabled={{ from: new Date(1970, 1, 1), to: yesterday }}
      />
    </AnimatedDiv>
  );
};

export default Facility;
