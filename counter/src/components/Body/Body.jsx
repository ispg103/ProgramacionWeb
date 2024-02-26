import { useState } from 'react'
import { Button } from '../Button/Button'
import { planetImages } from '../../const/links'
import './Body.css'

export function Body () {
  const [counter, setCounter] = useState(0)
  const [planetCount, setPlanetCount] = useState(0)

  const handleClickCounter = (value) => {
    if (value === 'add') {
      setCounter(counter + 1)
      setPlanetCount(Math.min(planetImages.length, planetCount + 1))
    } else if (counter !== 0 && value === 'subtract') {
      setCounter(counter - 1)
      setPlanetCount(Math.max(0, planetCount - 1))
    } else if (value === 'reset') {
      setCounter(0)
      setPlanetCount(0)
    }
  }

  const renderPlanetImages = () => {
    return [...Array(planetCount)].map((_, index) => (
      <img key={index} src={planetImages[index]} alt={`Planet ${index + 1}`} />
    ))
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

      <div className='planet-images'>
        {renderPlanetImages()}
      </div>
    </>

  )
}
