import createStore from '../store/createStore'
import { SHOW_RECEIVED } from '../store/show/showActionTypes'
import type { ShowType } from '../flow-types/showsTypes'

type State = {
  show: ShowType
}
/**
 * to intialize redux store server side
 * this will help in SSR
 * @param {object} intialState
 */
export default function initReduxStore (intialState: State) {
  const store = createStore()
  store.dispatch({
    type: SHOW_RECEIVED,
    payload: intialState.show
  })
  return store
}
