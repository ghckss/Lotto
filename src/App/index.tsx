import React, {FC} from 'react';
import {Outlet} from 'react-router';
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

import {AppContainer} from './styles';
import {Header} from 'components';

const App: FC = () => {
    return (
        <AppContainer>
            <Header />
            <main className='main'>
                <Outlet />
            </main>
        </AppContainer>
    );
};

export default App;
