import { memo, useState } from 'react';

import Header from './LayOuts/DefaultLayout/Header/header';
import Home from './Pages/Home/home';

function AppMeals() {
    const [message, setMessage] = useState('');

    let dataInput = message;

    const getData = (childData) => {
        setMessage(childData);
    };

    return (
        <>
            <Header parentCallback={getData} parent={getData} />
            <Home mes={dataInput} />
        </>
    );
}

export default memo(AppMeals);
