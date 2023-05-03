import classNames from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Debounce from './debounce';
import { SearchIcon } from '~/component/Icons/icon';
import styles from './header.module.scss';

const cx = classNames.bind(styles);

function Header({ parent }) {
    const [input, setInput] = useState('');
    const [inputValue, setInputValue] = useState('');

    let debounce = Debounce(input, 1000);
    const buttonRef = useRef();

    const sendData = () => {
        parent(debounce);
    };

    useEffect(() => {
        buttonRef.current.onclick = () => {
            setInputValue(debounce);
        };
    }, [debounce]);

    return (
        <div className={cx('header')}>
            <div className={cx('logo', 'animate__animated animate__swing')}>
                <img className={cx('img')} src="https://i.imgur.com/aZxY6rG.png" alt="logo" />
                <Link to={'/'} className={cx('name')}>
                    FoodieCrush
                </Link>
            </div>
            <div className={cx('change-web')}>
                <div className={cx('blogger')}>
                    <Link to={'/FoodCrush/blogger'} className={cx('go-blogger')}>
                        Blogger
                    </Link>
                    <p className={cx('pseudo-element')}>Blogger</p>
                </div>
                <div className={cx('search-meals', 'animate__animated animate__wobble')}>
                    <div className={cx('search')}>
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            className={cx('search-input')}
                            placeholder="For example: American..."
                        />
                        <div className={cx('icon')} ref={buttonRef} onClick={sendData}>
                            <SearchIcon className={cx('icon-search')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Header);
