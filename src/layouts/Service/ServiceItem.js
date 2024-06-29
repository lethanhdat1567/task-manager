import classNames from 'classnames/bind';
import styles from './Service.module.scss';

const cx = classNames.bind(styles);

function ServiceItem({ title, desc, imgs, separate = false }) {
    return (
        <div className={cx('item')}>
            <div className={cx('img-wrapper', { separate })}>
                <img src={imgs} alt="" className={cx('image')} />
            </div>
            <div className={cx('info')}>
                <h3 className={cx('heading')}>{title}</h3>
                <p className={cx('desc')}>{desc}</p>
            </div>
        </div>
    );
}

export default ServiceItem;
