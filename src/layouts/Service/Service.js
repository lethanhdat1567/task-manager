import classNames from 'classnames/bind';
import styles from './Service.module.scss';

import imgs from '../../assets/images';
import ServiceItem from './ServiceItem';

const cx = classNames.bind(styles);
function Service() {
    return (
        <section className={cx('service')}>
            <div className={cx('container')}>
                <div className={cx('wrapper-items')}>
                    <div className="row row-cols-3">
                        <ServiceItem
                            title={'Structured Reports'}
                            desc={
                                'Sed rhoncus sit sed tellus donec lorem lectus nunc, ornare'
                            }
                            imgs={imgs.service_img1}
                        />
                        <ServiceItem
                            title={'Cloud System'}
                            desc={
                                'Sed rhoncus sit sed tellus donec lorem lectus nunc, ornare'
                            }
                            imgs={imgs.service_img2}
                            separate
                        />
                        <ServiceItem
                            title={'24/7 Support'}
                            desc={
                                'Sed rhoncus sit sed tellus donec lorem lectus nunc, ornare'
                            }
                            imgs={imgs.service_img3}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;
