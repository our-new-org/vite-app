import AnimatedDiv from '../components/AnimatedDiv';
import 'react-day-picker/dist/style.css';
import mockedFacilities from '../../mockups/mockedFacilities.ts';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <AnimatedDiv>
      <h4 className="grid-title">Facilites</h4>
      <div className="grid-container">
        {mockedFacilities.map(({ id, name }) => (
          <div className="grid-item" key={id}>
            <Link to={`/vite-app/facility/${id}`}>{name}</Link>
          </div>
        ))}
      </div>
    </AnimatedDiv>
  );
};

export default Dashboard;
