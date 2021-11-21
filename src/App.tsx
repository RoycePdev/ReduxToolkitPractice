import React from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented } from './features/counter/counterSlice'
import { amountAdded } from './features/counter/counterSlice'
import { customAmountAdded } from './features/counter/counterSlice'
import { useState } from 'react'
import './App.css'

function App() {
  const count = useAppSelector((state) => state.counter.count)
  const value = useAppSelector((state) => state.counter.value)
  const custom = useAppSelector((state) => state.counter.custom)
  const [customInput, setCustomInput] = useState(0)
  const total = count + value + custom
  const dispatch = useAppDispatch()

  const countUp = () => {
    dispatch(incremented())
  }
  const addAmount = () => {
    dispatch(amountAdded(4))
  }
  const addCustom = () => {
    dispatch(customAmountAdded(customInput))
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <span>Fill in the Blank</span>
        <input type='text' />
        <button>Insert text</button>
        <h1>TYPESCRIPT IS</h1>
      </header>
      <div className='buttons-container'>
        <button onClick={countUp}>Up by one button {count}</button>
        <button onClick={addAmount}>Up by Four button {value}</button>
        <button onClick={addCustom}>
          Up by amount in field button {custom}
        </button>
        <input
          type='number'
          value={customInput}
          onChange={(e) => setCustomInput(+e.target.value)}
        />
        <h2>Total</h2>
        <span>{total}</span>
      </div>
    </div>
  )
}

export default App
