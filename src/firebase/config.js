import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjEHHl0rnlSI0NngYpIWlAwFyqdnGImEg",
  authDomain: "codervak-62cbd.firebaseapp.com",
  projectId: "codervak-62cbd",
  storageBucket: "codervak-62cbd.appspot.com",
  messagingSenderId: "567800384025",
  appId: "1:567800384025:web:8d9306e0636f8c530b7888"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);