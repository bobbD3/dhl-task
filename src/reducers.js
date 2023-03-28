import { combineReducers } from 'redux'
import { FETCH_PHOTOS_SUCCESS, FETCH_PHOTOS_REQUEST, FETCH_PHOTOS_FAILURE, ADD_FAVORITE } from './actions'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
  photos: [],
  favorites: [],
  isLoading: false,
  error: null,
  page: 1,
  limit: 50
}

const photosReducer = (state = initialState.photos, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS:
      return [...state, ...action.payload]
    default:
      return state
  }
}

const favoritesReducer = (state = initialState.favorites, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload]
    default:
      return state
  }
}

const isLoadingReducer = (state = initialState.isLoading, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_REQUEST:
      return true
    case FETCH_PHOTOS_SUCCESS:
    case FETCH_PHOTOS_FAILURE:
      return false
    default:
      return state
  }
}

const errorReducer = (state = initialState.error, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_FAILURE:
      return action.payload
    case FETCH_PHOTOS_REQUEST:
    case FETCH_PHOTOS_SUCCESS:
      return null
    default:
      return state
  }
}

const pageReducer = (state = initialState.page, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS:
      return state + 1
    default:
      return state
  }
}

const rootReducer = combineReducers({
  photos: photosReducer,
  favorites: favoritesReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
  page: pageReducer
})

const persistConfig = {
  key: 'root',
  storage
}

export default persistReducer(persistConfig, rootReducer)
