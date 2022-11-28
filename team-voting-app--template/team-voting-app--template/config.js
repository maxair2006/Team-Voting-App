import firebase from 'firebase';

 const firebaseConfig = {
  apiKey: "AIzaSyB27dVcQXBXJ8XF0-Gds6UxZI7S1bsoT6M",
  authDomain: "team-voting-app-a14ef.firebaseapp.com",
  projectId: "team-voting-app-a14ef",
  storageBucket: "team-voting-app-a14ef.appspot.com",
  messagingSenderId: "188334362761",
  appId: "1:188334362761:web:fe0aff18b8d608e12f3658"
};
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();