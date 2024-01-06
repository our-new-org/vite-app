import { GithubOutlined, HeartOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content__contact">
          <h5 className="footer__content__title">© 2023 All rights reserved</h5>
        </div>
        <div className="footer__content__contact">
          <h5 className="footer__content__title">salt.dev</h5>
        </div>
        <div className="footer__content__contact">
          <h5 className="footer__content__title">
            Made with
            <HeartOutlined style={{ margin: '0px 10px' }} />
          </h5>
          <div className="footer__content__github">
            <GithubOutlined className="footer__content__icon" />
            <a href="https://github.com/abdejohan" target="_blank">
              Johan
            </a>
          </div>
          <div className="footer__content__github">
            <GithubOutlined className="footer__content__icon" />
            <a href="https://github.com/sgayathrii" target="_blank">
              Gayathri
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
//v

export default Footer;
