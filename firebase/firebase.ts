import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: `${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
  appId: `${process.env.NEXT_PUBLIC_FIREBASE_APP_ID}`,
  projectId: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`,
};

initializeApp(firebaseConfig);

const db = getFirestore();
const snippetsCollection = collection(db, "snippets");

export { db, snippetsCollection };
