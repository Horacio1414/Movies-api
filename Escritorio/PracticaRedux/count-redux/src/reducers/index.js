import counter from "./counter"

import { combineReducers } from "redux"

const reducer = combineReducers({
    counter: counter
})


export default reducer;