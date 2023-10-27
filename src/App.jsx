import GoogleImage from "./assets/providers/google.png";

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

        <div className="auth-fields-and-buttons">
          <input id="email-input" type="email" placeholder="Email"></input>
          <input id="password-input" type="password" placeholder="Password"></input>

          <button id="sign-in-btn" className="primary-btn">Sign in</button>
          <button id="create-account-btn" className="secondary-btn">Create Account</button>
        </div>
      </div>
    </section>
  );

  return (
    <>      
      {isLoggedOutView}
    </>
  )
}

export default App;
