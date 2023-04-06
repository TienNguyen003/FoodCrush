import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './component/GlobalStyles/globalStyles';
import AppMeals from './component/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <GlobalStyles>
            <AppMeals />
        </GlobalStyles>
    </>,
);
