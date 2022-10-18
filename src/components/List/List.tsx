import React, { useEffect } from 'react'
import Quote from '../Item/Item'
import { useSubscribeToDocs } from './useSubscribeToDocs'

const List = () => {
  const items = useSubscribeToDocs()

  return (
    <div className="items__wrapper">
      {items &&
        items.map((item, index) => <Quote key={`${item.id}_${index}`} index={index} item={item} />)}
    </div>
  )
}

export default List
