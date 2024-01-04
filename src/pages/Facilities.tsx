import AnimatedDiv from '../components/AnimatedDiv';
import FacilityCard from '../components/FacilityCard';
import { useFacilityStore } from '../store/facilityStore';
import { useEffect } from 'react';

const Facilities = () => {
  const { fetchFacilities, facilities } = useFacilityStore();

  useEffect(() => {
    fetchFacilities();
  }, []);

  return (
    <AnimatedDiv>
      <div style={{ marginTop: '80px' }}>
        <h1 className="page__title">Facilites</h1>
        <h2 className="page__description">
          Indulge in convenience and comfort with our array of amenities.
        </h2>
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
