import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './categorie.module.scss';
import Button from '~/component/LayOuts/DefaultLayout/Button/button';

const cx = classNames.bind(styles);

function Categories() {
    const [btnCategories, setBtnCategories] = useState([]);
    const [dataCategories, setDataCategories] = useState([]);

    useEffect(() => {
        let arrBtn = [];
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
            .then((res) => res.json())
            .then((data) => {
                data.meals.map((item) => arrBtn.push(item.strCategory));
                setBtnCategories(arrBtn);
            });
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((res) => res.json())
            .then((data) => {
                setDataCategories(data.categories.slice(0, 9));
            });
    }, []);

    return (
        <div className={cx('categories')}>
            <div className={cx('bnt-meal')}>
                {btnCategories.map((btn, index) => {
                    return (
                        <Button className={cx('btn-meal-item')} outline rounded key={index}>
                            {btn}
                        </Button>
                    );
                })}
            </div>
            <div className={cx('categorie')}>
                {dataCategories.map((item) => {
                    return (
                        <div key={item.idCategory} className={cx('categories-item')}>
                            <img className={cx('img')} src={item.strCategoryThumb} alt="" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Categories;
