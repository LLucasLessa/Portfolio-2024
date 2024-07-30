import Botao from '../Botao'
import './itensProjetos.css'

const ItensProjetos = (props) => {

  return(
    <div className={`itens-div-geral ${props.direcao}direcao-flex`}>
      <img className='imagem-projeto' src={props.imagem} />
      <div className='itens-div-descricao'>
        <h3>{props.titulo}</h3>
        <p>{props.descricao}</p>
        <div>
          <img className={`imagem-icons ${props.nodejs} `} src={'./public/img/icons/nodejs-48.png'} />
          <img className={`imagem-icons ${props.html} `} src={'./public/img/icons/html-48.png'} />
          <img className={`imagem-icons ${props.css} `} src={'./public/img/icons/css-48.png'} />
          <img className={`imagem-icons ${props.javascript} `} src={'./public/img/icons/javascript-48.png'} />
          <img className={`imagem-icons ${props.react} `} src={'./public/img/icons/react-100.png'} />
          <img className={`imagem-icons ${props.typescript} `} src={'./public/img/icons/typescript-48.png'} />
        </div>
        <div className='div-botao'>
          <Botao className='botao-alinhamento' nome='Saiba Mais'/>
        </div>
      </div>
    </div>
  )
}

export default ItensProjetos