import { initializeApp } from 'firebase/app'
import 'firebase/database'
import * as db from 'firebase/database'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDpeaQkiEYAE8hD8TmivTTw4fbW_m610p4',
  authDomain: 'portifolio-yuri-donato.firebaseapp.com',
  projectId: 'portifolio-yuri-donato',
  storageBucket: 'portifolio-yuri-donato.appspot.com',
  messagingSenderId: '21391079339',
  appId: '1:21391079339:web:839d4573d8c6f522dd04ee',
  measurementId: 'G-9QC3GD9BKD'
})

// Realtime
const realtimeDatabase = db.getDatabase(firebaseApp)
const realtimeRef = db.ref
const realtimeGet = db.get
const realtimeonValue = db.onValue
const realtimeSet = db.set
const realtimePush = db.push
const realtimeRemove = db.remove
const realtimeChild = db.child
const realtimeUpdate = db.update

// Storage
const imggetStorage = getStorage
const imgref = ref
const imggetDownloadURL = getDownloadURL

export {
  realtimeDatabase,
  realtimeRef,
  realtimeGet,
  realtimeonValue,
  realtimeSet,
  realtimePush,
  realtimeRemove,
  realtimeChild,
  realtimeUpdate,
  imggetStorage,
  imgref,
  imggetDownloadURL
}
