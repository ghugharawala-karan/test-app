import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from './counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
    <div>
        <h1>Counter</h1>
        <div>
            <button 
                aria-label='Increment Value'
                onClick={() => dispatch(increment())}
            >Increment</button>
            <br /><span>Count:{count}</span><br />
            <button 
                aria-label='Decrement Value'
                onClick={() => dispatch(decrement())}
            >Decrement</button>

        </div>     
    </div>
  )
}


