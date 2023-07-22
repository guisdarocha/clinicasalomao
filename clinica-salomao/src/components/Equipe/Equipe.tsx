import vanessa from '../../assets/vanessa.png'
import matheus from '../../assets/matheus.png'
import beatriz from '../../assets/beatriz.png'
import whats from '../../assets/whats.svg'

const Equipe = () => {
    return (
    <>
    <div className="bg-creme flex justify-center items-center mx-auto">

        <div className="grid grid-cols-3 justify-center items-center max-w-[1080px] pt-[4rem]">
            
            <div className="justify-center items-center mx-auto col-span-3 w-[50rem] pb-[5rem]">
                <h3 className='text-[2.5rem] font-belleza text-center text-vermelho-madeira leading-tight'>Nossa Equipe é formada por profissionais Especialistas em Harmonização Facial com cursos
                de especialização com mais de 15.000 clientes e 45.000 protocolos realizados</h3>
            </div>
            
            

            <div className='justify-center items-center mx-auto mb-[9rem]'>
                    <img src={vanessa} alt="" className='hover:h-[230px] w-auto'/>
                        <h5 className='text-[1.1rem] w-[10rem] justify-center items-center mx-auto mt-[1rem] font-belleza text-center text-vermelho-madeira leading-tight'>Dra. Vanessa Pouza Biomédica Estéta CRBM: 22183</h5>
            </div>


            <div className='justify-center items-center mx-auto mb-[9rem]' >
                    <img src={matheus} alt="" className='hover:h-[240px] w-auto'/>
                        <h5 className='text-[1.1rem] w-[10rem] justify-center items-center mx-auto mt-[1rem] font-belleza text-center text-vermelho-madeira leading-tight'>Dr. Matheus Lobato Biomédico Estéta CRBM: 30182</h5>

            </div>

            <div className='justify-center items-center mx-auto mb-[9rem]'>
                    <img src={beatriz} alt="" className='hover:h-[240px] w-auto'/>
                        <h5 className='text-[1.1rem] w-[10rem] justify-center items-center mx-auto mt-[1rem] font-belleza text-center text-vermelho-madeira leading-tight'>Dra. Beatriz Aguirre Biomédica Estéta CRBM: 49802</h5>

            </div>

            
            <div className="bg-siena col-span-3 rounded-46 -mt-[3rem]">
                <p className='text-center mx-auto items-center w-[40rem] py-[2.5rem] rounded-tl-46 rounded-br-46 text-[2rem] font-belleza text-creme leading-tight uppercase'>Você terá um acampamento 7 dias por semana, após a realização do
                procedimento através de um Whatsapp especialmente para você!</p>
            </div>
            
            <div className="justify-center items-center mx-auto col-span-3 pt-[3rem]">

                <ul className='list-disc text-[2rem] px-[3rem] w-[55rem] text-left font-belleza text-vermelho-madeira'>
                    <li >Protocolos seguros e Inovadores sempre pensando em você;</li>
                    <li className='pt-[1rem]'>Produtos com ANVISA , onde você terá acesso a rastreabilidade junto ao fornecedor;</li>
                    <li className='pt-[1rem]'>Produtos abertos na sua frente antes de qualquer procedimento. Transparência sempre;</li>
                    <li className='pt-[1rem]'>Clínica regularizada em todos os órgãos;</li>
                    <li className='pt-[1rem]'>Avaliação totalmente gratuita e personalizada;</li>
                    <li className='pt-[1rem]'>Avaliação e procedimento no mesmo dia.</li>
                </ul>

            </div>

            <div className='col-span-3 flex justify-center pt-[4rem] pb-[8rem]'>
            <a href='https://wa.me/5511997173432?text=Gostaria de saber mais sobre a Estética Salomão'>
                    <button className='flex justify-center items-center mx-auto bg-gradient-to-r from-whats-escuro via-whats to-whats-escuro border-4 border-branco drop-shadow-lg cursor-pointer px-[4rem] py-[2rem] rounded-[8rem] hover:shadow-dentro hover:shadow-creme'>
                        <span className='text-[2.1rem] font-belleza w-[43rem] text-center drop-shadow-lg text-branco leading-tight uppercase hover:text-[2.2rem] hover:w-[45rem]'>Quero fazer uma avaliação gratuita</span>
                        <img src={whats} alt="" className='pl-[1rem] self-center '/>
                    </button>
            </a>        
            </div>
        </div>

    </div>
    </>
    )
}

export default Equipe