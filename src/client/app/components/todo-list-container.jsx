import React from 'react';
let PropTypes = React.PropTypes;
import { connect } from 'react-redux';
console.log('connect is', connect);

import TodoItem from './todo-item';
import { addTask } from '../actions/task-actions';

class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log('addtask is ', addTask);
  };

  getChildContext() {
    return {store : this.store,
            actions: this.props.actions};
  }

  saveTodo() {
    this.props.actions.addTask({task: 'BOOGER', complete: false, due: new Date()});
    //this.refs.newText.value = '';
  }

  render () {
    let classes = 'table-striped table table-bordered';
    let tasks = [];
    this.props.tasks.forEach((task) => {
      tasks.push(<TodoItem key={task.id} task={task} actions={this.props.actions} />);
    });
    return (
     <div>
      <input type="text" ref="newText"/>
      <button onClick={this.saveTodo.bind(this)}>Add...</button>
      <table className={classes}>
        <thead>
        <tr>
          <th>ID</th>
          <th>Task</th>
          <th>Due</th>
          <th>Complete?</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        { tasks }
        </tbody>
        </table>
      </div>);
  }
}

TodoListContainer.childContextTypes = {
  store: PropTypes.object,
  actions: PropTypes.object
};

export default TodoListContainer;
