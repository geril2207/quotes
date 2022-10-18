import { collection } from 'firebase/firestore'
import { db } from '.'

export const QuotesCollectionName = 'quotes'

export const quotesCollectionRef = collection(db, QuotesCollectionName)
