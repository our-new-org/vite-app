import { useState } from 'react';
import AnimatedDiv from '../components/AnimatedDiv';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { subDays, toDate } from 'date-fns';
const yesterday = subDays(new Date(), 1);
const today = toDate(new Date());

const Dashboard = () => {
  const [selected, setSelected] = useState<Date | undefined>(today);

  // let footer = <p>Please pick a day.</p>;
  // if (selected) {
  //   footer = <p>You picked {format(selected, 'PP')}.</p>;
  // }

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

export default Dashboard;
