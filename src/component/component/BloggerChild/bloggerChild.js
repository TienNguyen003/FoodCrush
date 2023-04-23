import classNames from 'classnames/bind';
import { memo } from 'react';
import { arrImg } from '../../Image/index.js';
import { SettingIcon } from '~/component/Icons/icon.js';
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
                    <h1 className={cx('title')}>
                        𝐓𝐢𝐞𝐧<span>𝐍𝐠𝐮𝐲𝐞𝐧</span>
                    </h1>
                    <p>𝚅𝚒𝚗𝚌𝚎𝚗𝚣𝚘 𝙻𝚎𝚘𝚗𝚊𝚛𝚍𝚘</p>
                </div>
            </div>
            <div id="slider">
                <div className={cx('imgBx')}>
                    <img src={img3} alt="" className={cx('img')} />
                </div>
            </div>
            <div className={cx('posts-blogger')}>
                <div className={cx('posts')}>
                    <div className={cx('post')}>
                        <div className={cx('user')}>
                            <img
                                className={cx('img-user')}
                                src="https://i.pinimg.com/564x/46/12/a0/4612a013b032ca9312c8531b80c5a455.jpg"
                                alt=""
                            />
                            <div className={cx('info-user')}>
                                <h3 className={cx('name-user')}>Candyy</h3>
                                <p className={cx('middle-name')}>CanDyy003</p>
                            </div>
                            <SettingIcon />
                        </div>
                        <img
                            className={cx('img-content')}
                            src="https://w.wallhaven.cc/full/6o/wallhaven-6ol61l.jpg"
                            alt=""
                        />
                        <p className={cx('content-post')}>
                            Có người nghĩ, một món ăn ngon đầu tiên là phải đẹp, chỉ khi đẹp mới cảm
                            thấy thích, mới có ham muốn ăn món ăn đó. Nhưng với người khác, một món
                            ăn ngon là ở tấm lòng người nấu ăn và cả cách người dùng thưởng thức nó.
                            Tình cảm yêu thương đặt vào món ăn như một gia vị giúp món ăn thêm đậm
                            đà. Vì thế, khi biết trân trọng công sức người nấu ăn, chúng ta sẽ thấy
                            ngon miệng hơn.{' '}
                        </p>
                    </div>

                    <div className={cx('post')}>
                        <div className={cx('user')}>
                            <img
                                className={cx('img-user')}
                                src="https://i.pinimg.com/564x/75/eb/7a/75eb7a9e1d36c3d07463097715439292.jpg"
                                alt=""
                            />
                            <div className={cx('info-user')}>
                                <h3 className={cx('name-user')}>𝚅𝚒𝚗𝚌𝚎𝚗𝚣𝚘</h3>
                                <p className={cx('middle-name')}>𝚅𝚒𝚗𝚌𝚎𝚗𝚣𝚘 𝙻𝚎𝚘𝚗𝚊𝚛𝚍𝚘</p>
                            </div>
                            <SettingIcon />
                        </div>
                        <img
                            className={cx('img-content')}
                            src="https://beptueu.vn/hinhanh/tintuc/top-15-hinh-anh-mon-an-ngon-viet-nam-khien-ban-khong-the-roi-mat-1.jpg"
                            alt=""
                        />
                        <p className={cx('content-post')}>
                            Việt Nam được biết đến với nền ẩm thực cự kì đa dạng và phong phú. Vì
                            vậy, hầu hết mọi du khách khi đến với Việt Nam đều không thể nào quên
                            được những món ăn giản dị, dân giã mang đậm bản sắc của người Việt.
                        </p>
                    </div>

                    <div className={cx('post')}>
                        <div className={cx('user')}>
                            <img
                                className={cx('img-user')}
                                src="https://i.pinimg.com/736x/67/01/90/670190eea21c354c20d4ecb0097bce2a.jpg"
                                alt=""
                            />
                            <div className={cx('info-user')}>
                                <h3 className={cx('name-user')}>𝐓𝐢𝐞𝐧</h3>
                                <p className={cx('middle-name')}>𝐓𝐢𝐞𝐧 𝐍𝐠𝐮𝐲𝐞𝐧</p>
                            </div>
                            <SettingIcon />
                        </div>
                        <img
                            className={cx('img-content')}
                            src="https://w.wallhaven.cc/full/x1/wallhaven-x155ld.jpg"
                            alt=""
                        />
                        <p className={cx('content-post')}>
                            Ẩm thực cũng là nơi để các thành viên trong gia đình có thể tìm hiểu về
                            văn hóa ẩm thực của nhau, học hỏi kinh nghiệm nấu nướng và cùng nhau
                            khám phá những món ăn mới. Vì vậy, hãy dành thời gian để cùng nhau ăn
                            uống trong gia đình để tăng thêm sự gần gũi và đoàn kết với những người
                            thân yêu nhất của mình.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(BloggerChild);
