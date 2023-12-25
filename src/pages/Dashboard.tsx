import AnimatedDiv from '../components/AnimatedDiv';
import 'react-day-picker/dist/style.css';
import ActiveBookings from '../components/ActiveBookings.tsx';
import MakeABooking from '../components/MakeABooking.tsx';

const Dashboard = () => {
  return (
    <AnimatedDiv>
      <ActiveBookings />
      <MakeABooking />
    </AnimatedDiv>
  );
};

export default Dashboard;
