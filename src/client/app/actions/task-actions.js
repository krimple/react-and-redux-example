import {ADD_TASK, REMOVE_TASK, UPDATE_TASK} from './action-types';

export function addTask(task) {
  return { type: ADD_TASK, task: task};
}

export function removeTask(task) {
  return { type: REMOVE_TASK, task: task};
}

export function updateTask(task) {
  return { type: UPDATE_TASK, task: task};
}

