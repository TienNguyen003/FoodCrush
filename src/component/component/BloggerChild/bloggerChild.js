import classNames from 'classnames/bind';
import { memo } from 'react';
import { arrImg } from '../../Image/index.js';
import img3 from '../../Image/3.jpg';
import styles from './bloggerChild.module.scss';

const cx = classNames.bind(styles);

function BloggerChild() {
    const imgIm = arrImg;
    let i = 1;

    setInterval(() => {
        const img = document.querySelector('.img');
        img.src = imgIm[i++];
        if (i > 7) {
            console.log(img3);
            img.src = img3;
            i = 1;
        }
    }, 5000);

    return (
        <>
            <div id="initial" className={cx('activate')}>
                <div className={cx('initial-header')}>
                    <h1>
                        Tien<span>Nguyen</span>
                    </h1>
                    <p>MY PERSONAL BLOG</p>
                </div>
            </div>
            <div id="slider">
                <div className={cx('imgBx')}>
                    <img src={img3} alt="" className={cx('img')} />
                </div>
            </div>
        </>
    );
}

export default memo(BloggerChild);
