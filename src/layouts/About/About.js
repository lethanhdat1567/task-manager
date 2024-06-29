import styles from './About.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button/Button';
import imgs from '../../assets/images';
import { svg } from '../../assets/icons';

const cx = classNames.bind(styles);

function About() {
    return (
        <section className={cx('about')}>
            <div className="container">
                <div className={cx('inner')}>
                    <h2 className={cx('heading')}>
                        Integrated <mark className={cx('mark')}>designed</mark>{' '}
                        for product teams
                    </h2>
                    <p className={cx('desc')}>
                        Exepteur sint occaecat cupidatat non proident, sunt in
                        culpa que official deserunt mollit laborum - semper quis
                        lectus nulla.
                    </p>
                    <div className={cx('wrap-btn')}>
                        <Button
                            className={cx('btn-about')}
                            leftIcon={svg.about1}
                            rounded
                        >
                            Quick Actions
                        </Button>
                        <Button
                            className={cx('btn-about')}
                            leftIcon={svg.about2}
                            rounded
                        >
                            Quick Actions
                        </Button>
                        <Button
                            className={cx('btn-about')}
                            leftIcon={svg.about3}
                            rounded
                        >
                            Quick Actions
                        </Button>
                        <Button
                            className={cx('btn-about')}
                            leftIcon={svg.about4}
                            rounded
                        >
                            Quick Actions
                        </Button>
                        <Button
                            className={cx('btn-about')}
                            leftIcon={svg.about5}
                            rounded
                        >
                            Quick Actions
                        </Button>
                    </div>
                    <div className={cx('banner')}>
                        <img
                            className={cx('about-img1')}
                            src={imgs.aboutimg1}
                        />
                        <img
                            className={cx('about-img2')}
                            src={imgs.aboutimg2}
                        />
                        <img
                            className={cx('about-img3')}
                            src={imgs.aboutimg3}
                        />
                        <img
                            className={cx('about-img4')}
                            src={imgs.aboutimg4}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
