// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { 
    getDatabase, 
    ref, 
    set, 
    push, 
    update, 
    remove, 
    onValue, 
    get,
    runTransaction 
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDTyjzVYkwyeayKjZjfFNWHpLZJB5XOo1A",
    authDomain: "itemsalesbd.firebaseapp.com",
    databaseURL: "https://itemsalesbd-default-rtdb.firebaseio.com",
    projectId: "itemsalesbd",
    storageBucket: "itemsalesbd.firebasestorage.app",
    messagingSenderId: "390468845332",
    appId: "1:390468845332:web:7350cfdf25f23151688c01",
    measurementId: "G-1REJXDEMSD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { 
    auth, db,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    ref, set, push, update, remove, onValue, get, runTransaction
};
