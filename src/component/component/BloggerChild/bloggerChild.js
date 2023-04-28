import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import { arrImg } from '../../Image/index.js';
import { SettingIcon } from '~/component/Icons/icon.js';
import img3 from '../../Image/3.jpg';
import styles from './bloggerChild.module.scss';
import Button from '~/component/LayOuts/DefaultLayout/Button/button.js';

const cx = classNames.bind(styles);

function BloggerChild() {
    const [avatar, setAvatar] = useState();

    const imgIm = arrImg;
    let i = 1;
    let a = 1;

    setInterval(() => {
        const img = document.querySelector('.img');
        img.src = imgIm[i++];
        if (i > 7) {
            img.src = img3;
            i = 1;
        }
    }, 5000);

    const handleClickInput = () => {
        const postFile = document.querySelector('.bloggerChild_posted-file__8bqUw');
        const showPost = document.querySelector('.bloggerChild_posted-content__kf2gr');
        if (a == 1) {
            showPost.style.display = 'block';
            a++;
        } else {
            showPost.style.display = 'none';
            a--;
        }
        const postImg = document.querySelector('.bloggerChild_icon__in05-');

        postImg.onclick = () => {
            if (i == 1) {
                postFile.style.display = 'flex';
                i++;
            } else {
                postFile.style.display = 'none';
                i--;
            }
        };
    };

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);
    const handlePreviewImg = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        const label = document.getElementsByClassName('bloggerChild_label__+ihGI');
        label[0].style.display = 'none';
        setAvatar(file);
    };

    const handleClickButton = (e) => {
        const postImg = e.target.parentElement.querySelector('.bloggerChild_img-local__Tpn5-');
        const textArea = e.target.parentElement.querySelector('.bloggerChild_posted-input__FIawM');
        let html = `
        <div class="bloggerChild_user__iQ1FG">
            <img
                class="bloggerChild_img-user__FHj+-"
                src="https://haycafe.vn/wp-content/uploads/2022/02/Avatar-trang-cute.jpg"
                alt=""
            />
            <div class="bloggerChild_info-user__JGsrC">
                <p class="middle-name">𝚅𝚒𝚗𝚌𝚎𝚗𝚣𝚘 𝙻𝚎𝚘𝚗𝚊𝚛𝚍𝚘</p>
            </div>
            <SettingIcon />
        </div>
        <img
            class="bloggerChild_img-content__Ioxpc"
            src=${postImg.src}
            alt=""
        />
        <p class="bloggerChild_content-post__TwMO3">${textArea.value}</p>
        `;
        e.target.parentElement.parentElement.querySelector(
            '.bloggerChild_post-user__U29tC',
        ).innerHTML = html;
    };

    return (
        <div>
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

                    <div className={cx('post-user')}></div>

                    <div className={cx('more-post')}>
                        <img
                            className={cx('more-img')}
                            src="https://haycafe.vn/wp-content/uploads/2022/02/Avatar-trang-cute.jpg"
                            alt=""
                        />
                        <p className={cx('more-input')} onClick={(e) => handleClickInput(e)}>
                            Bạn đang nghĩ gì thế?
                        </p>
                    </div>

                    <div className={cx('posted-content')}>
                        <div className={cx('posted-info-user')}>
                            <img
                                className={cx('posted-img')}
                                src="https://haycafe.vn/wp-content/uploads/2022/02/Avatar-trang-cute.jpg"
                                alt=""
                            />
                            <p className={cx('posted-name')}>𝚅𝚒𝚗𝚌𝚎𝚗𝚣𝚘 𝙻𝚎𝚘𝚗𝚊𝚛𝚍𝚘</p>
                        </div>
                        <textarea
                            className={cx('posted-input')}
                            type="text"
                            placeholder="Hãy chia sẻ trải nghiệm của bạn..."
                        />
                        <div className={cx('posted-file')}>
                            {avatar && (
                                <img className={cx('img-local')} src={avatar.preview} alt=""></img>
                            )}
                            <label htmlFor="input-file" className={cx('label')}>
                                <img
                                    className={cx('more-img-post')}
                                    src="https://i.imgur.com/765WmFW.png"
                                    alt=""
                                />
                                Thêm ảnh
                            </label>
                            <input
                                className={cx('posted-file-img')}
                                onChange={handlePreviewImg}
                                type="file"
                                id="input-file"
                            />
                        </div>
                        <div className={cx('add-func')}>
                            <p className={cx('posted-title')}>Thêm vào bài viết của bạn</p>
                            <img
                                className={cx('icon')}
                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png"
                                alt=""
                            />
                            <img
                                className={cx('icon')}
                                src="https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-add-user-icon-png-image_762930.jpg"
                                alt=""
                            />
                        </div>

                        <button
                            className={cx('button-up')}
                            children={'Đăng'}
                            onClick={(e) => handleClickButton(e)}
                        />
                    </div>
                </div>
                <div className={cx('introduce-yourself')}>
                    <div className={cx('yourself')}>
                        <img
                            className={cx('img-yourself')}
                            src="https://i.pinimg.com/564x/e7/13/51/e71351b8438a22fd903921cff702e0ac.jpg"
                            alt=""
                        />
                        <h3 className={cx('name-me')}>𝐕𝐢𝐧𝐜𝐞𝐧𝐳𝐨 𝐋𝐞𝐨𝐧𝐚𝐫𝐝𝐨</h3>
                        <p>
                            𝐕𝐢𝐧𝐜𝐞𝐧𝐳𝐨 𝐋𝐞𝐨𝐧𝐚𝐫𝐝𝐨, the name symbolizes strength, courage and the ability
                            to overcome obstacles
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(BloggerChild);
