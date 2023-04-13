import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import Header from './LayOuts/DefaultLayout/Header/header';
import Home from './Pages/Home/home';
import styles from './App.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AppMeals() {
    const [message, setMessage] = useState('');

    const iconRef = useRef();

    const callbackFunction = (childData) => {
        setMessage(childData);
    };

    window.onscroll = function () {
        myFunction();
    };

    function myFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            iconRef.current.style.display = 'flex';
            iconRef.current.onclick = () => {
                window.scrollTo({
                    top: 0,
                    behavior: `smooth`,
                });
            };
        } else {
            iconRef.current.style.display = 'none';
        }
    }

    return (
        <>
            <Header parent={callbackFunction} />
            <Home value={message} />

            <div className={cx('icon--return')} ref={iconRef}>
                <FontAwesomeIcon icon={faArrowUp} className={cx('up')} />
                <FontAwesomeIcon icon={faArrowLeft} className={cx('left')} />
            </div>
        </>
    );
}

export default AppMeals;
