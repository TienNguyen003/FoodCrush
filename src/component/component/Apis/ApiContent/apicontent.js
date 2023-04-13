/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import NoteMeal from '../../NoteMeal/notemeal';
import styles from './apicontent.module.scss';
import './apicontent.css';

const cx = classNames.bind(styles);
const setDataLocal = JSON.parse(localStorage.getItem('mealsData'))
    ? JSON.parse(localStorage.getItem('mealsData'))
    : [];
let array = {};

function ApiContent({ value }) {
    const [dataResult, setDataResult] = useState([]);

    const mealRef = useRef();
    const buttonRef = useRef();
    const detailContent = useRef();
    const buttonClose = useRef();
    const NoteRef = useRef();

    useEffect(() => {
        const myInterval = setInterval(() => {
            if (value !== '') {
                fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`)
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.meals !== null) {
                            setDataResult(data.meals);
                            const interval2 = setInterval(() => {
                                const buttonAdd = document.querySelectorAll(
                                    '.apicontent_add-btn__qXjy7',
                                );
                                buttonAdd.forEach((button, index) => {
                                    array[index] = 0;
                                    button.onclick = () => {
                                        array[index]++;
                                        fetch(
                                            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${button.dataset.oder}`,
                                        )
                                            .then((res) => res.json())
                                            .then((data) => {
                                                if (array[index] < 2) setDataLocal.push(data.meals);

                                                localStorage.setItem(
                                                    'dataMeals',
                                                    JSON.stringify(setDataLocal),
                                                );
                                            });
                                        NoteRef.current.querySelector(
                                            '.notemeal_note-meals__Ho-h5',
                                        ).style.display = 'block';
                                    };
                                });
                                buttonRef.current.onclick = (e) => {
                                    e.preventDefault();
                                    if (
                                        e.target.classList.contains('apicontent_recipe-btn__907mS')
                                    ) {
                                        mealRef.current.classList.add(
                                            'apicontent_showRecipe__jyMi5',
                                        );
                                        let mealItem =
                                            e.target.parentElement.parentElement.parentElement;
                                        fetch(
                                            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.index}`,
                                        )
                                            .then((res) => res.json())
                                            .then((data) => {
                                                watchYt(data.meals);
                                            });
                                        buttonClose.current.onclick = () => {
                                            mealRef.current.classList.remove(
                                                'apicontent_showRecipe__jyMi5',
                                            );
                                        };
                                    }
                                };
                            }, 1.5);
                            setTimeout(() => {
                                return clearInterval(interval2);
                            }, 2);
                        }
                    });
            }
        }, 1);

        setTimeout(() => {
            return clearInterval(myInterval);
        }, 2);
    }, [value]);

    function watchYt(meal) {
        meal = meal[0];
        let html = '';
        html = `
            <h2 class = "recipe-title">${meal.strMeal}</h2>
            <p class = "recipe-category">${meal.strCategory}</p>
            <div class = "recipe-meal-img">
                <img src = "${meal.strMealThumb}" alt = "">
            </div>
            <div class = "recipe-instruct">
                <p>${meal.strArea}</p>
                <h3>Instructions:</h3>
                <p>${meal.strInstructions}</p>
            </div>
            <div class = "recipe-link">
                <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
                <a href = "${meal.strSource}" target = "_blank" class="link">Read More</a>
            </div>
        `;

        detailContent.current.innerHTML = html;
    }

    return (
        <div className={cx('content')}>
            {dataResult.length !== 0 && (
                <>
                    <h3>Your Search Results:</h3>
                    <div className={cx('meal')} ref={buttonRef}>
                        {dataResult.map((item) => {
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
                                        <div className={cx('button')}>
                                            <a className={cx('recipe-btn')}>Get Recipe</a>
                                            <a className={cx('add-btn')} data-oder={item.idMeal}>
                                                Add Note
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={cx('meal-details')} ref={mealRef}>
                        <div className={cx('button-close')}>
                            <button
                                type="button"
                                className={cx('btn', 'recipe-close-btn')}
                                id="recipe-close-btn"
                                ref={buttonClose}
                            >
                                <FontAwesomeIcon icon={faClose} />
                            </button>
                        </div>

                        <div className={cx('meal-details-content')} ref={detailContent}></div>
                    </div>
                </>
            )}
            <div ref={NoteRef} className={cx('note-meal')}>
                <NoteMeal />
            </div>
        </div>
    );
}

export default memo(ApiContent);
