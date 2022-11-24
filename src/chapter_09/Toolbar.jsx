function Toolbar(props){
  const { isLoggedIn, onClickLogin, onClickLogout } = props;
  return(
    <div>
      {isLoggedIn && <h2>환영합니다!</h2>}

      {isLoggedIn
        ? <button onClick={onClickLogout}>로그아웃</button>
        : <button onClick={onClickLogin}>로그인</button>
      }
    </div>
  );
}

export default Toolbar;