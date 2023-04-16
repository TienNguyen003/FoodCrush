import classNames from 'classnames/bind';

import Categories from '../Apis/ApiCategories/categorie';
import styles from './homeMeals.module.scss';
import { memo } from 'react';
import { Link } from 'react-router-dom';

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
                <div className={cx('uses-cate')}>
                    <h3 className={cx('meal categories', 'animate__animated animate__backInLeft')}>
                        Meal categories
                    </h3>
                    <Link
                        to={'/details'}
                        className={cx('see-detail', 'animate__animated animate__backInRight')}
                    >
                        See details
                    </Link>
                </div>
                <Categories />
            </div>
        </div>
    );
}

export default memo(HomeMeals);
