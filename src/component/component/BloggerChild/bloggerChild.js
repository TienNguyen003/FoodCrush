import classNames from 'classnames/bind';
import styles from './bloggerChild.module.scss';

const cx = classNames.bind(styles);

function BloggerChild() {
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
                    <img
                        src="https://znews-photo.zingcdn.me/w660/Uploaded/qfrqy/2016_05_04/BMWi8Roadster.jpg"
                        alt=""
                    />
                    <div className={cx('imgBx-text')}>Welcome to my Blog</div>
                </div>
            </div>
        </>
    );
}

export default BloggerChild;
