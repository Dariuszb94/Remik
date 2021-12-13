import firebase from "firebase/app";
import "firebase/database";

let config = {
  apiKey: "AIzaSyC5jxlkE4AV9Q6WmLcSePMTIMCKk_7iKJo",
  authDomain: "remik-31cc1.firebaseapp.com",
  projectId: "remik-31cc1",
  storageBucket: "remik-31cc1.appspot.com",
  messagingSenderId: "343019896839",
  appId: "1:343019896839:web:20f553f76586610a0eaaa2",
};

firebase.initializeApp(config);

export default firebase.database();
