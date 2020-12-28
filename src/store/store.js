import {createStore} from 'redux'

let reducer=(state,action)=>{
    console.log(state,action)
    return {...state}
}
let initState={

}

let store = createStore(reducer,initState)

export default store