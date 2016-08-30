import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { loadCourses } from './actions/courseActions';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
