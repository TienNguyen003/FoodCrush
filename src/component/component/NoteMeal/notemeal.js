import classNames from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './notemeal.module.scss';

const cx = classNames.bind(styles);

function NoteMeal() {
    const [dataResult, setDataResult] = useState(() => {});

    const noteMeal = useRef();
    const closeNoteRef = useRef();

    useEffect(() => {
        const dataLocal = JSON.parse(localStorage.getItem('dataMeals'))
            ? JSON.parse(localStorage.getItem('dataMeals'))
            : [];
        console.log(dataLocal);
    }, []);

    return null;
    // (
    // <div ref={noteMeal}>
    //     <div className={cx('close-note')} ref={closeNoteRef}>
    //         <FontAwesomeIcon icon={faClose} />
    //     </div>

    //     {dataResult !== undefined && (
    //         <div className={cx('meal')}>
    //             <img
    //                 className={cx('img-meal')}
    //                 src={dataResult[0].strMealThumb}
    //                 alt=""
    //             />
    //             <div className={cx('area')}>
    //                 <p className={cx('name-meal')}>
    //                     {dataResult[0].strMeal}
    //                 </p>
    //                 <p className={cx('name-meal')}>
    //                     {dataResult[0].strArea}
    //                 </p>
    //             </div>
    //             <FontAwesomeIcon icon={faClose} />
    //         </div>
    //     )}
    // </div>
    // );
}

export default memo(NoteMeal);
