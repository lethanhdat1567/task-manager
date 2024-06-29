import classNames from 'classnames/bind';
import styles from './Task.module.scss';

const cx = classNames.bind(styles);
function TaskItem({ title, desc, active }) {
    return (
        <div className={cx('item', { active })}>
            <span className={cx('item-heading')}>{title}</span>
            <p className={cx('item-desc')}>{desc}</p>
        </div>
    );
}

export default TaskItem;
