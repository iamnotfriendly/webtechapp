import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAmqQVxByqTptNTosQAMbQMqXzLbEEGGUw",
  authDomain: "webtechwork-e8f99.firebaseapp.com",
  databaseURL: "https://webtechwork-e8f99.firebaseio.com",
  projectId: "webtechwork-e8f99",
  storageBucket: "webtechwork-e8f99.appspot.com",
  messagingSenderId: "687910680680"
};
firebase.initializeApp(config);

  export default firebase;