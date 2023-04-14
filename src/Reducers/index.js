import customeReducer2 from './seatReducer2'
import { combineReducers } from 'redux'

const mainReducer = combineReducers({
    customeReducer2,
})

export default mainReducer;