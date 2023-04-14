import classNames from 'classnames/bind';
import styles from './detail.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Detail() {
    const [dataAPI, setDataAPI] = useState([]);
    const [ingredient, setIngredient] = useState([]);
    const [spice, setSpice] = useState([]);

    let currentUrl = window.location.href;
    let newURL;
    if (currentUrl.includes('http://localhost:3001/@')) {
        newURL = currentUrl.replace('http://localhost:3001/@', '');
    }
    useEffect(() => {
        let arrIngredient = [];
        let arrSpice = [];
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${newURL}`)
            .then((res) => res.json())
            .then((data) => {
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
            });
    }, [newURL]);

    return (
        <div className={cx('detail-meal')}>
            <div className={cx('info-meal')}>
                <h3>{dataAPI.strMeal}</h3>
                <img className={cx('meal-image')} src={dataAPI.strMealThumb} alt="" />
            </div>
            <div className={cx('meal-recipe')}>
                <h3>Công thức nấu ăn</h3>
                <div className={cx('meal-desc')}>{dataAPI.strInstructions}</div>
                <h3 className={cx('ingredient')}>Nguyên liệu cần chuẩn bị</h3>
                <div className={cx('meal-ingredient')}>
                    {ingredient.map((item, index) => {
                        return (
                            <div key={index}>
                                <p>
                                    {index + 1}. {item}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <h3 className={cx('ingredient')}>Gia vị cần chuẩn bị</h3>
                <div className={cx('meal-ingredient')}>
                    {spice.map((item, index) => {
                        return (
                            <div key={index}>
                                <p>
                                    {index + 1}: {item}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Detail;
