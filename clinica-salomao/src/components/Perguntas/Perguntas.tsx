import whats from '../../assets/whats.svg'
import seta from '../../assets/seta.svg'
import { useState } from 'react';

const Perguntas = () => {

    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
      setShowAnswer((prevState) => !prevState);
    };

    return (
    <>
    <div className="bg-creme-claro flex justify-center items-center mx-auto">

        <div className="grid grid-cols-2 flex justify-center items-center max-w-[1080px] pt-[4rem]">

            <div className='flex justify-start col-span-2 '>
                <h3 className='w-[20rem] text-[3.5rem] font-belleza text-vermelho-madeira uppercase leading-tight'>perguntas frequentes</h3>
            </div>

            <div className="col-span-2 pt-[2rem] max-w-[55rem] ">
                <div className="flex justify-start mx-auto cursor-pointer bg-gradient-to-b from-perguntaA to-perguntaB cursor-pointer py-3 px-[11rem] rounded-46 drop-shadow-lg" onClick={toggleAnswer}>
                    <p className="text-[2.3rem] text-creme font-belleza">Preciso fazer uma avaliação?</p> 
                    <img src={seta} className='pt-[0.4rem] pl-[1rem]'/>
                </div>
                {showAnswer && (
                    <div className="flex justify-center mx-auto bg-creme  pt-[2rem]  rounded-bl-46  rounded-br-46 drop-shadow-lg">
                    <p className='text-[1.5rem] w-[45rem] font-belleza text-vermelho-madeira leading-tight'>Sim, pois cada cliente tem uma indicação e anatomia distinta. Os tratamentos variam de acordo com o que vc deseja de resultado e indicação do profissional.</p>
                    </div>
                )}
            </div>
        </div>   
    </div>      


    <div className="container">
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