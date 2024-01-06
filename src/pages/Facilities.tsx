import { LoadingOutlined } from '@ant-design/icons';
import AnimatedDiv from '../components/AnimatedDiv';
import FacilityCard from '../components/FacilityCard';
import { useFacilityStore } from '../store/facilityStore';
import { useEffect } from 'react';

const Facilities = () => {
  const { fetchFacilities, facilities } = useFacilityStore();

  useEffect(() => {
    fetchFacilities();
  }, []);

  if (!facilities) {
    return (
      <AnimatedDiv>
        <div
          style={{
            opacity: 0.3,
            display: 'flex',
            flexDirection: 'column',
            marginTop: '200px',
            alignItems: 'center',
          }}>
          <div>
            <LoadingOutlined
              spin
              style={{ fontSize: 80, marginBottom: '40px' }}
            />
          </div>
          Loading facilities...
        </div>
      </AnimatedDiv>
    );
  }

  return (
    <AnimatedDiv>
      <div>
        <h1 className="page__title">Facilites</h1>
        <div className="grid-container">
          {facilities?.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default Facilities;
