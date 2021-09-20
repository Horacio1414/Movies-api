import React from "react"
import {useSelector} from "react-redux"
import {increment,decrement} from "./actions"
/* import {decrement} from "./actions" */
import {useDispatch} from "react-redux"

function App() {

 const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <>
    <h1>Counter:{counter}</h1>

    <button onClick={()=>{dispatch(increment(5))}}>Aumentar</button>

    <button onClick={()=>{dispatch(decrement(5))}}>Restar</button>

    </>
  );
}

export default App;
