import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
  } from "firebase/auth";
  import toast from "react-hot-toast";
  import { app , googleProvider} from "./firebase";  // Ensure this path is correct
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


  export async function googleSignup() {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
  
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        displayName: user.displayName,
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

  export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      return {
        status: "success",
        user
      };
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      return {
        status: "error",
        error: error.message
      };
    }
  };


export const signUpWithGithub = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      return {
        status: "success",
        user
      };
    } catch (error) {
      console.error("GitHub sign-up error:", error.message);
      return {
        status: "error",
        error: error.message
      };
    }
  };

  export const signInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      return {
        status: "success",
        user
      };
    } catch (error) {
      console.error("GitHub sign-in error:", error.message);
      return {
        status: "error",
        error: error.message
      };
    }
  };
  
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
    toast.success("Signout successfully!");
  };
  