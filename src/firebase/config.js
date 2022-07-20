import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpJGs6U6kYArRBniObIoQCnZVpgxcRNIc",
    authDomain: "olxclone-8d983.firebaseapp.com",
    projectId: "olxclone-8d983",
    storageBucket: "olxclone-8d983.appspot.com",
    messagingSenderId: "962076104833",
    appId: "1:962076104833:web:93ec968ab4adef6d40d580",
    measurementId: "G-DNDCZ0WJ8M"
  };

  export default firebase.initializeApp(firebaseConfig)