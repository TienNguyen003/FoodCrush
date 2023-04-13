import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './component/GlobalStyles/globalStyles';
import AppMeals from './component/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <GlobalStyles>
                <AppMeals />
            </GlobalStyles>
        </BrowserRouter>
    </>,
);
