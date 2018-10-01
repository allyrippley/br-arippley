import {
  ACTIVE_VIEW_CHANGE
} from './types';

export const changeActiveView = (id) => ({
  type: ACTIVE_VIEW_CHANGE,
  id
});

