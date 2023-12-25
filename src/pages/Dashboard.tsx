import AnimatedDiv from '../components/AnimatedDiv';
import 'react-day-picker/dist/style.css';
import UserProfile from '../components/UserProfile.tsx';
import ActiveBookings from '../components/ActiveBookings.tsx';
import MakeABooking from '../components/MakeABooking.tsx';
import AllFacilities from '../components/AllFacilities.tsx';

const Dashboard = () => {
  return (
    <AnimatedDiv>
      <UserProfile />
      <ActiveBookings />
      <MakeABooking />
      <AllFacilities />
    </AnimatedDiv>
  );
};

export default Dashboard;
