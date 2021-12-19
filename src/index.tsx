import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import App from 'App';
import loadable from '@loadable/component';

const Home = loadable(() => import('Pages/Home'));
const Ranking = loadable(() => import('Pages/Ranking'));
const SignIn = loadable(() => import('Pages/SignIn'));
const Simulator = loadable(() => import('Pages/Simulator'));

ReactDom.render(
    <BrowserRouter>
        <Routes>
            <Route element={<App />} path='/'>
                <Route element={<Home />} path='/' />
                <Route element={<Home />} path='/home' />
                <Route element={<Simulator />} path='/simulator' />
                <Route element={<Ranking />} path='/ranking' />
                <Route element={<SignIn />} path='/signin' />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
