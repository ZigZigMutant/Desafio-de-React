import Card from '../components/Card'

const jogos = [
  {
    id: 1,
    titulo: 'ELDEN RING',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCJBBugIuNh0gZK250slRBzslxCVNszSSyvnXvMCVqe9PRVwjyOHMo_W7y&s=10',
    descricao: 'Um mundo aberto repleto de desafios e aventuras.',
    categoria: 'Ação',
    preco: '229,90',
  },
  {
    id: 2,
    titulo: 'KATANA ZERO',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJGDPOS-fxEEOgeSpq0X9QrTFUw65LsWDHQZISNGqryyvMfirCuWYmfGbi&s=10',
    descricao: 'Um jogo de ação com elementos de fogo e sombra.',
    categoria: 'Ação',
    preco: '59,90',
  },
  {
    id: 3,
    titulo: 'MINECRAFT',
    imagem: 'https://sm.ign.com/ign_br/screenshot/default/tmp-cgtjz0-bb7faa1483782db2-minecraft-horizontal-key-art_n1te.jpg',
    descricao: 'Crie e explore um mundo de blocos infinitos.',
    categoria: 'Aventura',
    preco: '99,90',
  },
  {
    id: 4,
    titulo: 'CRIMSON DESERT',
    imagem: 'https://image.api.playstation.com/vulcan/ap/rnd/202608/2006/8bd2affb4939bf663b1bd7a78ad83345bfd1df3e961c2a72.jpg',
    descricao: 'Um RPG de ação em um mundo aberto cheio de mistérios.',
    categoria: 'Ação e Aventura',
    preco: '199,90',
  },
  {
    id: 5,
    titulo: 'BATMAN ARKHAM KNIGHT',
    imagem: 'https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000045916/8374aebdcdd8668f5dd4ee82c005beaa473b280bf77f9677d948ff0f24a864d3',
    descricao: 'Enfrente o Coringa e salve Gotham City.',
    categoria: 'Ação',
    preco: '139,90',
  },
  {
    id: 6,
    titulo: 'CARRION',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62esU8h5bKBLL5_hItyMz7KbQGSvJc89JYuPAkJAiPA&s=10',
    descricao: 'Encarne um monstro e espalhe o caos em um laboratório.',
    categoria: 'Aventura',
    preco: '54,90',
  },
]

function Produtos() {
  return (
    <div className="pagina">
      <h2>Nossos jogos</h2>

      <div className="lista">
        {jogos.map((jogo) => (
          <Card
            key={jogo.id}
            titulo={jogo.titulo}
            imagem={jogo.imagem}
            descricao={jogo.descricao}
            categoria={jogo.categoria}
            preco={jogo.preco}
          />
        ))}
      </div>
    </div>
  )
}

export default Produtos
