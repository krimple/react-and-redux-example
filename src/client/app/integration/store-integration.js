import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { hashHistory } from 'react-router';
import  taskReducer  from '../store/task-reducer';
import  filterReducer  from '../store/filter-reducer';

const IntegrationUtils = {
  initializeStore: function () {
    let store = createStore(
      combineReducers({
        tasks: taskReducer,
        filter: filterReducer,
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
