// Thu vien
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
// Component
import { icons } from '../../assets/icons';
import Button from '../../layouts/Button/Button';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header-wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <img src={icons.logo} alt="" className={cx('logo')} />
                    <nav className={cx('nav')}>
                        <ul className={cx('items')}>
                            <li className={cx('item')}>
                                <Button href="/" className={cx('item-link')}>
                                    Home
                                </Button>
                            </li>
                            <li className={cx('item')}>
                                <Button
                                    href="/products"
                                    className={cx('item-link')}
                                >
                                    Products
                                </Button>
                            </li>
                            <li className={cx('item')}>
                                <Button
                                    href="/guilines"
                                    className={cx('item-link')}
                                >
                                    Guilines
                                </Button>
                            </li>
                            <li className={cx('item')}>
                                <Button
                                    href="/review"
                                    className={cx('item-link')}
                                >
                                    Review
                                </Button>
                            </li>
                        </ul>
                    </nav>
                    <Button outline>Sign In</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
