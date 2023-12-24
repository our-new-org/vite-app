import AnimatedDiv from '../components/AnimatedDiv';
import 'react-day-picker/dist/style.css';
import { Link } from 'react-router-dom';
import { useFacilityStore } from '../store/facilityStore.ts';
import { useEffect } from 'react';
import UserProfile from '../components/UserProfile.tsx';

const Dashboard = () => {
  const { fetchFacilities, facilities } = useFacilityStore();

  useEffect(() => {
    fetchFacilities();
  }, []);

  return (
    <AnimatedDiv>
      <UserProfile />
      <h4 className="grid-title">Facilites</h4>
      <div className="grid-container">
        {facilities?.map(({ id, name }) => (
          <div className="grid-item" key={id}>
            <Link to={`/vite-app/facility/${id}`}>{name}</Link>
          </div>
        ))}
      </div>
    </AnimatedDiv>
  );
};

export default Dashboard;
