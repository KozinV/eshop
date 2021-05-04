import axios from 'axios'

const GET_CARDS = 'GET_CARDS'
const INCR_ITEM = 'INCR_ITEM'
const DECR_ITEM = 'DECR_ITEM'

const initialState = {
  cards: [],
  basket: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS: {
      return {
        ...state,
        cards: action.data
      }
    }
    case INCR_ITEM: {
      if (typeof state.basket[action.id] === 'undefined') {
        return {
          ...state,
          basket: { ...state.basket, [action.id]: 1 }
        }
      }
      return {
        ...state,
        basket: { ...state.basket, [action.id]: (state.basket[action.id] || 0) + 1 }
      }
    }
    case DECR_ITEM: {
      const tempBasket = {
        ...state.basket,
        [action.id]: state.basket[action.id] - 1
      }
      if (tempBasket[action.id] <= 0 || null) {
        delete tempBasket[action.id]
      }
      return {
        ...state,
        basket: tempBasket
      }
    }
    default:
      return state
  }
}

export function getCards() {
  return (dispatch) => {
    axios.get('/api/v1/getItems').then((it) => {
      dispatch({ type: GET_CARDS, data: it.data })
    })
  }
}

export function incrItem(id) {
  return { type: INCR_ITEM, id }
}

export function decrItem(id) {
  return { type: DECR_ITEM, id }
}
