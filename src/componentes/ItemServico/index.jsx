import './itemServicos.css'

const ItemServico = (props) => {
  return(
    <div className='item-servico-main'>
      <div className='cabecalho-div-item-servico'>
        <div className='imagem-item-servico'><img src={props.imagem}></img></div>
        <div className='div-titulo'>
          <h3>{props.titulo}</h3>
        </div>
      </div>
      <div className='descricao-div-item-servico'>
        <span>{props.descricao}</span>
      </div>
    </div>
  )
}

export default ItemServico