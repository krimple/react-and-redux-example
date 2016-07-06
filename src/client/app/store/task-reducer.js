import uuid from 'uuid';
import {ADD_TASK, REMOVE_TASK, UPDATE_TASK} from './../actions/action-types';


// important - only use Object.assign with an empty
const taskReducer = function (state = [], action) {
  // TODO this is a dupe var if used in REMOVE and UPDATE
  // is there a better way?
  let indexOfCandidate;

  switch (action.type) {
    case ADD_TASK:
      // concatenate existing state, replacing tasks with
      // new immutable collection. Further, generate an ID
      // to replace any other potential key in the new task
      // with a uuid v4 string
      return state.concat(
        Object.assign({}, action.task, {
          id: uuid()
        })
      );
    // in this case, just return the spread of all state tasks
    // filtering OUT the one with the uuid that matches the
    // task's ID in action
    case REMOVE_TASK:
      console.log('calling REMOVE_TASK with', action);
      indexOfCandidate = state.find((task) => {
        return task.id === action.task.id
      });

      if (indexOfCandidate === -1) {
        return state;
      } else {
        let newState = [].concat(
          state.slice(0, indexOfCandidate),
          state.slice(indexOfCandidate + 1));
        return newState;
      }

    case UPDATE_TASK:
      indexOfCandidate = state.find((task) => {
        return task.id === action.task.id
      });

      if (indexOfCandidate === -1) {
        return state;
      } else {
        // replace just the one task
        let newState = [].concat(
          state.slice(0, indexOfCandidate),
          action.task,
          state.slice(indexOfCandidate + 1));
        return newState;
      }

    default:
      return state;
  }
};


const INITIAL_STATE = [
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
  }
];

export default taskReducer;
