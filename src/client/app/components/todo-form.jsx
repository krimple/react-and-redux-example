import React from 'react';
let { Component, PropTypes } = React;
import { removeTask } from '../actions/task-actions';

class TodoForm extends React.Component {

  remove(event) {
    // call action from parent
    this.props.actions.removeTask(this.props.task);
  }

  render() {
    let task = this.props.task;
    return (<tr>
      <td>{task.id}</td>
      <td>{task.task}</td>
      <td>{task.due.toString()}</td>
      <td>{task.complete.toString()}</td>
      <td><button onClick={this.remove.bind(this)}>Remove</button></td>
    </tr>);
  };
}

TodoItem.propTypes = {
  actions: PropTypes.object,
  task: PropTypes.object
};

export default TodoForm;
