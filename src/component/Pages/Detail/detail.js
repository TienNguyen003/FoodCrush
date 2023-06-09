/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import 'animate.css';
import styles from './detail.module.scss';

const cx = classNames.bind(styles);

function Detail() {
    const [dataAPI, setDataAPI] = useState([]);
    const [ingredient, setIngredient] = useState([]);
    const [spice, setSpice] = useState([]);

    let currentUrl = window.location.href;
    let newURL;
    if (currentUrl.includes('https://tiennguyen003.github.io/FoodCrush/@')) {
        newURL = currentUrl.replace('https://tiennguyen003.github.io/FoodCrush/@', '');
        newURL = parseInt(newURL);
    }

    useEffect(() => {
        let arrIngredient = [];
        let arrSpice = [];
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${newURL}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.meals !== null) {
                    setDataAPI(data.meals[0]);
                    Object.keys(data.meals[0]).forEach((key) => {
                        if (key.includes('strIngredient') && data.meals[0][key] !== '') {
                            arrIngredient.push(data.meals[0][key]);
                            setIngredient(arrIngredient);
                        }
                        if (key.includes('strMeasure') && data.meals[0][key] !== '') {
                            arrSpice.push(data.meals[0][key]);
                            setSpice(arrSpice);
                        }
                    });
                }
            });
    }, [newURL]);

    console.log(123);

    if (newURL === undefined) {
        return null;
    } else {
        return (
            <div className={cx('detail-meal', 'animate__animated animate__jackInTheBox')}>
                <div className={cx('info-meal')}>
                    <h3 className={cx('animate__animated animate__rubberBand', 'name-meal')}>
                        {dataAPI.strMeal}
                    </h3>
                    <img
                        className={cx('meal-image', 'animate__animated animate__zoomIn')}
                        src={dataAPI.strMealThumb}
                        alt=""
                    />
                </div>
                <div className={cx('meal-recipe')}>
                    <h3 className={cx('animate__animated animate__bounceInUp')}>
                        Công thức nấu ăn
                    </h3>
                    <div className={cx('meal-desc', 'animate__animated animate__bounceInDown')}>
                        {dataAPI.strInstructions}
                    </div>
                    <h3
                        className={cx('ingredient', 'animate__animated animate__lightSpeedInRight')}
                    >
                        Nguyên liệu cần chuẩn bị
                    </h3>
                    <div
                        className={cx(
                            'meal-ingredient',
                            'animate__animated animate__bounceInRight',
                        )}
                    >
                        {ingredient.map((item, index) => {
                            // if (item !== null)
                            return (
                                <div key={index}>
                                    <p>
                                        {index + 1}. {item}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <h3 className={cx('ingredient', 'animate__animated animate__lightSpeedInLeft')}>
                        Gia vị cần chuẩn bị
                    </h3>
                    <div
                        className={cx('meal-ingredient', 'animate__animated animate__bounceInLeft')}
                    >
                        {spice.map((item, index) => {
                            if (item !== null)
                                return (
                                    <div key={index}>
                                        <p>
                                            {index + 1}. {item}
                                        </p>
                                    </div>
                                );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;
