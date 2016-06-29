jest.unmock('../../../../src/client/app/store/task-store');
jest.unmock(Array);
jest.mock('uuid');

import { tasks, addTask } from '../../../../src/client/app/store/task-store';
import * as uuid from 'uuid';

console.log(uuid);
describe('reduce!', () => {
 beforeEach(() => {
   uuid.v4.mockImplementation(() => { return "BLAH" });
   console.log(uuid());
 });
 it('should ignore any odd request!', () => {
   expect(tasks({ tasks: [] }, {  type: 'FOOBAR'})).toEqual({tasks: []});
 }); 
 it('should add a task!', () => {
   expect(tasks({ tasks: [] },
          addTask({ description: 'go away' })))
     .toEqual({tasks: [{ id: 'BLAH', description: 'go away'}]});
 });
});