import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleSignin from "../../img/googleButton.png";
import { WelcomeContainer } from "./styles";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <WelcomeContainer>
      <h2>Welcome to React Chat.</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button>
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
        />
      </button>
    </WelcomeContainer>
  );
};

export default Welcome;
