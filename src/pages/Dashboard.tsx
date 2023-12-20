import AnimatedDiv from '../components/AnimatedDiv';
import 'react-day-picker/dist/style.css';
import mockedFacilities from '../../mockups/mockedFacilities.ts';
const Dashboard = () => {
  return (
    <AnimatedDiv>
      <h4 className="grid-title">Facilites</h4>
      <div className="grid-container">
        {mockedFacilities.map((facility) => (
          <div className="grid-item" key={facility.id}>
            {facility.name}
          </div>
        ))}
      </div>
    </AnimatedDiv>
  );
};

export default Dashboard;
