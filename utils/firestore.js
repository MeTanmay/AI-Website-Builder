import { app } from "./firebase";
import { getFirestore } from "firebase/firestore";
export const db = getFirestore(app);
import { collection, getDocs } from "firebase/firestore";
import {
  query,
  orderBy,
  limit,
  startAfter,
  getCountFromServer
} from "firebase/firestore";

export const GetUsersInfo = async (page = 1, limi = 50, lastVisible = null) => {
  try {
    const usersRef = collection(db, "users");
    let q;

    if (page === 1 || !lastVisible) {
      // First page or no last visible document
      q = query(usersRef, orderBy("firstName", "desc"), limit(limit));
    } else {
      // Subsequent pages
      q = query(
        usersRef,
        orderBy("firstName", "desc"),
        startAfter(lastVisible),
        limit(limit),
      );
    }

    const querySnapshot = await getDocs(q);
    const usersList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    // console.log(usersList);
    // Get the last visible document for the next pagination call
    const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
    const totalUsers = await getCountFromServer(collection(db, "users"));
    const totalPages = Math.ceil(totalUsers.data().count / limit);

    return {
      status: "success",
      data: usersList,
      pagination: {
        currentPage: page,
        totalPages: totalPages,
        totalUsers: totalUsers.data().count,
        lastVisible: lastVisibleDoc,
      },
    };
  } catch (error) {
    console.error("Error fetching users: ", error);
    return {
      status: "error",
      data: [],
      pagination: {
        currentPage: page,
        totalPages: 0,
        totalUsers: 0,
        lastVisible: null,
      },
    };
  }
};

