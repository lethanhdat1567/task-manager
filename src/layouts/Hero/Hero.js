import classNames from 'classnames/bind';
import styles from './Hero.module.scss';

import imgs from '../../assets/images';
import Button from '../../layouts/Button/Button';

const cx = classNames.bind(styles);
function Hero() {
    return (
        <div className={cx('hero')}>
            <img src={imgs.decor1} alt="" className={cx('decor-1')} />
            <section className={cx('container')}>
                <div className={cx('inner')}>
                    <h1 className={cx('heading')}>
                        Make
                        <mark className={cx('mark-heading')}>
                            Management
                            <img
                                src={imgs.hero_decor2}
                                alt=""
                                className={cx('mark-decor')}
                            />
                        </mark>
                        Way More Easier Than Ever
                    </h1>
                    <p className={cx('desc')}>
                        The online collaborative management platform to bring
                        more efficiency and performace
                    </p>
                    <div className={cx('wrap-btn')}>
                        <Button className={cx('hero-btn')} primary>
                            Request Demo
                        </Button>
                        <Button className={cx('contact')} btn>
                            Contact Us
                        </Button>
                    </div>
                </div>
                <div className={cx('hero-banner')}>
                    <img
                        src={imgs.hero_decor3}
                        alt=""
                        className={cx('large-banner')}
                    />
                    <img
                        src={imgs.hero_decor4}
                        alt=""
                        className={cx('small-banner')}
                    />
                    <img
                        src={imgs.hero_decor5}
                        alt=""
                        className={cx('decor-title1')}
                    />
                    <img
                        src={imgs.hero_decor6}
                        alt=""
                        className={cx('decor-title2')}
                    />
                </div>
            </section>
            <img src={imgs.decor1} alt="" className={cx('decor-2')} />
        </div>
    );
}

export default Hero;
