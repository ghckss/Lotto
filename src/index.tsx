import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import App from 'App';

ReactDom.render(
    <BrowserRouter>
        <Routes>
            <Route element={<App />} path='/' />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
