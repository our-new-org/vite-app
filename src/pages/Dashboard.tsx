import AnimatedDiv from '../components/AnimatedDiv';
import 'react-day-picker/dist/style.css';
import ActiveBookings from '../components/ActiveBookings.tsx';
import MakeABooking from '../components/MakeABooking.tsx';

const Dashboard = () => {
  return (
    <AnimatedDiv>
      <h1 style={{ marginTop: '100px' }} className="page__title">
        Bookings
      </h1>
      <h2 className="page__description">Keep track of your bookings here.</h2>
      <ActiveBookings />
      <MakeABooking />
    </AnimatedDiv>
  );
};

export default Dashboard;
