import classNames from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';
import Categorie from '~/component/component/Apis/ApiCategories/categorie';

import { SearchIcon } from '~/component/Icons/icon';
import ApiIngredient from '~/component/component/Apis/ApiIngredient/apiingredient';
import styles from './seedetail.module.scss';

const cx = classNames.bind(styles);

function SeeDetails() {
    const [inputValue, setInputValue] = useState('');
    const [newValue, setNewValue] = useState('');
    const [valueTwo, setValueTwo] = useState('');

    const btnRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        const select = document.querySelector('.select');
        let html = '';
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
            .then((res) => res.json())
            .then((data) =>
                data.meals.slice(0, 300).forEach((item) => {
                    html += `<option value=${item.strIngredient}>${item.strIngredient}</option>`;
                    select.innerHTML = html;
                }),
            );
        select.onchange = () => {
            setValueTwo(select.value);
        };
        if (valueTwo === select.value) {
            btnRef.current.onclick = () => {
                setValueTwo('');
                setNewValue(inputRef.current.value);
            };
        }
    }, [valueTwo]);

    return (
        <>
            <div className={cx('see-detail')}>
                <h3 className={cx('meal-categories', 'animate__animated animate__backInLeft')}>
                    Meal categories
                </h3>
                <Categorie quantity={40} displayMore={true} />
            </div>
            <div className={cx('meal-ingredient')}>
                <div className={cx('misson')}>
                    <h3 className={cx('ingredient-name', 'animate__animated animate__backInLeft')}>
                        Ingredient
                    </h3>
                    <div className={cx('search-two')}>
                        <div className={cx('search', 'animate__animated animate__wobble')}>
                            <input
                                className={cx('search-input')}
                                type="text"
                                placeholder="Search Ingredient..."
                                ref={inputRef}
                            />
                            <div className={cx('icon-search')} ref={btnRef}>
                                <SearchIcon />
                            </div>
                        </div>
                        <select
                            className={cx('select', 'animate__animated animate__wobble')}
                        ></select>
                    </div>
                </div>
                <div className={cx('result-ingredient')}>
                    <ApiIngredient inputText={valueTwo !== '' ? valueTwo : newValue} />
                </div>
            </div>
        </>
    );
}

export default memo(SeeDetails);
