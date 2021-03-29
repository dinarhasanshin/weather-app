import firebase from 'firebase'
import 'firebase/firestore'


export const Firebase = () => {
    const config = {
        apiKey: "AIzaSyDwOpDbk5LhGk55y99YJYa9sZPta219Mso",
        authDomain: "react-messenger-273f0.firebaseapp.com",
        projectId: "react-messenger-273f0",
        storageBucket: "react-messenger-273f0.appspot.com",
        messagingSenderId: "157440190043",
        appId: "1:157440190043:web:aa6d87cb52aa72c55c417e"
    }


    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
}


