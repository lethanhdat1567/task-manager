import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function BlogItem({ title, img }) {
    return (
        <section className={cx('item')}>
            <img src={img} className={cx('item-img')} />
            <p className={cx('title')}>{title}</p>
            <div className={cx('loading')}></div>
            <a className={cx('link')}>View All</a>
        </section>
    );
}

export default BlogItem;
