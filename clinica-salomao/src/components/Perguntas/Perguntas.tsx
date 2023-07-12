import whats from '../../assets/whats.svg'

const Perguntas = () => {
    return (
    <>
    <div className="container">
        <h3>perguntas frequentes</h3>
            <div>
                <div className="pergunta">
                    <p>Preciso fazer uma avaliação?</p>
                </div>
                <div className="resposta">
                    <p>Sim, pois cada cliente tem uma indicação e anatomia distinta. Os tratamentos variam de acordo com o que vc deseja de resultado e indicação do profissional</p>
                </div>
            </div>
            <div>
                <div className="pergunta">
                    <p>Após procedimento o que devo ter de cuidados ?</p>
                </div>
                <div className="resposta">
                    <p>Cada procedimento tem sua orientação. Mas pode ficar tranquila, rotina normal com alguns 
                    cuidados específicos de cada protocolo</p>
                </div>
            </div>
            <div>
                <div className="pergunta">
                    <p>Posso fazer mais de um procedimento no mesmo dia?</p>
                </div>
                <div className="resposta">
                    <p>Sim, porém tem protocolos que precisam de um intervalo entre eles para que sejam realizados</p>
                </div>
            </div>
            <div>
                <div className="pergunta">
                    <p>É feito com anestesia?</p>
                </div>
                <div className="resposta">
                    <p>Sim , nossos procedimentos são com anestesia tópica ou injetável, depende do protocolo</p>
                </div>
            </div>
            <div>
                <div className="pergunta">
                    <p>Tem contraindicação?</p>
                </div>
                <div className="resposta">
                    <p>Sim, principalmente lactantes e grávidas. É feito uma anamnese antes do seu procedimento 
                    para entender um pouco da sua saúde e dar continuidade ao seu protocolo com toda segurança</p>
                </div>
            </div>
            <div>
                <div className="pergunta">
                    <p>Resultado é imediato?</p>
                </div>
                <div className="resposta">
                    <p>Alguns procedimentos sim, outros ao longo dos dias. Cada protocolo tem sua função 
                    e importância no seu tratamento</p>
                </div>
            </div>
            <div>
                <div className="pergunta">
                    <p>Esses procedimentos são compatíveis com o organismo?</p>
                </div>
                <div className="resposta">
                    <p>São compatíveis e absorvidos pelo organismo. Melhor tecnologia que temos hoje na Estética é 
                    usada na Salomão sempre pensando na sua segurança</p>
                </div>
            </div>
        <button className='whatsapp'>
            <img src={whats} alt=""/>
        <span>Quero iniciar agora meu tratamento</span>
    </button>
    </div>
    </>
    )
}

export default Perguntas