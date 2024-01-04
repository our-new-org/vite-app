import { GithubOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content__contact">
          <h5 className="footer__content__title">© 2023 All rights reserved</h5>
          <Link to="/">Project Policy</Link>
          <Link to="/">Terms of Service</Link>
        </div>
        <div className="footer__content__contact">
          <h5 className="footer__content__title">salt.dev</h5>
        </div>
        <div className="footer__content__contact">
          <h5 className="footer__content__title">Made by</h5>
          <div className="footer__content__github">
            <GithubOutlined className="footer__content__icon" />
            <Link
              to={{ pathname: 'https://github.com/abdejohan' }}
              target="_blank">
              Johan
            </Link>
          </div>
          <div className="footer__content__github">
            <GithubOutlined className="footer__content__icon" />
            <Link
              to={{ pathname: 'https://github.com/sgayathrii' }}
              target="_blank">
              Gayathri
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
//v

export default Footer;
