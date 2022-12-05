import { useState } from "react";
import ChildInput from "./ChildInput";

function ShareValue(){
  const [value, setValue] = useState("First Value");

  const handleChangeValue = (childStateValue) => {
    setValue(childStateValue);
  }

  return (
    <div>
      <ChildInput value={value} onChangeValue={handleChangeValue} />
      <p>Value: {value}</p>
    </div>
  );
}

export default ShareValue;