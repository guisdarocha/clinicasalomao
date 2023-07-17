import vanessa from '../../assets/vanessa.png'
import matheus from '../../assets/matheus.png'
import beatriz from '../../assets/beatriz.png'
import whats from '../../assets/whats.svg'

const Equipe = () => {
    return (
    <>
    <div className="bg-creme flex justify-center items-center mx-auto">

        <div className="grid grid-cols-3 flex justify-center items-center max-w-[1080px] pt-[4rem]">
            <div className="justify-center items-center mx-auto col-span-3 w-[50rem] pb-[5rem]">
                <h3 className='text-[2.5rem] font-belleza text-center text-vermelho-madeira leading-tight'>Nossa Equipe é formada por profissionais Especialistas em Harmonização Facial com cursos
                de especialização com mais de 15.000 clientes e 45.000 protocolos realizados</h3>
            </div>
            
            <div className='justify-center items-center mx-auto'>
                    <img src={vanessa} alt="" />
                    <h5 className='text-[1.1rem] w-[10rem] font-belleza text-center text-vermelho-madeira leading-tight'>Dra. Vanessa Pouza Biomédica Estéta CRBM: 22183</h5>
            </div>

                <div>
                    <img src={matheus} alt="" />
                    <h5>Dr. Matheus Lobato Biomédico Estéta CRBM: 30182</h5>
                </div>

                <div>
                    <img src={beatriz} alt="" />
                    <h5>Dra. Beatriz Aguirre Biomédica Estéta CRBM: 49802</h5>
                </div>

            <div className="acampamento">
                <p>Você terá um acampamento 7 dias por semana, após a realização do
                procedimento através de um Whatsapp especialmente para você;</p>
            </div>

            <ul className='list-disc'>
                <li>Protocolos seguros e Inovadores sempre pensando em você;</li>
                <li>Produtos com ANVISA , onde você terá acesso a rastreabilidade junto ao fornecedor;</li>
                <li>Produtos abertos na sua frente antes de qualquer procedimento. Transparência sempre;</li>
                <li>Clínica regularizada em todos os órgãos;</li>
                <li>Avaliação totalmente gratuita e personalizada;</li>
                <li>Avaliação e procedimento no mesmo dia.</li>
            </ul>

            <button className='whatsapp'>
                <img src={whats} alt=""/>
                <span>Quero tratar minha flacidez</span>
             </button>   
        </div>

    </div>
    </>
    )
}

export default Equipe