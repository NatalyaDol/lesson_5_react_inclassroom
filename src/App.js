import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './app/layouts/Layout';
import MainPage from './app/components/Main';
import Contacts from './app/components/Contacts';
import About from './app/components/About';
import PageNotFound from './app/components/PageNotFound';


//это машрутизатор
ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={MainPage}/>
        <Route path="about" component={About}/>
        <Route path="contacts" component={Contacts}/>
        <Route path="contacts/:number" component={Contacts}/>
        <Route path="*" component={PageNotFound}/>
    </Route>
</Router>, document.querySelector('#root'));

//все эти записи под react router 3version
//browserHistory - это маршрутизация (то что в строке пишется когда идет смена страниц сайта)
//!!!!!!!!!!<Route path="*" component={PageNotFound}/> В САМОМ НИЗУ СПИСКА