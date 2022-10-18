import React, { FC, useState } from 'react'
import { FireStoreQuoteHandlers } from '../../firebase/qoutes'
import { useItemsStore } from '../../store'
import { Item } from '../../types/item'

interface Props {
  item: Item
  index: number
}

const Quote: FC<Props> = ({ index, item }) => {
  const [visible, setVisible] = useState(false)

  const deleteItemHandler = async () => {
    await FireStoreQuoteHandlers.deleteQuote(item.id)
  }
  return (
    <div className="item" onClick={() => setVisible(!visible)}>
      <div className="item__title">
        {index + 1}. {item.title}
      </div>
      <div className={`item__btns ${visible ? 'visible' : 'invisible'}`}>
        <button>Изменить</button>
        <button onClick={deleteItemHandler}>Удалить</button>
      </div>
    </div>
  )
}

export default Quote
