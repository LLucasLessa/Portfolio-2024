import ItemServico from '../ItemServico'
import './servicos.css'

const Servicos = () => {
  return(
    <section className='servicos-section'>
      <h3 className='servicos-title'>Servicos</h3>
      <div className='servicos-main'>
        <div className='div-item-servicos'>
          <ItemServico 
          imagem='./public/img/icons/atendimentoCliente-80.png'
          titulo='Atendimento'
          descricao='Trabalhar com atendimento ao cliente me proporcionou habilidades valiosas em comunicação e resolução de problemas. Esta experiência me ensinou a importância de entender as necessidades dos clientes e a fornecer soluções eficazes e personalizadas. Habilidades que ao meu ver são fundamentais para um desenvolvedor.'
          /></div>
        <div className='div-item-servicos'>
          <ItemServico 
          imagem='./public/img/icons/freelancer-80.png'
          titulo='Freelancer'
          descricao='Estou me aventurando no mundo dos freelances, oferecendo serviços de desenvolvimento de sites para uma variedade de clientes. Esta nova fase me permite aplicar minhas habilidades técnicas em projetos reais, ao mesmo tempo em que desenvolvo minha capacidade de gerenciar projetos e prazos de forma independente.'
          /></div>
        <div className='div-item-servicos'>
          <ItemServico 
          imagem='./public/img/icons/telaFrontEnd.png'
          titulo='Desenvolvimento Front-End'
          descricao='Desenvolvedor front-end especializado em React, com experiência na criação de interfaces de usuário modernas e responsivas. Com o objetivo de transformar designs em experiências de usuário intuitivas e eficientes, garantindo a compatibilidade entre diferentes navegadores e dispositivos. Utilizo as melhores práticas e as mais recentes tecnologias do mercado.'
          /></div>
        <div className='div-item-servicos'>
          <ItemServico 
          imagem='./public/img/icons/mobileApp-80.png'
          titulo='Desenvolvimento Mobile'
          descricao='Atualmente, estou expandindo minhas habilidades para o desenvolvimento mobile, focando em frameworks como React Native. Este aprendizado me permite criar aplicações móveis que oferecem uma experiência de usuário consistente tanto em dispositivos Android quanto iOS.'
          /></div>
      </div>
    </section>
  )
}

export default Servicos