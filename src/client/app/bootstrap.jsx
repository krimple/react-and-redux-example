// framework-specific
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// app-specific
import App from './components/app';
import taskReducer from './store/task-store';

// next render a provider-wrapped container
render(
    <Provider store={createStore(taskReducer, { tasks: []})}>
      <App />
    </Provider>,
    document.getElementById('app'));
