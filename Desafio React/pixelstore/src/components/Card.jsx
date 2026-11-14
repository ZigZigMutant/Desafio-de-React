import Button from './Button'

function Card(props) {
  return (
    <div className="card">
      <img src={props.imagem} alt={props.titulo} />
      <h3>{props.titulo}</h3>
      <p>{props.descricao}</p>
      <p>Categoria: {props.categoria}</p>
      <p className="preco">R$ {props.preco}</p>
      <Button texto="Comprar" tipo="button" />
    </div>
  )
}

export default Card
