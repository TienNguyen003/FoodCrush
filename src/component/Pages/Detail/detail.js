import classNames from 'classnames/bind';
import styles from './detail.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Detail() {
    const [dataAPI, setDataAPI] = useState([]);

    let currentUrl = window.location.href;
    let newURL;
    if (currentUrl.includes('http://localhost:3001/@')) {
        newURL = currentUrl.replace('http://localhost:3001/@', '');
    }
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${newURL}`)
            .then((res) => res.json())
            .then((data) => setDataAPI(data.meals[0]));
    }, [newURL]);
    
    console.log(dataAPI);

    const arr = [
        'chicken',
        'chicken1',
        'chicken2',
        'chicken3',
        'chicken4',
        'chicken5',
        'chicken6',
        'chicken7',
        'chicken8',
        'chicken9',
    ];

    return (
        <div className={cx('detail-meal')}>
            <div className={cx('info-meal')}>
                <h3>{dataAPI.strMeal}</h3>
                <img className={cx('meal-image')} src={dataAPI.strMealThumb} alt="" />
            </div>
            <div className={cx('meal-recipe')}>
                <h3>Công thức nấu ăn</h3>
                <div className={cx('meal-desc')}>{dataAPI.strInstructions}</div>
                <div className={cx('meal-ingredient')}>
                    {arr.map((item, index) => {
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

export default Detail;
