import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIbvgO5egM2khjRTlix-KCl5CGK47dqoU",
  authDomain: "verification-4b7ff.firebaseapp.com",
  projectId: "verification-4b7ff",
  storageBucket: "verification-4b7ff.appspot.com",
  messagingSenderId: "354032872111",
  appId: "1:354032872111:web:42e31877074b4147b8425a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
