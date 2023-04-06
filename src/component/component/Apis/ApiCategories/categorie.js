import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './categorie.module.scss';

const cx = classNames.bind(styles);

function Categories() {
    const [dataCategories, setDataCategories] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((res) => res.json())
            .then((data) => {
                setDataCategories(data.categories.slice(0, 9));
            });
    }, []);

    return (
        <div className={cx('categories')}>
            {dataCategories.map((item) => {
                return (
                    <div
                        key={item.idCategory}
                        className={cx('categories-item')}
                    >
                        <img
                            className={cx('img')}
                            src={item.strCategoryThumb}
                            alt=""
                        />
                        <p className={cx('name')}>{item.strCategory}</p>
                        <p className={cx('desc')}>
                            {item.strCategoryDescription.slice(0, 339)}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default Categories;
