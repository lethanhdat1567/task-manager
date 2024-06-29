import classNames from 'classnames/bind';
import styles from './Features.module.scss';
import FeaturesItem from './FeaturesItem';
import imgs from '../../assets/images';
import { icons } from '../../assets/icons';
const cx = classNames.bind(styles);

function Features() {
    return (
        <section className={cx('features')}>
            <div className="container">
                <div className={cx('inner')}>
                    <div className="row row-cols-2">
                        <div className="col">
                            <div className={cx('banner')}>
                                <img src={imgs.features_banner} />
                            </div>
                        </div>
                        <div className="col">
                            <div className={cx('info')}>
                                <h2 className={cx('info-heading')}>
                                    Features to help your
                                    <mark className={cx('mark')}>
                                        team succeed
                                    </mark>
                                </h2>
                                <div className="row row-cols-2 g-3">
                                    <FeaturesItem
                                        title="Choose a view"
                                        src={icons.feIcon1}
                                    />
                                    <FeaturesItem
                                        title="Meet your new butler"
                                        src={icons.feIcon2}
                                    />
                                    <FeaturesItem
                                        title="Dive into the details"
                                        src={icons.feIcon3}
                                    />
                                    <FeaturesItem
                                        title="Power up"
                                        src={icons.feIcon4}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
