// framework-specific
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, useRouterHistory, IndexRoute, Link} from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createHashHistory } from 'history';

// app-specific
import TodoListContainer from './todo-list-container';
import * as TaskActions from '../actions/task-actions';

// from Hacking with React
// TODO - research this and options used / available
const appHistory = useRouterHistory(createHashHistory)();
// <TodoListContainer tasks={tasks} actions={actions} />
class App extends Component {
  render() {
    const { tasks, actions } = this.props;
    return (
      <div>
        <h1>Todos are coming for you</h1>
        <Link to="/">Home</Link> | <Link to="/todo">Add Todo...</Link>
        <Router history={appHistory} onUpdate={() => window.scrollTo(0, 0) }>
          <Route path="/">
             <IndexRoute component={ TodoListContainer } />
          </Route>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    tasks : state.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TaskActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

