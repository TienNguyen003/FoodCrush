import classNames from 'classnames/bind';

import Categories from '../Apis/ApiCategories/categorie';
import styles from './homeMeals.module.scss';
import { memo } from 'react';

const cx = classNames.bind(styles);

function HomeMeals() {
    return (
        <div className={cx('content')}>
            <div className={cx('famous-quote')}>
                <div className={cx('famous-people-oli', 'animate__animated animate__swing')}>
                    <blockquote className="jamie">
                        “Real food doesn't have ingredients, real food is ingredients.”
                        <br />
                        <cite>Jamie Oliver</cite>
                    </blockquote>
                </div>
                <div className={cx('famous-people-ram', 'animate__animated animate__swing')}>
                    <blockquote className="jamie">
                        “There is nothing better than traveling the world and enjoying the best
                        food.”
                        <br />
                        <cite>Gordon Ramsay</cite>
                    </blockquote>
                </div>
                <div className={cx('famous-people-flay', 'animate__animated animate__swing')}>
                    <blockquote className="jamie">
                        “The greatest gift of a chef is the satisfaction of the eater.”
                        <br />
                        <cite>Bobby Flay</cite>
                    </blockquote>
                </div>
            </div>
            <div className={cx('categories')}>
                <h3 className={cx('meal categories')}>Meal categories</h3>
                <Categories />
            </div>
        </div>
    );
}

export default memo(HomeMeals);
