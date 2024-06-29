import styles from './Comment.module.scss';
import classNames from 'classnames/bind';
import CommentItem from './CommentItem';
const cx = classNames.bind(styles);

function Comment() {
    return (
        <section className={cx('comment')}>
            <div className={cx('container')}>
                <div className={cx('inner')}>
                    <div className="row">
                        <CommentItem
                            name={'Markus Barker'}
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
"
                        />
                        <CommentItem
                            name={'Markus Barker'}
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
"
                        />
                        <CommentItem
                            name={'Markus Barker'}
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Comment;
