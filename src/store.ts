import { Item } from './types/item'
import create from 'zustand'

interface ItemsStore {
  items: Item[]
  // addItem: (title: string) => void
  // editItem: (id: string, title: string) => void
  // deleteItem: (id: string) => void
  setItems: (items: Item[]) => void
}

export const useItemsStore = create<ItemsStore>((set, get) => ({
  items: [],
  setItems: async (items) => {
    return set((store) => ({ ...store, items }))
  },
}))

// addItem: async (title) => {
//   const newDoc = await FireStoreQuoteHandlers.addQuote(title)
//   return set((store) => ({ ...store, items: [...store.items, { title, id: newDoc.id }] }))
// },
// deleteItem: async (id) => {
//   await FireStoreQuoteHandlers.deleteQuote(id)
//   const newState = get().items.filter((item) => item.id !== id)
//   return set({ items: newState })
// },
// editItem: async (id, title) => {
//   const newState = get().items.map((item) => {
//     if (item.id === id) return { id, title }
//     return item
//   })
//   return set({ items: newState })
// },
