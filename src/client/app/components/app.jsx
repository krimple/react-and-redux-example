// framework-specific
import React, {Component, PropTypes} from 'react';
import {Router, Route, IndexRoute, Link, withRouter, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Provider} from 'react-redux';
import * as TaskActions from '../actions/task-actions';

// app-specific
import TodoListContainer from './todo-list-container';
import TodoForm from './todo-form';

// from Hacking with React
// TODO - research this and options used / available
// <TodoListContainer tasks={tasks} actions={actions} />
class App extends Component {
  render() {
    const {history, store} = this.props;

    return (
      <div>
        <Provider store={store}>
          <div>
            <Router history={history}>
              <Route path="/" component={Container}>
                <IndexRoute component={Home}/>
                <Route path="todo" component={TodoForm}/>
                <Route path="todo/:taskId" component={TodoForm} />
              </Route>
            </Router>
          </div>
        </Provider>
      </div>
    );
  }
}

// stolen liberally from https://github.com/dabit3/beginners-guide-to-react-router/tree/final
// credit due to dabit3 on github and his great tutorial
// at https://medium.com/@dabit3/beginner-s-guide-to-react-router-53094349669#.84iewfw4z

const Home = () => (
  <div>
    <h1>Todos are coming for you</h1>
    <TodoListContainer  />
  </div>
);


const Nav = () => (
  <div>
    <Link to={`/`}>Home</Link>
    <Link to={`/todo`}>Add Todo...</Link>
  </div>
);
const Container = (props) => <div>
  <Nav />
  {props.children}
</div>;

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
