import { useState } from "react";
import BottomNav from "../components/BottomNav.jsx";
import Screens from "./Screens.jsx";
import MediaHeader from "../components/MediaHeader.jsx";
import Header from "../components/Header.jsx";

function App() {
  const [screenName, setScreenName] = useState("home");

  return (
    <>
      <MediaHeader />
      <Header onSetScreenName={setScreenName} selectedScreenName={screenName} />
      <Screens screenName={screenName} />
      <BottomNav
        onSetScreenName={setScreenName}
        selectedScreenName={screenName} // Pass selectedScreenName to BottomNav
      />
    </>
  );
}

export default App;
