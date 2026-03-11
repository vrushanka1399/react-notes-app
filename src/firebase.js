import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAmth7kOJe-tbGBbt-oZDGrjZgNiOnVai0",
  authDomain: "ecommerce-auth-c5f4b.firebaseapp.com",
  projectId: "ecommerce-auth-c5f4b",
  databaseURL: "https://ecommerce-auth-c5f4b-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);