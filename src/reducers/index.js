import { combineReducers } from 'redux'
import category from '../reducers/Category/Category'


export const application = combineReducers({
    categoryData: category
})

export const initialState = {
    category: category({}, { type: "init " }),
}
 