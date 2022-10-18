import React, { useState } from 'react'
import { FireStoreQuoteHandlers } from '../../firebase/qoutes'

const Add = () => {
  const [visible, setVisible] = useState(false)
  const [title, setTitle] = useState('')

  const addHandler = async () => {
    const savedValue = title
    setTitle('')
    try {
      await FireStoreQuoteHandlers.addQuote(title)
    } catch (error) {
      setTitle(savedValue)
    }
  }

  return (
    <>
      <h4 className="title" onClick={() => setVisible(!visible)}>
        Цитаты на каждый день
      </h4>
      <div className={`${visible ? 'visible' : 'invisible'}`}>
        <input value={title} onChange={(event) => setTitle(event.target.value)} />
        <button disabled={title === ''} onClick={addHandler}>
          Добавить
        </button>
      </div>
    </>
  )
}

export default Add
