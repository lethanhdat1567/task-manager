import classNames from 'classnames/bind';
import styles from './Task.module.scss';

import TaskItem from './TaskItem';
import { icons } from '../../assets/icons';
import imgs from '../../assets/images';

const cx = classNames.bind(styles);

function Task() {
    return (
        <section className={cx('task')}>
            <div className={cx('container')}>
                <div className="row row-cols-2">
                    <section className={cx('info')}>
                        <h2 className={cx('heading')}>
                            Okay, <mark className={cx('mark')}>Let’s</mark> see
                            D’task in numbers
                        </h2>
                        <p className={cx('desc')}>
                            Powering a productive team means using a powerful
                            tool (and plenty of snacks). From meetings and
                            projects to events and goal setting, D'taak
                            intuitive features give any team the ability to
                            quickly set up and customize workflows for just
                            about anything
                        </p>
                        <div className={cx('items')}>
                            <img className={cx('slide')} />
                            <div className={cx('wrapper-items')}>
                                <img
                                    className={cx('more')}
                                    src={icons.task_icon1}
                                    alt=""
                                />
                                <div className={cx('wrap')}>
                                    <TaskItem title="12M" desc="Support" />
                                    <TaskItem
                                        title="16"
                                        desc="Active User"
                                        active
                                    />
                                    <TaskItem title="7/24" desc="Language" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className={cx('banner')}>
                        <img
                            src={imgs.task_decor}
                            alt=""
                            className={cx('banner-decor')}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Task;
