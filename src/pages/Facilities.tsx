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
      <h1 className="page__title">Facilites</h1>
      <h2 className="page__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <div className="grid-container">
        {facilities?.map((facility) => (
          <FacilityCard key={facility.id} facility={facility} />
        ))}
      </div>
    </AnimatedDiv>
  );
};

export default Facilities;
