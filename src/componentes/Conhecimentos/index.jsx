import './conhecimentos.css'
import htmlicon from '/public/img/icons/html-96.png';
import cssicon from '/public/img/icons/css-96.png';
import javascripticon from '/public/img/icons/javascript-96.png';
import reacticon from '/public/img/icons/React-100.png';
import nodeicon from '/public/img/icons/nodejs-96.png';
import mysqlicon from '/public/img/icons/mysql-96.png';
import gcpicon from '/public/img/icons/googlecloud-96.png';


const Conhecimentos = () => {
  return(
    <div className='div-geral-conhecimentos'>
      <h2>Conhecimentos</h2>
      <div className='imagens-conhecimentos'>
        <div><img src={htmlicon}/></div>
        <div><img src={cssicon}/></div>
        <div><img src={javascripticon}/></div>
        <div><img src={reacticon}/></div>
        <div><img src={nodeicon}/></div>
        <div><img src={mysqlicon}/></div>
        <div><img src={gcpicon}/></div>

        <div><img src={htmlicon}/></div>
        <div><img src={cssicon}/></div>
        <div><img src={javascripticon}/></div>
        <div><img src={reacticon}/></div>
        <div><img src={nodeicon}/></div>
        <div><img src={mysqlicon}/></div>
        <div><img src={gcpicon}/></div>

        <div><img src={htmlicon}/></div>
        <div><img src={cssicon}/></div>
        <div><img src={javascripticon}/></div>
        <div><img src={reacticon}/></div>
        <div><img src={nodeicon}/></div>
        <div><img src={mysqlicon}/></div>
        <div><img src={gcpicon}/></div>
      </div>
    </div>
  )
}


export default Conhecimentos