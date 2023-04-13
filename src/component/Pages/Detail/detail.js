import classNames from 'classnames/bind';
import styles from './detail.module.scss';

const cx = classNames.bind(styles);

function Detail() {
    // "homepage": "https://tiennguyen003.github.io/WeatherMe/",
    return <h1 className={cx('test')}>sao lai deo duoc vay dit con me may</h1>;
}

export default Detail;
