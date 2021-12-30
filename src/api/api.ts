import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import { StaticItemsType } from '../redux/staticReducer';

const firebaseConfig = {
  apiKey: "AIzaSyBgwsV_wmt2nAmmJxx_87ZYd1XPlFZcS_0",
  authDomain: "gastos-db226.firebaseapp.com",
  projectId: "gastos-db226",
  storageBucket: "gastos-db226.appspot.com",
  messagingSenderId: "343376737825",
  appId: "1:343376737825:web:1ada8a30dc66c805379560",
  measurementId: "G-CFDR2188VM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const fs = firebase.firestore();

export const itemsAPI = {
    getItems: async (itemsType: string): Promise<StaticItemsType> => {
        let querySnapshot = await fs.collection(itemsType).get();
        //@ts-ignore
        return querySnapshot.docs.map(doc => doc.data());
    }
};