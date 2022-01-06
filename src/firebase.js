import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC5jxlkE4AV9Q6WmLcSePMTIMCKk_7iKJo',
  authDomain: 'remik-31cc1.firebaseapp.com',
  databaseURL: 'https://remik-31cc1-default-rtdb.firebaseio.com',
  projectId: 'remik-31cc1',
  storageBucket: 'remik-31cc1.appspot.com',
  messagingSenderId: '343019896839',
  appId: '1:343019896839:web:20f553f76586610a0eaaa2',
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
