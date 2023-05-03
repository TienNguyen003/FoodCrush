/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import styles from './apiingredient.module.scss';
import { Link } from 'react-router-dom';
import Button from '~/component/LayOuts/DefaultLayout/Button/button';

const cx = classNames.bind(styles);

function ApiIngredient({ inputText }) {
    const [dataApi, setDataApi] = useState([]);
    let inputValue = '';
    if (inputText === '') {
        inputValue = 'Chicken';
    } else {
        inputValue = inputText;
    }

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.meals !== null) setDataApi(data.meals);
                else {
                    alert('Không tìm thấy nguyên liệu');
                }
            });
    }, [inputValue]);

    return (
        <div className={cx('ingredient')}>
            {dataApi.map((item) => {
                return (
                    <div
                        className={cx('ingredient-meals', 'animate__animated animate__rubberBand')}
                        key={item.idMeal}
                    >
                        <img className={cx('img')} src={item.strMealThumb} alt="" />
                        <h3 className={cx('name-meal')}>{item.strMeal}</h3>
                        <Link to={`/FoodCrush/@${item.idMeal}`}>
                            <Button outline rounded small>
                                Details
                            </Button>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default memo(ApiIngredient);
