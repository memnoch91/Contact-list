import * as firebase from "firebase/app";
import "firebase/firestore";

import fireBaseConfig from "./firebaseConfig";

const FB = firebase.initializeApp(fireBaseConfig);

// Get a Firestore instance
export const DB = FB.firestore();
// Export types that exists in Firestore
// export const { TimeStamp, GeoPoint } = firestore;
