import classNames from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './notemeal.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function NoteMeal(props) {
    const [dataResult, setDataResult] = useState([]);

    const noteMeal = useRef();
    const closeNoteRef = useRef();

    useEffect(() => {
        setInterval(() => {
            const dataLocal = JSON.parse(localStorage.getItem('dataMeals'))
                ? JSON.parse(localStorage.getItem('dataMeals'))
                : [];
            setDataResult(dataLocal);
            // const buttonDelete = document.querySelectorAll('.icon-delete-meal');
            // buttonDelete.forEach((deletebtn) => {
            //     deletebtn.onclick = () => {
            //         dataLocal.forEach((data, index) => {
            //             if (data[0].idMeal === deletebtn.parentElement.dataset.index) {
            //                 dataLocal.splice(index, 1);
            //                 localStorage.setItem('dataMeals', JSON.stringify(dataLocal));
            //             }
            //         });
            //     };
            // });
        }, 500);
        closeNoteRef.current.onclick = () => {
            noteMeal.current.style.display = 'none';
        };
    }, []);

    return (
        <div ref={noteMeal} className={cx('note-meals')}>
            <div className={cx('close-note')} ref={closeNoteRef}>
                <FontAwesomeIcon icon={faClose} />
            </div>

            {dataResult !== [] &&
                dataResult.map((item, index) => {
                    return (
                        <div className={cx('meal')} key={index} data-index={item[0].idMeal}>
                            <img className={cx('img-meal')} src={item[0].strMealThumb} alt="" />
                            <div className={cx('area')}>
                                <Link
                                    to={`/@${item[0].idMeal}`}
                                    className={cx('name-meal', 'name-detail')}
                                >
                                    {item[0].strMeal}
                                </Link>
                                <p className={cx('name-meal')}>{item[0].strArea}</p>
                            </div>
                            <FontAwesomeIcon icon={faClose} className={cx('icon-delete-meal')} />
                        </div>
                    );
                })}
        </div>
    );
}

export default memo(NoteMeal);
