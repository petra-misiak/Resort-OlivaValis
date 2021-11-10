import firebase from 'firebase';

let firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCZuvEA4mb1vUxafdwUu02tj6qBmWz4M3M",
    authDomain: "oliva-valis.firebaseapp.com",
    projectId: "oliva-valis",
    storageBucket: "oliva-valis.appspot.com",
    messagingSenderId: "39711191016",
    appId: "1:39711191016:web:999ee4e4290b1bdf7e3e5d"
});

let db = firebaseApp.firestore();

export { db };

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCZuvEA4mb1vUxafdwUu02tj6qBmWz4M3M",
//     authDomain: "oliva-valis.firebaseapp.com",
//     projectId: "oliva-valis",
//     storageBucket: "oliva-valis.appspot.com",
//     messagingSenderId: "39711191016",
//     appId: "1:39711191016:web:999ee4e4290b1bdf7e3e5d"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

