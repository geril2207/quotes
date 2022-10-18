import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDgPYEjXilxpI-lBXpP3brbl6vR1aO_0uo',
  authDomain: 'motivation-5f850.firebaseapp.com',
  projectId: 'motivation-5f850',
  storageBucket: 'motivation-5f850.appspot.com',
  messagingSenderId: '164458528895',
  appId: '1:164458528895:web:51cd44c5be6c055fe43f4a',
}

export const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
