import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjs0WSt1V8r4_Q0ih12b7DhUa_wb_fg1E",
  authDomain: "college-outreach-9c192.firebaseapp.com",
  projectId: "college-outreach-9c192",
  storageBucket: "college-outreach-9c192.firebasestorage.app",
  messagingSenderId: "308387230649",
  appId: "1:308387230649:web:6758709ab73234a9c4fc68"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
