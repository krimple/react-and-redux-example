import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
let { Component, PropTypes } = React;
import { removeTask } from '../actions/task-actions';
import * as TaskActions from '../actions/task-actions';
class TodoItem extends React.Component {
  static propTypes = {
    actions: PropTypes.object,
    task: PropTypes.object
  };

  constructor(props) {
    super(props);
    console.log('TodoItem: props incoming', this.props);
  }
  remove(event) {
    console.log(event);
    // call action from parent
    this.props.actions.removeTask(this.props.task);
  }

  render() {
    let task = this.props.task;
    let actions = this.props.actions;
    return (<tr>
      <td>{task.id}</td>
      <td>{task.task}</td>
      <td>{task.due.toString()}</td>
      <td>{task.complete.toString()}</td>
      <td><button onClick={this.remove.bind(this)}>Remove</button></td>
    </tr>);
  };
}

function mapStateToProps(state, ownProps) {
  console.log('todoitem: map state to props', state, ownProps)
  let map = {
  };
  console.log('todoitem: mapStateToProps mapping to ', map);
  return map;
}

function mapDispatchToProps(dispatch) {
  console.log('todoitem: mapDispatchToProps being called with ', dispatch);
  let map = {
    actions: bindActionCreators(TaskActions, dispatch)
  };
  console.log('todoitem: mapDispatchToProps returning ', map);
  return map;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);

