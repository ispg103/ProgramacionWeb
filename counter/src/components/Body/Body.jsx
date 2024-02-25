import { useState } from 'react'
import { Button } from '../Button/Button'
import './Body.css'

export function Body () {
  const [counter, setCounter] = useState(0)

  const handleClickCounter = (valor) => {
    if (valor === 'add') {
      setCounter(counter + 1)
    } else if (counter !== 0 && valor === 'subtract') {
      setCounter(counter - 1)
    } else if (valor === 'reset') {
      setCounter(0)
    }
  }
  return (
    <>
      <section className='add-subtract'>
        <Button
          type='subtract'
          text='-'
          handleClickCounter={handleClickCounter}
        />
        <h1>{counter} </h1>
        <Button
          type='add'
          text='+'
          handleClickCounter={handleClickCounter}
        />
      </section>

      <Button
        type='reset'
        text='reset'
        handleClickCounter={handleClickCounter}
      />
    </>

  )
}
