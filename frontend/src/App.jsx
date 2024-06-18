// This main app component should render the authetication page
// if the user hasn't logged in or signed up and render the
// chat's page if the user actually has.

import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  // If user doesn't exist...
  if (!user) {
    // render the authentication page
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    // else, render the chat's page
    return <ChatsPage user={user} />;
  }
}

export default App;
