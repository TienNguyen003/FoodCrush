import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { SearchIcon } from '~/component/Icons/icon';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('logo')}>
                <img
                    className={cx('img')}
                    src="https://i.imgur.com/aZxY6rG.png"
                    alt="logo"
                />
                <h3 className={cx('name')}>FoodieCrush</h3>
            </div>
            <div className={cx('search-meals')}>
                <div className={cx('search')}>
                    <input
                        type="text"
                        className={cx('search-input')}
                        placeholder="For example: American..."
                    />
                    <div className={cx('icon')}>
                        <SearchIcon className={cx('icon-search')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
