import classNames from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './notemeal.module.scss';

const cx = classNames.bind(styles);

function NoteMeal({ data, className }) {
    const [dataResult, setDataResult] = useState();

    const noteMeal = useRef();
    const closeNoteRef = useRef();

    useEffect(() => {
        if (data.length !== 0) {
            setDataResult(data);
        }
        // closeNoteRef.current.onclick = () => {
        //     console.log(noteMeal);
        //     noteMeal.current.classList.add('notemeal_hidden__gZHK7');
        // };
    }, [data]);

    return (
        <div className={cx('note-meal', className)} ref={noteMeal}>
            <div className={cx('close-note')} ref={closeNoteRef}>
                <FontAwesomeIcon icon={faClose} />
            </div>

            {dataResult !== undefined && (
                <div className={cx('meal')}>
                    <img
                        className={cx('img-meal')}
                        src={dataResult[0].strMealThumb}
                        alt=""
                    />
                    <div className={cx('area')}>
                        <p className={cx('name-meal')}>
                            {dataResult[0].strMeal}
                        </p>
                        <p className={cx('name-meal')}>
                            {dataResult[0].strArea}
                        </p>
                    </div>
                    <FontAwesomeIcon icon={faClose} />
                </div>
            )}
        </div>
    );
}

export default memo(NoteMeal);
