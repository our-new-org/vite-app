import { Link } from 'react-router-dom';
import { useFacilityStore } from '../store/facilityStore';
import { useEffect } from 'react';

const AllFacilities = () => {
  const { fetchFacilities, facilities } = useFacilityStore();

  useEffect(() => {
    fetchFacilities();
  }, []);

  return (
    <>
      <h4 className="grid-title">Facilites</h4>
      <div className="grid-container">
        {facilities?.map(({ id, name }) => (
          <div className="grid-item" key={id}>
            <Link to={`/dashboard/facilities/${id}`}>{name}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllFacilities;
