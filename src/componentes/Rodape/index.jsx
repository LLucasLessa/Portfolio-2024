import './rodape.css'

const Rodape = () => {
  return(
    <section className='rodape-section'>
      <div className='rodape-circle circle-position'></div>
      <div className='rodape-circle circle-position-2'></div>
      <div className='rodape-area'>
        <div className='rodape-content'>
          <div>
            <h3>Contato</h3>
          </div>
          <div className='contato-content'>
            <div className='contato-links'>
              <a className='div-contato-conteudo' href='http://www.github.com/LLucasLessa' target='_blank'>
                <div className='div-imagem-contato'>
                  <img src='./public/img/icons/github-90.png' />
                </div>
                <p className='p-contato'>github.com/LLucasLessa</p>
              </a>
              <a className='div-contato-conteudo' href='http://www.linkedin.com/in/lucaslessagomes/' target='_blank'>
                <div className='div-imagem-contato'>
                  <img src='./public/img/icons/linkedin-90.png' />
                </div>
                <p className='p-contato'>linkedin.com/in/lucaslessagomes/</p>
              </a>
              <div className='div-contato-conteudo'>
                <div className='div-imagem-contato'>
                  <img src='./public/img/icons/email-90.png' />
                </div>
                <p className='p-contato'>lucaslessagomes@gmail.com</p>
              </div>
            </div>
            <div className='contato-mensagem'>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rodape