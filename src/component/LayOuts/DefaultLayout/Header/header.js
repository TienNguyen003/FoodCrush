import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { SearchIcon } from '~/component/Icons/icon';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Header({ parent }) {
    const [valueInput, setValueInput] = useState('');

    const buttonRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        buttonRef.current.onclick = (e) => {
            inputRef.current.value === ''
                ? e.preventDefault()
                : setValueInput(inputRef.current.value);
        };
    }, []);

    const sendData = useCallback(() => {
        return () => {
            parent(valueInput);
        };
    });

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
                        ref={inputRef}
                        type="text"
                        className={cx('search-input')}
                        placeholder="For example: American..."
                    />
                    <div
                        className={cx('icon')}
                        ref={buttonRef}
                        onClick={sendData()}
                    >
                        <SearchIcon className={cx('icon-search')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Header);
