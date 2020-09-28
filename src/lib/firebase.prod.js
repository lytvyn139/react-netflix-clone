import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
    apiKey: "AIzaSyDrMC4K5Dgd5BX58yBg4FOhONL2vZE_5S8",
    authDomain: "netflix-3137.firebaseapp.com",
    databaseURL: "https://netflix-3137.firebaseio.com",
    projectId: "netflix-3137",
    storageBucket: "netflix-3137.appspot.com",
    messagingSenderId: "610899824564",
    appId: "1:610899824564:web:146794c36f8f7791adece1"
};
const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase); no to run it, it will populate DB twice

export { firebase };
