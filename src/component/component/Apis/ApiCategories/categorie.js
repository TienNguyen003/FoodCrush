import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';

import styles from './categorie.module.scss';
import Button from '~/component/LayOuts/DefaultLayout/Button/button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Categories({ quantity = 9, displayMore = false }) {
    const [btnCategories, setBtnCategories] = useState([]);
    const [dataCategories, setDataCategories] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
            .then((res) => res.json())
            .then((data) => {
                setBtnCategories(data.meals);
            });

        setInterval(() => {
            const btnMeal = document.querySelectorAll('.categorie_btn-meal-item__NS6Im');
            btnMeal.forEach((btn) => {
                btn.onclick = () => {
                    for (let i = 0; i < btnMeal.length; i++) {
                        btnMeal[i].classList.remove('Button_primary__Wl-ml');
                    }
                    btn.classList.add('Button_primary__Wl-ml');

                    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${btn.innerText}`)
                        .then((res) => res.json())
                        .then((data) => {
                            setDataCategories(data.meals.slice(0, quantity));
                        });
                };
            });
        }, 100);
    }, [quantity]);

    return (
        <div className={cx('categories')}>
            <div className={cx('bnt-meal')}>
                {btnCategories.map((btn, index) => {
                    return (
                        <Button
                            className={cx('btn-meal-item', 'animate__animated animate__rubberBand')}
                            rounded
                            key={index}
                        >
                            {btn.strCategory}
                        </Button>
                    );
                })}
            </div>
            <div className={cx('categorie')}>
                {dataCategories.map((item) => {
                    return (
                        <div
                            key={item.idMeal}
                            className={cx(
                                'categories-item',
                                'animate__animated animate__rubberBand animate__repeat-2',
                            )}
                        >
                            <img className={cx('img')} src={item.strMealThumb} alt="" />
                            <p className={cx('name-meal')}>{item.strMeal}</p>

                            {displayMore === true && (
                                <Link to={`/FoodCrush/@${item.idMeal}`}>
                                    <Button className={cx('btn')} outline rounded>
                                        See detail
                                    </Button>
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default memo(Categories);
