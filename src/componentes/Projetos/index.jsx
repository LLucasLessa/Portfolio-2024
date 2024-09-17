import ItensProjetos from '../ItensProjetos'
import './projetos.css'

const Projetos = () => {
  return(
    <section className='projetos-section'>
      <h2 className='projetos-titulo'>Projetos</h2>
      <ItensProjetos imagem='./src/assets/organoimagecomfundo.png' direcao='!' titulo='Organo' descricao='Projeto desenvolvido em React onde o usuário insere os dados e cadastra um colaborador no sistema, sendo esse sistema separado por times com as suas respectivas cores e nomes.' typescript='none'/>
      
    </section>
  )
}

export default Projetos