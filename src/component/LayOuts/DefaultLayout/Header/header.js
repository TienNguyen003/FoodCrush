import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { SearchIcon } from '~/component/Icons/icon';
import { memo, useEffect, useRef, useState } from 'react';
import Apicontent from '~/component/component/Apis/ApiContent/apicontent';

const cx = classNames.bind(styles);

function Header() {
    const [valueInput, setValueInput] = useState('');

    const buttonRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        buttonRef.current.onclick = (e) => {
            inputRef.current.value === ''
                ? e.preventDefault()
                : setValueInput(inputRef.current.value);
            fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?a=${inputRef.current.value}`,
            )
                .then((res) => res.json())
                .then((data) => {
                    dataResult = data.meals;
                });
        };
    }, []);

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
                    <div className={cx('icon')} ref={buttonRef}>
                        <SearchIcon className={cx('icon-search')} />
                    </div>
                </div>
            </div>

            <Apicontent dataValue={valueInput} />
        </div>
    );
}

export let dataResult;
export default memo(Header);
