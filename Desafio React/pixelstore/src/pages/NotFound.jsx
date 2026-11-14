import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="pagina">
      <h2>Erro 404</h2>
      <p>Página não encontrada.</p>
      <Link to="/">Voltar para o início</Link>
    </div>
  )
}

export default NotFound
