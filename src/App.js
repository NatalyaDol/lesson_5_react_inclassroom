import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, browserHistory } from 'react-router';

import Layout from './app/layouts/Layout';
import MainPage from './app/components/Main';
import Contacts from './app/components/Contacts';
import About from './app/components/About';

ReactDOM.render(<Router history={browserHistory}>
    <Route path="/"component={Layout}>
        <Route path="about"component={About}/>
        <Route path="contacts"component={Contacts}/>
    </Route>
</Router>, document.querySelector('#root'));

//все эти записи под react router 3version