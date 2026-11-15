
import { initializeApp } from
  "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import { getAuth } from
  "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import { getFirestore } from
  "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { getDatabase } from
"https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyC0dmdXnJbZ85VIy4IQ4lsro2NlZggziU4",
  authDomain: "thelaxradatabase.firebaseapp.com",
  projectId: "thelaxradatabase",
  storageBucket: "thelaxradatabase.firebasestorage.app",
  messagingSenderId: "944805494611",
  appId: "1:944805494611:web:e0209cb32b4f48cc43aba6",
  measurementId: "G-833RQEFNP8"
  databaseURL: "https://theluxradatabase-default-rtdb.firebaseio.com"
};
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
