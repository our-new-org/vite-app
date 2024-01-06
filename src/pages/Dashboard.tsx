import AnimatedDiv from '../components/AnimatedDiv';
import 'react-day-picker/dist/style.css';
import ActiveBookings from '../components/ActiveBookings.tsx';

const Dashboard = () => {
  return (
    <AnimatedDiv>
      <ActiveBookings />
    </AnimatedDiv>
  );
};

export default Dashboard;
