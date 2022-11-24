import { useState } from "react";

function ConfirmButton(){
  const [isConfirmed, setIsConfirmed] = useState(false);

  // const handleConfirm = () => {
  //   setIsConfirmed(!isConfirmed);
  // }

  function handleConfirm(){
    setIsConfirmed(!isConfirmed);
  }

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
}

export default ConfirmButton;