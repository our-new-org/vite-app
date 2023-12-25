import AnimatedDiv from '../components/AnimatedDiv';
import 'react-day-picker/dist/style.css';
import UserProfile from '../components/UserProfile.tsx';
import ActiveBookings from '../components/ActiveBookings.tsx';
import MakeABooking from '../components/MakeABooking.tsx';

const Dashboard = () => {
  return (
    <AnimatedDiv>
      <UserProfile />
      <ActiveBookings />
      <MakeABooking />
    </AnimatedDiv>
  );
};

export default Dashboard;
