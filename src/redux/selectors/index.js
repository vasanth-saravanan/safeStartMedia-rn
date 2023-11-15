import {store} from '../store';

export function getCommonStates() {
  try {
    return store.getState().common;
  } catch (error) {}
}
