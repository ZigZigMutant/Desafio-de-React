function Button(props) {
  return (
    <button className="botao" type={props.tipo} onClick={props.onClick}>
      {props.texto}
    </button>
  )
}

export default Button
