import { onSnapshot } from 'firebase/firestore'
import { useEffect } from 'react'
import { quotesCollectionRef } from '../../firebase/consts'
import { DocData } from '../../firebase/types'
import { useItemsStore } from '../../store'
import { Item } from '../../types/item'

export const useSubscribeToDocs = () => {
  const { items, setItems } = useItemsStore()
  useEffect(() => {
    const unsubscribe = onSnapshot(quotesCollectionRef, (docs) => {
      const data: Item[] = []
      docs.forEach((doc) => data.push({ id: doc.id, ...(doc.data() as DocData) }))
      setItems(data)
      return () => unsubscribe()
    })
  }, [])
  return items
}
