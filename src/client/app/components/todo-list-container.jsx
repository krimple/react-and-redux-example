import React from 'react';
import TodoItem from './todo-item';

class TodoListContainer extends React.Component {

  constructor(props) {
    super(props);
     this.state = {
       tasks: localStorage['tasks'] || [
         {
           id: 'abc',
           task: 'Do the dishes',
           due: new Date(),
           complete: false
         },
         {
           id: 'def',
           task: 'Do the wash',
           due: new Date(),
           complete: false
         }]
     };
  };

  render () {
    let classes = 'table-striped table table-bordered';
    return (
      <div>
      <table className={classes}>
        <thead>
        <tr>
          <th>ID</th>
          <th>Task</th>
          <th>Due</th>
          <th>Complete?</th>
        </tr>
        </thead>
        <tbody>
      {this.state.tasks.map(function(task) {
        return <TodoItem key={task.id} itemId={task.id} itemTask={task.task} itemDue={task.due} itemComplete={task.complete} />
      })}
        </tbody>
        </table>
        </div>);

  }
}
export default TodoListContainer;
