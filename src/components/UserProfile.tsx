import { UserOutlined } from '@ant-design/icons';
import { useAuthStore } from '../store/authStore';
import { useLocation } from 'react-router-dom';

const UserProfile = ({ baseUrl }: { baseUrl: string }) => {
  const { user } = useAuthStore();
  const location = useLocation();

  if (!user) return null;
  if (location.pathname === baseUrl) return null;
  return (
    <section className="user-card">
      <UserOutlined className="user-card__icon" size={100} />
      <h5 className="user-card__email">{user?.email}</h5>
      <span className="user-card__apartment-number">
        #{user?.apartmentNumber}
      </span>
    </section>
  );
};

export default UserProfile;
