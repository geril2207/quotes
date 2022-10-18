import { addDoc, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore'
import { db } from '.'
import { Item } from '../types/item'
import { quotesCollectionRef, QuotesCollectionName } from './consts'
import { DocData } from './types'

export class FireStoreQuoteHandlers {
  static async getAllQuotes(): Promise<Item[]> {
    const result: Item[] = []
    const docs = await getDocs(quotesCollectionRef)
    docs.forEach((doc) => result.push({ ...(doc.data() as DocData), id: doc.id }))
    return result
  }

  static async addQuote(title: string) {
    return await addDoc(quotesCollectionRef, { title })
  }

  static async editQuote(id: string, title: string) {
    return await setDoc(doc(db, QuotesCollectionName, id), { title })
  }

  static async deleteQuote(id: string) {
    return await deleteDoc(doc(db, QuotesCollectionName, id))
  }
}
