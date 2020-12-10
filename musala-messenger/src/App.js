
import './App.css';
import ChatRoom from './ChatRoom'
import SignIn from './SignIn';
import SignOut from './SignOut';
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "./firebase";

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <h2> hello </h2>
      <ChatRoom />
      { user? <SignOut/> : <SignIn />}
    </div>
  );
}

export default App;
