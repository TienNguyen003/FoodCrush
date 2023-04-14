import classNames from 'classnames/bind';
import styles from './detail.module.scss';

const cx = classNames.bind(styles);

function Detail() {
    const arr = [
        'chicken',
        'chicken1',
        'chicken2',
        'chicken3',
        'chicken4',
        'chicken5',
        'chicken6',
        'chicken7',
        'chicken8',
        'chicken9',
    ];

    return (
        <div className={cx('detail-meal')}>
            <img
                className={cx('meal-image')}
                src="https://i.ytimg.com/vi/C1L5K4TBxDE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoHQUNt5_KM-KPdoN6n_p-5zK90A"
                alt=""
            />
            <div className={cx('meal-recipe')}>
                <h3>Công thức nấu ăn</h3>
                <div className={cx('meal-desc')}>
                    Mix Sauce in small bowl. Mince garlic into wok with oil. Place over high heat,
                    when hot, add chicken and Chinese broccoli stems, cook until chicken is light
                    golden. Push to the side of the wok, crack egg in and scramble. Don't worry if
                    it sticks to the bottom of the wok - it will char and which adds authentic
                    flavour. Add noodles, Chinese broccoli leaves and sauce. Gently mix together
                    until the noodles are stained dark and leaves are wilted. Serve immediately!
                </div>
                <div className={cx('meal-ingredient')}>
                    {arr.map((item, index) => {
                        return (
                            <div key={index}>
                                <p>
                                    {index + 1}. {item}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Detail;
