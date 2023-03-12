import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA4vrhw6O9aI82XGCvG2CpHATUmZd_aysE",
	authDomain: "miniblog-51eb6.firebaseapp.com",
	projectId: "miniblog-51eb6",
	storageBucket: "miniblog-51eb6.appspot.com",
	messagingSenderId: "42031319770",
	appId: "1:42031319770:web:f61aab20cb999f5521b3e3",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
    db,
}
