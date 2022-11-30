import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import app from "../config/firebase";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
