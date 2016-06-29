import uuid from 'uuid';
import {ADD_TASK, REMOVE_TASK, UPDATE_TASK} from './../actions/action-types';


// important - only use Object.assign with an empty
const taskReducer = function (state, action) {
  // if state invalid create new state
  // in either case, operate on ref to the last state
  // as priorState
  let priorState = state || { tasks: [] };
  if (priorState.tasks === undefined) {
   priorState.tasks = [];
  }

  switch(action.type) {
    case ADD_TASK:
      // concatenate existing state, replacing tasks with
      // new immutable collection. Further, generate an ID
      // to replace any other potential key in the new task
      // with a uuid v4 string
      return Object.assign({}, priorState, {
        tasks: [
          ...priorState.tasks,
          Object.assign({}, action.task, {
            id: uuid()
          })
        ]
      });
    // in this case, just return the spread of all state tasks
    // filtering OUT the one with the uuid that matches the
    // task's ID in action
    case REMOVE_TASK:
      return Object.assign({}, priorState, {
        tasks: state.tasks.filter((task) =>
                 { return task.id !== action.task.id})
      });
    case UPDATE_TASK:
      let foundIdx = state.tasks.indexOf((task) => { return task.id === action.id});
      if (!foundIdx) {
        return state;
      }

      // replace just the one task
      return Object.assign({}, state, {
        tasks: [
          ...state.tasks.slice(0, foundIdx - 1),
          Object.assign({}, action.task),
          ...state.tasks.slice(foundIdx + 1)
          ]
      });
    default:
      return state;
  }
};


const INITIAL_STATE = {
  tasks: [
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

export default taskReducer;
