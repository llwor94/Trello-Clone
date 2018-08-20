import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database'

const config = {
  apiKey: "AIzaSyCfggAOANRiINrZlnchGy0o6wHpnpIL-p4",
    authDomain: "trello-clone-89141.firebaseapp.com",
    databaseURL: "https://trello-clone-89141.firebaseio.com",
    projectId: "trello-clone-89141",
    storageBucket: "trello-clone-89141.appspot.com",
    messagingSenderId: "355857963671"
};
firebase.initializeApp(config);

const db = firebase.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings)

export default db;