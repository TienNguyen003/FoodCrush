import classNames from 'classnames/bind';
import styles from './detail.module.scss';

const cx = classNames.bind(styles);

function Detail() {
    return <h1 className={cx('test')}>Detail</h1>;
}

export default Detail;
