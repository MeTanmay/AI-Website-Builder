import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
  } from "firebase/auth";
  import { app } from "./firebase";  // Ensure this path is correct
  import { doc, setDoc } from "firebase/firestore";
  import { db } from "./firebase";  // Adjusted path to point to firebase.js properly
  
  export const auth = getAuth(app);
  
  export async function signup(firstName, lastName, email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      await updateProfile(user, { displayName: firstName });
  
      await setDoc(doc(db, "users", user.uid), {
        email: email,
        password: password,  // Note: Storing passwords in plain text is not recommended
        firstName: firstName,
        lastName: lastName,
      });
  
      return {
        user: user,
        status: "success",
      };
    } catch (error) {
      return {
        user: null,
        status: "error",
        error: error.message,
      };
    }
  }
  
  export async function login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      return {
        user: user,
        status: "success",
      };
    } catch (error) {
      return {
        user: null,
        status: "error",
        error: error.message,
      };
    }
  }
  
  export async function sendPasswordResetEmailF(email) {
    try {
      await sendPasswordResetEmail(auth, email);
      return {
        status: "success",
        message: "Password reset email sent successfully",
      };
    } catch (error) {
      console.error("Error sending password reset email:", error);
      return {
        status: "error",
        message: error.message,
      };
    }
  }
  
  export const SignOut = () => {
    signOut(auth);
  };
  