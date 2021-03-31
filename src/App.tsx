import React, { useEffect } from 'react'
import firebase from 'firebase'

import './App.css'
import { TodoPage } from './components/TodoPage/TodoPage'
import { getTodos } from './redux/todo_reducer'
import { useDispatch, useSelector } from 'react-redux'
import { TodosType } from './types/types'
import { AppStateType } from './redux/redux-store'

const App = () => {


  const dispatch = useDispatch()
  const todos_reducer: Array<TodosType> = useSelector((state: AppStateType) => state.todo_reducer.todos_data)



  useEffect(() => {
    dispatch(getTodos())
  }, [])


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



  // const getData = () => {

  //   var db = firebase.firestore()




  // db.collection("users").add({
  //   first: "Ada",
  //   last: "Lovelace",
  //   born: 1815
  // })
  //   .then((docRef) => {
  //     console.log("Document written with ID: ", docRef.id);
  //   })
  //   .catch((error) => {
  //     console.error("Error adding document: ", error);
  //   });

  //   db.collection("users").get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //         console.log(`${doc.id} => ${doc.data()}`);
  //     });
  // });

  // var citiesRef = db.collection("users");


  // citiesRef.doc("Nastya").set({
  //   name: 'Nastya', state: "Samara", country: "Russia", description: 'I love you :)'});
  //   // .then((citiesRef) => {
  //   //       console.log("Document written with ID: ", citiesRef.id);
  //   //     })
  //   //     .catch((error) => {
  //   //       console.error("Error adding document: ", error);
  //   //     });

  // var docRef = db.collectionGroup("users").doc("Nastya").collectionGroup("users");

  // docRef.get().then((querySnapshot) => {
  //   console.log(querySnapshot)

  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data()}`);

  //   })
  // var citiesRef = db.collection('users');

  // var landmarks = Promise.all([
  //   citiesRef.doc('SF').collection('landmarks').doc().set({
  //     name: 'Golden Gate Bridge',
  //     type: 'bridge'
  //   }),
  //   citiesRef.doc('SF').collection('landmarks').doc().set({
  //     name: 'Legion of Honor',
  //     type: 'museum'
  //   }),
  //   citiesRef.doc('LA').collection('landmarks').doc().set({
  //     name: 'Griffith Park',
  //     type: 'park'
  //   }),
  //   citiesRef.doc('LA').collection('landmarks').doc().set({
  //     name: 'The Getty',
  //     type: 'museum'
  //   }),
  //   citiesRef.doc('DC').collection('landmarks').doc().set({
  //     name: 'Lincoln Memorial',
  //     type: 'memorial'
  //   }),
  //   citiesRef.doc('DC').collection('landmarks').doc().set({
  //     name: 'National Air and Space Museum',
  //     type: 'museum'
  //   }),
  //   citiesRef.doc('TOK').collection('landmarks').doc().set({
  //     name: 'Ueno Park',
  //     type: 'park'
  //   }),
  //   citiesRef.doc('TOK').collection('landmarks').doc().set({
  //     name: 'National Museum of Nature and Science',
  //     type: 'museum'
  //   }),
  //   citiesRef.doc('BJ').collection('landmarks').doc().set({
  //     name: 'Jingshan Park',
  //     type: 'park'
  //   }),
  //   citiesRef.doc('BJ').collection('landmarks').doc().set({
  //     name: 'Beijing Ancient Observatory',
  //     type: 'museum'
  //   })
  // ]);

  // if (doc.exists) {
  //   console.log("Document data:", doc.data());
  //   setData(doc.data())
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }
  // }).catch ((error) => {
  //   console.log("Error getting document:", error);
  // });


  // var museums = db.collectionGroup('landmarks');
  // museums.get().then((querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc);

  //   });
  // });

  // let myLibrary: any = [
  //   { text: 'Убраться дома!', isChecked: 'false' },
  //   { text: 'Купить хлеб)', isChecked: 'true' },
  //   { text: 'Сделать машину', isChecked: 'false' },
  // ];
  // let firestore = firebase.firestore();

  // let docRef = firestore.doc("userBooks/library");
  // const saveLibrary = function () {
  //   docRef
  //     .get().then((doc: any) => {
  //       console.log(doc.data().userLibrary);

  //     })
  // .set({
  //   userLibrary: myLibrary,
  // })
  // .then(function () {
  //   console.log("Library saved!");
  // })
  // .catch(function (error) {
  //   console.log("Got an error: ", error);
  // });
  // };
  //   saveLibrary()
  // }
  // useEffect({
  //   Firebase()
  // },[])

  if (todos_reducer.length !== 0) {
    return (
      <div className="container">
        <TodoPage />
      </div>
    );
  }
  return <div>Loading...</div>

}

export default App;
