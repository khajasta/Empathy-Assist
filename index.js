import { getDatabase, ref, set } from "firebase/database";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  "apiKey": "AIzaSyD3NNMUwNerxeYE1f8x2WQlWVbTZgbA478",
  "authDomain": "fyp-backend-9e913.firebaseapp.com",
  "databaseURL": "https://fyp-backend-9e913-default-rtdb.firebaseio.com",
  "projectId": "fyp-backend-9e913",
  "storageBucket": "fyp-backend-9e913.appspot.com",
  "messagingSenderId": "506376607999",
  "appId": "1:506376607999:web:944731982570baca9394ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
export default storage