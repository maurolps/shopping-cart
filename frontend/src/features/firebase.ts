import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "",
  authDomain: "shopping-cart-d8714.firebaseapp.com",
  projectId: "shopping-cart-d8714",
  storageBucket: "shopping-cart-d8714.appspot.com",
  messagingSenderId: "202112691947",
  appId: "1:202112691947:web:f80c2e37ff4c673389d8ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
