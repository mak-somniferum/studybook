function ChildInput(props){
  const handleChange = (event) => {
    props.onChangeValue(event.target.value);
    // props.onChangeValue === 상위 컴포넌트의 handleChangeValue
  }
  return (
    <div>
      <input type="text" value={props.value} onChange={handleChange} />
    </div>
  );
}

export default ChildInput;