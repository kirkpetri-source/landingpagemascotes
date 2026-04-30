const firebaseConfig = {
  apiKey: "AIzaSyDi3nzPkTaroTUE7sFe7nzfebXvNJpW6Do",
  authDomain: "ladingpagemascotes.firebaseapp.com",
  projectId: "ladingpagemascotes",
  storageBucket: "ladingpagemascotes.firebasestorage.app",
  messagingSenderId: "412615756212",
  appId: "1:412615756212:web:4418899ee8d182466d0ae1"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const storage = firebase.storage();
