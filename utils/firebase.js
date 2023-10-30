
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

export const config = {
  apiKey: "AIzaSyAlpHOXl9EyCStB-Cz_yEuzShw6Mg3YG6I",
  authDomain: "agricall-96e22.firebaseapp.com",
  projectId: "agricall-96e22",
  storageBucket: "agricall-96e22.appspot.com",
  messagingSenderId: "151423947582",
  appId: "1:151423947582:web:21ca9b908408279960d26f"
};
export const app = initializeApp(config);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };