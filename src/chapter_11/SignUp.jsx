import { useState } from "react";

function SignUp(props){
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [intro, setIntro] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleChangeIntro = (event) => {
    setIntro(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`이름: ${name}, 성별: ${gender}, 소개: ${intro}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름: <input type="text" value={name} onChange={handleChangeName} />
      </label>

      <label>
        성별: 
        <select value={gender} onChange={handleChangeGender}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>

      <label>
        소개: <textarea value={intro} onChange={handleChangeIntro} placeholder="소개를 입력하세요."></textarea>
      </label>

      <button type="submit">제출</button>
    </form>
  );
}

export default SignUp;