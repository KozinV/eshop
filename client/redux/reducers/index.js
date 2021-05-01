import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import market from './market'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    market
  })

export default createRootReducer
