import AnimatedDiv from '../components/AnimatedDiv';
import { useFacilityStore } from '../store/facilityStore';
import { useEffect } from 'react';
import AllFacilities from '../components/AllFacilities';

const Facilities = () => {
  const { fetchFacilities } = useFacilityStore();

  useEffect(() => {
    fetchFacilities();
  }, []);

  return (
    <AnimatedDiv>
      <AllFacilities />
    </AnimatedDiv>
  );
};

export default Facilities;
