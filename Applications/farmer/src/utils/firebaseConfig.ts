import { initializeApp } from "firebase/app"
import { connectAuthEmulator, getAuth } from "firebase/auth"
import { connectStorageEmulator, getStorage } from "firebase/storage"
export const env = import.meta.env;

console.log(env);
/**
 * Set Firebase Configuration options
 */
export const firebaseConfig = {
    apiKey: env.VITE_REACT_FIREBASE_API_KEY,
    authDomain: env.VITE_REACT_FIREBASE_AUTH_DOMAIN,
    projectId: env.VITE_REACT_FIREBASE_PROJECT_ID,
    storageBucket: env.VITE_REACT_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.VITE_REACT_FIREBASE_MESSAGING_SENDER_ID,
    appId: env.VITE_REACT_FIREBASE_APP_ID,
    measurementId: env.VITE_REACT_FIREBASE_MEASUREMENT_ID
}



const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const storage = getStorage(app)

export {app, auth, storage};
if (!env.DEV) {
    const auth = getAuth();
    connectAuthEmulator(auth, "http://localhost:9099");
    connectStorageEmulator(storage, "localhost", 9199);
}