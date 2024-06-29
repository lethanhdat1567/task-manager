import style from './Footer.module.scss';
import classNames from 'classnames/bind';
import { icons } from '../../assets/icons';
import imgs from '../../assets/images';
import Button from '../../layouts/Button';

const cx = classNames.bind(style);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className="container">
                <div className={cx('inner')}>
                    <div className={cx('wrap-heading')}>
                        <a className={cx('logo')}>
                            <img src={icons.logo} />
                        </a>
                        <div className={cx('wrap-start')}>
                            <span className={cx('sup')}>
                                Ready to get started?
                            </span>
                            <Button className={cx('footer-btn')} primary>
                                Get Started
                            </Button>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('email')}>
                            <h3 className={cx('email-desc')}>
                                Subscribe to our newsletter
                            </h3>
                            <input
                                placeholder="Your Email Adreess"
                                className={cx('email-input')}
                            />
                            <img
                                className={cx('arrow')}
                                src={imgs.right_arrow}
                            />
                        </div>
                        <div className={cx('nav')}>
                            <ul>
                                <li className={cx('heading')}>Services</li>
                                <li className={cx('nav-item')}>
                                    Email Marketing
                                </li>
                                <li className={cx('nav-item')}>Campaigns</li>
                                <li className={cx('nav-item')}>Branding</li>
                                <li className={cx('nav-item')}>Online</li>
                            </ul>
                            <ul>
                                <li className={cx('heading')}>About</li>
                                <li className={cx('nav-item')}>Our Story</li>
                                <li className={cx('nav-item')}>Benefits</li>
                                <li className={cx('nav-item')}>Team</li>
                                <li className={cx('nav-item')}>Careers</li>
                            </ul>
                            <ul>
                                <li className={cx('heading')}>Help</li>
                                <li className={cx('nav-item')}>FAQs</li>
                                <li className={cx('nav-item')}>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
