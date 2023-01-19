import GoogleSignin from "../../img/googleButton.png";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { NavBarContainer } from "./styles";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };

  return (
    <NavBarContainer>
      <h1>React Chat</h1>
      {user ? (
        <button onClick={signOut}>Sign Out</button>
      ) : (
        <button>
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
          />
        </button>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
