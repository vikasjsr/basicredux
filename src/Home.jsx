import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch();
    const {c} = useSelector(state => state.custom)

    const addBtn = () => {
        dispatch({
            type : "increment"
        })
    };
    // increment by value
    const IncValBtn = () => {
        dispatch({
            type : "incrementbyvalue",
            payload:25
        })
    };

    const subBtn = () => {
        dispatch({
            type : "decrement"
        })
    };

    

  return (
    <div>
       
      <h2>{c}</h2>
    
    <button onClick={addBtn}>Increment</button>
    <button onClick={subBtn}>Decrement</button>
    <button onClick={IncValBtn}>Iecrement by 25</button>

    </div>

  )
}

export default Home
