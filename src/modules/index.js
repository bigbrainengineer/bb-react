import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import main from './main'
export default combineReducers({
    router: routerReducer,
    counter,
    main
})
