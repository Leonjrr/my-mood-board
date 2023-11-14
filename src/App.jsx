import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import SignIn from "./components/SignIn";
import GoogleImage from "./assets/providers/google.png";

const firebaseConfig = {
  apiKey: "AIzaSyB1FCnPBNif3OFLebGag7lRLgW-LYuFpS8",
  authDomain: "moody-b6766.firebaseapp.com",
  projectId: "moody-b6766",
  storageBucket: "moody-b6766.appspot.com",
  messagingSenderId: "706708835527",
  appId: "1:706708835527:web:f9bd98da405ec95bf982e2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(auth)

function App() {
  const isLoggedOutView = (
    <section className="logged-out-view">
      <div className="container">
        <h1 className="app-title">Moody</h1>

        <div className="provider-buttons">
          <button id="sign-in-with-google-btn" className="provider-btn">
            <img src={GoogleImage} className="google-btn-logo" />
            Sign in with Google
          </button>
        </div>

        <SignIn/>
      </div>
    </section>
  );

  const isLoggedInView = (
    <section>
      Random Stuff
    </section>
  );

  return (
    <>      
      {isLoggedOutView}
    </>
  )
}

export default App;
