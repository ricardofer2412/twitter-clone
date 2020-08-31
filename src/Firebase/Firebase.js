import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAJK_DK-jN9rU93PDPDrAvVfcUJe5w_gWc",
  authDomain: "twitter-clone-3831e.firebaseapp.com",
  databaseURL: "https://twitter-clone-3831e.firebaseio.com",
  projectId: "twitter-clone-3831e",
  storageBucket: "twitter-clone-3831e.appspot.com",
  messagingSenderId: "587919100850",
  appId: "1:587919100850:web:c30dbf5629c580c26232ab",
  measurementId: "G-CCSPXR16YG"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;  