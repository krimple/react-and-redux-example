// framework-specific
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoListContainer from './todo-list-container';
import * as TaskActions from '../actions/task-actions';

class App extends Component {
  render() {
    const { tasks, actions } = this.props;
    return (
      <div>
        <TodoListContainer tasks={tasks} actions={actions} />
      </div>
    );
  }
}

App.propTypes = {
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

