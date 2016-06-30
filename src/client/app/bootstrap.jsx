// framework-specific
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { routerReducer} from 'react-router-redux';

// app-specific
import App from './components/app';
import taskReducer from './store/task-store';

// next render a provider-wrapped container
render(
    <Provider store={createStore(combineReducers({
      ...taskReducer, routing: routerReducer }, { tasks: []})>
      <App store={store} />
    </Provider>,
    document.getElementById('app'));
