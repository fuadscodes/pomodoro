import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBwjDza0FBfwh8A_nbFvcCc2bKIzt2OwXI",
    authDomain: "pomodoro-98f43.firebaseapp.com",
    databaseURL: "https://pomodoro-98f43.firebaseio.com",
    projectId: "pomodoro-98f43",
    storageBucket: "pomodoro-98f43.appspot.com",
    messagingSenderId: "687532534854",
    appId: "1:687532534854:web:d17fbbb5e7e4c92d80ee47",
    measurementId: "G-X4JMC596P0"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
