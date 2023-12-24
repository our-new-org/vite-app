import { UserOutlined } from '@ant-design/icons';
import { useAuthStore } from '../store/authStore';

const UserProfile = () => {
  const { user } = useAuthStore();

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
