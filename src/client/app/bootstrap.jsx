// framework-specific
import React from 'react';
import { render } from 'react-dom';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
// app-specific
import App from './components/app';
import IntegrationUtils  from './integration/store-integration';

console.log('about to bootstrap...');
let store = IntegrationUtils.initializeStore();
let history = IntegrationUtils.createHistory(store);

// next render a provider-wrapped container
render(<App store={store} history={history}/>, document.getElementById('app'));
