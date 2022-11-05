import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAMSTEhMPwjiV0BL9oXCuGPJwcNIFO25Hk",
  authDomain: "discordclone-68365.firebaseapp.com",
  projectId: "discordclone-68365",
  storageBucket: "discordclone-68365.appspot.com",
  messagingSenderId: "373913766653",
  appId: "1:373913766653:web:d1143541019d6b83e74c94",
  measurementId: "G-5S2EJ401VS"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);/*that will set the app and connect everything we need*/
const db = firebaseApp.firestore();// db is our portable database.
const auth = firebase.auth();// the authentication functionnality on firebase
const provider = new firebase.auth.GoogleAuthProvider();/*google login functionality*/

export {auth, provider};
export default db ;// default because we will use it frequently 
