import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: "AIzaSyD-jXeL-5zOZBJknpf6NG6Wl5ajGk8hyyw",
  authDomain: "studentflock-b97af.firebaseapp.com",
  projectId: "studentflock-b97af",
  storageBucket: "studentflock-b97af.appspot.com",
  messagingSenderId: "525536377190",
  appId: "1:525536377190:web:1abbff36b3b01a8b4870a7",
  measurementId: "G-83S7MP4RY8",
};

const app = initializeApp(config);

const db = getFirestore();

export const postsRef = collection(db, "posts");

export const postsQuery = query(postsRef, orderBy("timestamp", "desc"));

export const auth = getAuth(app);

export const storage = getStorage(app);
