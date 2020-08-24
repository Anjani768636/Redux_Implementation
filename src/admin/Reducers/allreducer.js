

import {combineReducers} from 'redux'
import ProductReducer from './productreducer';
const allreducer=combineReducers({
    allProducts:ProductReducer
})
   export default allreducer
