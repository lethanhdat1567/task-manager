import { Link } from 'react-router-dom';
import styles from './Choices.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function ChoicesItem({ title, desc }) {
    return (
        <div className={cx('item')}>
            <h3 className={cx('item-heading')}>{title}</h3>
            <p className={cx('item-desc')}>{desc}</p>
        </div>
    );
}

export default ChoicesItem;
