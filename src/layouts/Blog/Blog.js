import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import BlogItem from './BlogItem';
import imgs from '../../assets/images';
const cx = classNames.bind(styles);
function Blog() {
    return (
        <section className={cx('blog')}>
            <div className="container">
                <div className={cx('inner')}>
                    <h2 className={cx('heading')}>
                        <mark className={cx('mark')}>Refreshing</mark> news for
                        developers and desigers
                    </h2>
                    <div className="row row-cols-3">
                        <div className="col">
                            <BlogItem
                                img={imgs.blog1}
                                title="The quick brown fox jumped over the lazy dog."
                            />
                        </div>
                        <div className="col">
                            <BlogItem
                                img={imgs.blog2}
                                title="The quick brown fox jumped over the lazy dog."
                            />
                        </div>
                        <div className="col">
                            <BlogItem
                                img={imgs.blog3}
                                title="The quick brown fox jumped over the lazy dog."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
