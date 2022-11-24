import { useRef } from "react";

function Profile(props) {
  const nameInput = useRef();
  const fileInput = useRef();

  const handleSubmit = (event) => {
    alert(`이름: ${nameInput.current.value}, 프로필 사진: ${fileInput.current.files[0].name}`);
    event.preventDefault();
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>
        이름: <input type="text" ref={nameInput} />
      </label>

      <label>
        프로필 사진: <input type="file" ref={fileInput} />
      </label>

      <button type="submit">제출</button>
    </form>
  );
}

export default Profile;