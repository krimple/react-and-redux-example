// framework-specific
import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link, withRouter, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Provider } from 'react-redux';
import * as TaskActions from '../actions/task-actions';

// app-specific
import TodoListContainer from './todo-list-container';

// from Hacking with React
// TODO - research this and options used / available
// <TodoListContainer tasks={tasks} actions={actions} />
class App extends Component {
  render() {
    const { history, store } = this.props;
    const routes = <Route path="/">
        <IndexRoute component={TodoListContainer} />
      </Route>;
    return (
      <div>
        <Provider store={store}>
          <div>
            <h1>Todos are coming for you</h1>
            <Link to={`/`}>Home</Link> | <Link to="/todo">Add Todo...</Link>
              <Router history={history}>
               { routes }
            </Router>
         </div>
       </Provider>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log('app: map state to props', state, ownProps)
  let map = {
    store: ownProps.store,
    tasks: state.tasks
  };
  console.log('app: mapStateToProps mapping to ', map);
  return map;
}

function mapDispatchToProps(dispatch) {
  console.log('app: mapDispatchToProps being called with ', dispatch);
  let map = {
    actions: bindActionCreators(TaskActions, dispatch)
  };
  console.log('app: mapDispatchToProps returning ', map);
  return map;
}

export default withRouter(App);
