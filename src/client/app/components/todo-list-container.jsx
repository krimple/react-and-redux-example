import React from 'react';
import TodoItem from './todo-item';

class TodoListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.saveTodo = this.saveTodo.bind(this);
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

  saveTodo(newText) {
    this.setState({
      tasks: this.state.tasks.concat({
        id: Math.random() * 234234324,
        task: this.refs.newText.value,
        due: new Date(),
        complete: false
      })
    });
    this.refs.newText.value = '';

  }


  render () {
    let classes = 'table-striped table table-bordered';
    return (
     <div>
      <input type="text" ref="newText"/>
      <button onClick={this.saveTodo}>Add...</button>
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
