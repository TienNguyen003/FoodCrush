import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { publicRoutes } from './routes/routes';
import Header from './LayOuts/DefaultLayout/Header/header';
import styles from './App.module.scss';

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
        <BrowserRouter>
            <>
                <Header parent={callbackFunction} />
                <Routes>
                    {publicRoutes.map((item, index) => {
                        const Page = item.component;
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={<Page value={message} />}
                            />
                        );
                    })}
                </Routes>

                <div className={cx('icon--return')} ref={iconRef}>
                    <FontAwesomeIcon icon={faArrowUp} className={cx('up')} />
                    <FontAwesomeIcon icon={faArrowLeft} className={cx('left')} />
                </div>
            </>
        </BrowserRouter>
    );
}

export default AppMeals;
