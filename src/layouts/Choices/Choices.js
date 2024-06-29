import Button from '../Button/Button';
import styles from './Choices.module.scss';
import classNames from 'classnames/bind';
import ChoicesItem from './choicesItem';
import imgs from '../../assets/images';

const cx = classNames.bind(styles);

function Choices() {
    return (
        <section className={cx('Choices')}>
            <div className="container">
                <div className={cx('inner')}>
                    <div className="row row-cols-2">
                        <div className="col">
                            <h2 className={cx('heading')}>
                                From the
                                <mark className={cx('mark')}>big picture</mark>
                                to every tiny detail, we got you covered.
                            </h2>
                            <div className={cx('wrap')}>
                                <ChoicesItem
                                    title="For developers"
                                    desc="Exepteur sint occaecat cupidatat non proident, 
                                    mollit laborum - semper quis lectus nulla."
                                />
                                <ChoicesItem
                                    title="For designers"
                                    desc="Exepteur sint occaecat cupidatat non proident, 
                                    mollit laborum - semper quis lectus nulla."
                                />
                                <ChoicesItem
                                    title="For teams"
                                    desc="Exepteur sint occaecat cupidatat non proident, 
                                    mollit laborum - semper quis lectus nulla."
                                />
                            </div>
                        </div>
                        <div className="col">
                            <Button outline className={cx('btn-choice')}>
                                Explore Now
                            </Button>
                            <div className={cx('banner')}>
                                <img className={cx('choi1')} src={imgs.choi1} />
                                <img className={cx('choi2')} src={imgs.choi2} />
                                <img className={cx('choi3')} src={imgs.choi3} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Choices;
