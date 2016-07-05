import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
let {Component, PropTypes} = React;
import * as TaskActions from '../actions/task-actions';

class TodoForm extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    task: PropTypes.object
  };

  static defaultProps = {
    task: {
      task: 'Do something',
      due: new Date(),
      complete: false
    }
  };

  componentWillMount() {
    console.log('Default state and props', this.state, this.props);
    this.setState({task: Object.assign({}, this.props.task)});
  }

  submit = (event) => {
    console.log('submitting!', event, this.state.task, this.props);
    if (this.state.task.id) {
      this.props.actions.updateTask(this.state.task);
    } else {
      this.props.actions.addTask(this.state.task);
    }
    this.props.history.push('/');
    return false;
  };

  handleTaskChange = (e) => {
   this.setState({ task: Object.assign(
     {},
     this.state.task,
     {task: e.target.value}
   )});
  };

  handleDueDateChange = (e) => {
   this.setState({ task: Object.assign(
     {},
     this.state.task,
     {due: e.target.value}
   )});
  };

  handleCompleteChange = (e) => {
   this.setState({ task: Object.assign(
     {},
     this.state.task,
     {complete: e.target.checked }
   )});
  };


  render() {
    let task = this.props.task;
    return (
      <form>
        <label>Task</label><br/><input type="text" onChange={this.handleTaskChange} value={this.state.task.task}/><br/>
        <label>Due Date</label><br/><input type="date" onChange={this.handleDueDateChange} value={this.state.task.due}/><br/>
        <label>Complete?</label><br/><input type="checkbox" onChange={this.handleCompleteChange} value={this.state.task.complete}/><br/>
        <button onClick={this.submit.bind(this)}>Submit</button>
      </form>
    );
  };
}

function mapStateToProps(state, ownProps) {
  console.log('todoform: map state to props', state, ownProps)
  let task;
  if (ownProps.params.taskId) {
    task = state.tasks.find((cTask) => {
      return cTask.id === ownProps.params.taskId;
    });
    
    let mapping = {
      task: task
    };
    console.log('todoform: editing task - mapping to ', mapping);
    return mapping;
  } else {
    console.log('todoform: creating new task - will be handled by default props')
    return {}
  }
}

function mapDispatchToProps(dispatch) {
  console.log('todoform: mapDispatchToProps being called with ', dispatch);
  let map = {
    actions: bindActionCreators(TaskActions, dispatch)
  };
  console.log('todoform: mapDispatchToProps returning ', map);
  return map;
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
