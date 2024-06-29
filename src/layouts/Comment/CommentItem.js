import styles from './Comment.module.scss';
import classNames from 'classnames/bind';
import imgs from '../../assets/images';
const cx = classNames.bind(styles);
function CommentItem({ name, desc }) {
    return (
        <div className="col">
            <div className={cx('item')}>
                <img src={imgs.comment1} className={cx('item-img')} />
                <p className={cx('item-desc')}>{desc}</p>
                <div className={cx('user')}>
                    <img src={imgs.avatar} className={cx('avatar')} />
                    <div className={cx('info')}>
                        <span className={cx('name')}>{name}</span>
                        <p className={cx('type')}>Developer</p>
                    </div>
                    <div className={cx('star-wrap')}>
                        <img src={imgs.star} className={cx('star')} />
                        <img src={imgs.star} className={cx('star')} />
                        <img src={imgs.star} className={cx('star')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentItem;
