import { signOut } from "firebase/auth";
import "./navbar.css";
import { auth } from "../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";

export function Navbar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">Let's Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
}
