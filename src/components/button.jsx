function Button(props) {
  return (
    <button className={`btn btn-${props.type || "primary"}`}>{props.text}</button>
  );
}

export default Button;

