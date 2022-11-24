import { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  }
  
  const onClickLogout = () => {
    setIsLoggedIn(false);
  }

  return(
    <div>
      <h1>안녕하세요!</h1>
      <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout} />
    </div>
  );
}

export default LandingPage;