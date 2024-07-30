import EscritorDeTexto from '../escritorDeTexto'
import './paginaInicial.css'
const PaginaInicial = () => {

  return (
    <section className='section-geral-pagina-inicial'>
      <div className='div-pagina-inicial'>
        <EscritorDeTexto text='{LLucas.Dev}' tempo={120}/>
      </div>
      <div className='traco'></div>
      <div className='subtexto-pagina-inicial'>
        <EscritorDeTexto text='Desenvolvedor Front-end React' tempo={50} />
      </div>
    </section>
  )
}

export default PaginaInicial