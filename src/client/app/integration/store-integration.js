import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { hashHistory } from 'react-router';
import  taskReducer  from '../store/task-store';

const IntegrationUtils = {
  initializeStore: function () {
    let store = createStore(
      combineReducers({
        tasks: taskReducer,
        routing: routerReducer
      }), {tasks: []});
    console.log('store created.', store);
    return store;
  },
  createHistory: function(store) {
    syncHistoryWithStore(hashHistory, store);
    return hashHistory;
  }
};

export default IntegrationUtils;
