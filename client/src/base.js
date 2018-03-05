import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

  apiKey: 'AIzaSyDc3rv96XkVO0FH5XPhyAfI6FonhGVmtAo',
  authDomain: 'jazzytea-1115c.firebaseapp.com',
  databaseURL: 'https://jazzytea-1115c.firebaseio.com',
  projectId: 'jazzytea-1115c',
  storageBucket: 'jazzytea-1115c.appspot.com',
  messagingSenderId: '962222672618',
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a defaust export
export default base;

// {
//   "rules": {
//     ".read": "auth != null",
//     ".write": "auth != null"
//   }
// }
