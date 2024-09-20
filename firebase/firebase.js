import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnxqDH8naWKBCMPfCZJF1xsLCP3FnmGLk",
  authDomain: "hr-assignment.firebaseapp.com",
  projectId: "hr-assignment",
  storageBucket: "hr-assignment.appspot.com",
  messagingSenderId: "536298420676",
  appId: "1:536298420676:web:eff9f59d7c6d031aaf0c91",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
