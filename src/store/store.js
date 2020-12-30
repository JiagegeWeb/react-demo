import {createStore} from 'redux'

let reducer=(state,action)=>{
    // console.log(action,'action')
    if(action.type=="CARDDATA"){
        state.JSdata = action.data
    }
    return {...state}
}
let initState={
    JSdata:{}
}

let store = createStore(reducer,initState)

export default store