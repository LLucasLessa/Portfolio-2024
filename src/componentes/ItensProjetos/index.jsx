import Botao from '../Botao'
import './itensProjetos.css'
import htmlimg from '/public/img/icons/html-48.png';
import cssimg from '/public/img/icons/css-48.png';
import javascriptimg from '/public/img/icons/javascript-48.png';
import reactimg from '/public/img/icons/React-100.png';
import nodeimg from '/public/img/icons/nodejs-48.png';
import typescriptimg from '/public/img/icons/Typescript-48.png';

const ItensProjetos = (props) => {

  return(
    <div className={`itens-div-geral ${props.direcao}direcao-flex`}>
      <img className='imagem-projeto' src={props.imagem} />
      <div className='itens-div-descricao'>
        <h3>{props.titulo}</h3>
        <p>{props.descricao}</p>
        <div>
          <img className={`imagem-icons ${props.nodejs} `} src={nodeimg} />
          <img className={`imagem-icons ${props.html} `} src={htmlimg} />
          <img className={`imagem-icons ${props.css} `} src={cssimg} />
          <img className={`imagem-icons ${props.javascript} `} src={javascriptimg} />
          <img className={`imagem-icons ${props.react} `} src={reactimg} />
          <img className={`imagem-icons ${props.typescript} `} src={typescriptimg} />
        </div>
        <div className='div-botao'>
          <Botao className='botao-alinhamento' nome='Saiba Mais'/>
        </div>
      </div>
    </div>
  )
}

export default ItensProjetos