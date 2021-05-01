import axios from 'axios'

const GET_CARDS = 'GET_CARDS'
const ADD_ITEM = 'ADD_ITEM'
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
    case ADD_ITEM: {
      if (typeof state.basket[action.id] === 'undefined') {
        return {
          ...state,
          basket: { ...state.basket, [action.id]: 1 }
        }
      }
      return {
        ...state,
        basket: { ...state.basket, [action.id]: state.basket[action.id] + 1 }
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

export function addItem(id) {
  return { type: ADD_ITEM, id }
}

export function decrItem(id) {
  return { type: DECR_ITEM, id }
}
