import React from 'react';
let PropTypes = React.PropTypes;
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

import TodoItem from './todo-item';
import * as TaskActions from '../actions/task-actions';

class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log('todolistcontainer props are', props);
    //console.log('addtask is ', TaskActions.addTask);
  };

  saveTodo() {
    console.log('calling saveTodo with this of', this);
    this.props.actions.addTask({task: 'BOOGER', complete: false, due: new Date()});
    //this.refs.newText.value = '';
  }

  render () {
    let classes = 'table-striped table table-bordered';
    let tasks = [];
    if (this.props.tasks && this.props.tasks.length > 0) {
      this.props.tasks.forEach((task) => {
        tasks.push(<TodoItem key={task.id} task={task} actions={this.props.actions}/>);
      });
    }
    return (
     <div>
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
TodoListContainer.proptypes = {
  store: PropTypes.object,
  tasks: PropTypes.object,
  actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  console.log('todolistcontainer: map state to props', state, ownProps)
  let map = {
    store: ownProps.store,
    tasks: state.tasks
  };
  console.log('todolistcontainer: mapStateToProps mapping to ', map);
  return map;
}

function mapDispatchToProps(dispatch) {
  console.log('todolistcontainer: mapDispatchToProps being called with ', dispatch);
  let map = {
    actions: bindActionCreators(TaskActions, dispatch)
  };
  console.log('todolistcontainer: mapDispatchToProps returning ', map);
  return map;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
