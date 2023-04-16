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

    const btnRef = useRef();

    useEffect(() => {
        btnRef.current.onclick = () => {
            setNewValue(inputValue);
        };
    }, [inputValue]);

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
                    <div className={cx('search', 'animate__animated animate__wobble')}>
                        <input
                            className={cx('search-input')}
                            type="text"
                            placeholder="Search Ingredient..."
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <div className={cx('icon-search')} ref={btnRef}>
                            <SearchIcon />
                        </div>
                    </div>
                </div>
                <div className={cx('result-ingredient')}>
                    <ApiIngredient inputText={newValue} />
                </div>
            </div>
        </>
    );
}

export default memo(SeeDetails);
