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
      <h4 className="grid-title">Facilites</h4>
      <div className="grid-container">
        {facilities?.map((facility) => (
          <FacilityCard key={facility.id} facility={facility} />
        ))}
      </div>
    </AnimatedDiv>
  );
};

export default Facilities;
