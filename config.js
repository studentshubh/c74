import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAcSNBiKlBm-NAnZ4U56GKqmmy5SLzZjW8",
  authDomain: "e-library-25729.firebaseapp.com",
  projectId: "e-library-25729",
  storageBucket: "e-library-25729.appspot.com",
  messagingSenderId: "814260179599",
  appId: "1:814260179599:web:aa897cc8cc68a3a6fb56fa"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
