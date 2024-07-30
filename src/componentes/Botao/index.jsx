import './botao.css'

const Botao = (props) => {
  return(
    <div className='botao-div'>
      <button className='botao'>{props.nome}</button>
    </div>
)
}

export default Botao