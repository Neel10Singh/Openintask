import * as firebase from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyCEaeJE5G9n9xexyrQkBGP_uZAAx_XpWCY',
  authDomain: 'openeintask.firebaseapp.com',
  projectId: 'openeintask',
  storageBucket: 'openeintask.appspot.com',
  messagingSenderId: '649634801383',
  appId: '1:649634801383:web:fc47d3e3dd939aff92e442',
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const auth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider()

export { auth, GoogleProvider }
