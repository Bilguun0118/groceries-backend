import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

import dotenv from 'dotenv';
dotenv.config();

export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID,
  appId: process.env.FIREBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;