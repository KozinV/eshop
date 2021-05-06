import axios from 'axios'

const GET_CARDS = 'GET_CARDS'
const GET_RATE = 'GET_RATE'
const INCR_ITEM = 'INCR_ITEM'
const DECR_ITEM = 'DECR_ITEM'
const SET_SORT = 'SET_SORT'
const SORT_BY_NAME = 'SORT_BY_NAME'
const SORT_BY_PRICE = 'SORT_BY_PRICE'
const SET_BASE = 'SET_BASE'

const initialState = {
  cards: [],
  sort: '',
  basket: {},
  base: 'USD',
  rate: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS: {
      return {
        ...state,
        cards: action.data
      }
    }
    case GET_RATE: {
      return {
        ...state,
        rate: action.data.rates,
        base: action.data.base
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
    case SET_SORT: {
      return {
        ...state,
        sort: action.sort
      }
    }
    case SET_BASE: {
      return {
        ...state,
        base: action.base
      }
    }
    case SORT_BY_NAME: {
      const copySort = [...state.cards]
      const newSort = copySort.sort((a, b) => {
        if (a.title > b.title) {
          return 1
        }
        if (a.title < b.title) {
          return -1
        }
        return 0
      })
      return {
        ...state,
        cards: newSort
      }
    }
    case SORT_BY_PRICE: {
      const copySort = [...state.cards]
      const newSort = copySort.sort((a, b) => {
        return a.price - b.price
      })
      return {
        ...state,
        cards: newSort
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

export function getRate() {
  return (dispatch) => {
    axios.get('/api/v1/getRate').then((it) => {
      dispatch({ type: GET_RATE, data: it.data })
    })
  }
}

export function incrItem(id) {
  return { type: INCR_ITEM, id }
}

export function decrItem(id) {
  return { type: DECR_ITEM, id }
}

export function setSort(sort) {
  return { type: SET_SORT, sort }
}

export function setBase(base) {
  return { type: SET_BASE, base }
}

export function sortByName() {
  return { type: SORT_BY_NAME }
}

export function sortByPrice() {
  return { type: SORT_BY_PRICE }
}
