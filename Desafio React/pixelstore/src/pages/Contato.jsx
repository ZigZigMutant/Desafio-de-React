import Button from '../components/Button'

function Contato() {
  function enviar(e) {
    e.preventDefault()
    alert('Mensagem enviada!')
  }

  return (
    <div className="pagina">
      <h2>Contato</h2>

      <form className="formulario" onSubmit={enviar}>
        <label>Nome</label>
        <input type="text" placeholder="Digite seu nome" />

        <label>E-mail</label>
        <input type="email" placeholder="Digite seu e-mail" />

        <label>Mensagem</label>
        <textarea rows="5" placeholder="Digite sua mensagem"></textarea>

        <Button texto="Enviar" tipo="submit" />
      </form>
    </div>
  )
}

export default Contato
