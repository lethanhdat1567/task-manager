import classNames from 'classnames/bind';
import styles from './Features.module.scss';
const cx = classNames.bind(styles);

function FeaturesItem({ title, src }) {
    return (
        <div className="col">
            <div className={cx('item-heading')}>
                <img src={src} />
                <h3 className={cx('item-title')}>{title}</h3>
            </div>
            <p className={cx('desc')}>
                Nullam dignssim mauris, dictumst quisque.
            </p>
        </div>
    );
}

export default FeaturesItem;
