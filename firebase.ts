import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// firebase- 'wrongnumber' id

const firebaseConfig = {
    apiKey: "AIzaSyD0s2ZXjklXXeFG-Hlk8Bc7_4I0EXRK5Wc",
    authDomain: "ai-chatbot-pdf.firebaseapp.com",
    projectId: "ai-chatbot-pdf",
    storageBucket: "ai-chatbot-pdf.firebasestorage.app",
    messagingSenderId: "100465395459",
    appId: "1:100465395459:web:1e0507e38f852fe38dcb36"
};
  

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };