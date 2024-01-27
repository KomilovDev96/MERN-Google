import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


import 'react-toastify/dist/ReactToastify.css';
import { increment, incrementByAmount } from './store/slice/ikrement';

export default function App() {
  const value = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1> value:{value}</h1>
      <button onClick={() => dispatch(increment())}>inkre</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>inkrement 10 qo'shadi</button>
      <button>decremen</button>
    </div>
  )
}

