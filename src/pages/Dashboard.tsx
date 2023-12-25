import AnimatedDiv from '../components/AnimatedDiv';
import 'react-day-picker/dist/style.css';
import UserProfile from '../components/UserProfile.tsx';
import ActiveBookings from '../components/ActiveBookings.tsx';
import AllFacilities from '../components/AllFacilities.tsx';

const Dashboard = () => {
  return (
    <AnimatedDiv>
      <UserProfile />
      <ActiveBookings />
      <AllFacilities />
    </AnimatedDiv>
  );
};

export default Dashboard;
