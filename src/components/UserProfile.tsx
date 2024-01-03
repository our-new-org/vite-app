import { UserOutlined } from '@ant-design/icons';
import { useAuthStore } from '../store/authStore';
import { useLocation } from 'react-router-dom';
import { Avatar } from 'antd';

const UserProfile = ({ baseUrl }: { baseUrl: string }) => {
  const { user } = useAuthStore();
  const location = useLocation();

  if (!user) return null;
  if (location.pathname === baseUrl) return null;
  return (
    <section className="user-card">
      <div className="user-card_inner">
        <Avatar shape="square" size={80} icon={<UserOutlined />} />
        <div className="user-card__content">
          <span className="user-card__email">{user?.email}</span>
          <div>
            <span className="user-card__label">Apt. No. </span>
            <span className="user-card__apartment-number">
              #{user?.apartmentNumber}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
