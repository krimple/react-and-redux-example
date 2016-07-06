import {FILTER_ALL, FILTER_COMPLETED, FILTER_INCOMPLETE} from './../actions/action-types';
const filterReducer = function(state = {}, action) {
  if (!action || !action.type) return state;

  switch (action.type) {
    case FILTER_ALL:
      return { filterType: FILTER_ALL };
    case FILTER_COMPLETED:
      return { filterType: FILTER_COMPLETED };
    case FILTER_INCOMPLETE:
      return { filterType: FILTER_INCOMPLETE};
    default:
      return state;
  }
};

export default filterReducer;