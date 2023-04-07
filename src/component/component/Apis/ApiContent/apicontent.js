/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';

import styles from './apicontent.module.scss';

const cx = classNames.bind(styles);

function ApiContent({ dataValue }) {
    let valueSend;
    if (dataValue === '') {
        valueSend = 'VietNamese';
    } else {
        valueSend = dataValue;
    }

    const [dataResult, setDataResult] = useState([]);

    const mainRef = useRef();

    useEffect(() => {
        fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=${valueSend}`,
        )
            .then((res) => res.json())
            .then((data) => setDataResult(data.meals));

        // if (mainRef.current.innerHTML !== undefined) {
            const buttonClick = mainRef.current.querySelectorAll(
                '.apicontent_meal-item__refHX',
            );
            console.log(buttonClick);
        // }
    }, [valueSend]);

    return (
        <div className={cx('content')}>
            <h3>Your Search Results:</h3>
            <div className={cx('meal')} ref={mainRef}>
                {dataResult.length !== 0 &&
                    dataResult.map((item) => {
                        return (
                            <div
                                key={item.idMeal}
                                className={cx('meal-item')}
                                data-index={item.idMeal}
                            >
                                <div className={cx('meal-img')}>
                                    <img
                                        src={item.strMealThumb}
                                        alt="food"
                                        className={cx('img-food')}
                                    />
                                </div>
                                <div className={cx('meal-name')}>
                                    <h3>{item.strMeal}</h3>
                                    <a className={cx('recipe-btn')}>
                                        Get Recipe
                                    </a>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default memo(ApiContent);
