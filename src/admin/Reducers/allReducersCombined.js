import {combineReducers} from 'redux'
import listProductReducer from './listProductReducer'

const allReducers = combineReducers({
    allProducts:listProductReducer
})

export default allReducers