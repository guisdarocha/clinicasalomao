import vanessa from '../../assets/vanessa.png'
import matheus from '../../assets/matheus.png'
import beatriz from '../../assets/beatriz.png'
import whats from '../../assets/whats.svg'
import botao from '../../assets/botaowhats.svg'
import calendario from '../../assets/calendario.svg'

const Equipe = () => {
    return (
    <>
    <div className="bg-creme flex justify-center items-center mx-auto">

        <div className="grid grid-cols-2 justify-center items-center max-w-[360px] pt-[6rem] pb-[10rem] xl:max-w-[1280px]">
            
            <div className="justify-center items-center mx-auto col-span-3 w-[15.5rem] pb-[8rem] xl:w-[65rem]">
                <h3 className='text-[0.87rem] font-mont text-center text-vermelho-madeira xl:text-[2.25rem]'>
                Nossa Equipe é formada por profissionais Especialistas em Harmonização Facial com cursos
                de especialização com mais de
                <span className='font-mont font-extrabold'> 15.000 clientes e 45.000 protocolos realizados.</span>
                </h3>
            </div>
            
            <div className='grid col-span-2 mx-12 -mt-10 xl:mb-[5rem] xl:ml-[42rem] '>
                <div className='flex border-2 border-siena rounded-br-2xl justify-center items-center mx-auto xl:h-[10rem] xl:w-[30rem] '>
                        <img src={vanessa} alt="" className='w-[6rem] -ml-[2rem] -my-[1rem] xl:w-[15rem]'/>
                            <h5 className='text-[0.8rem] w-[17rem]  mx-[1rem] justify-center items-center font-mont text-center text-vermelho-madeira xl:text-[1.25rem] xl:pt-5 xl:w-[15rem]'>Dra. Vanessa Pouza Biomédica Esteta CRBM: 22183</h5>
                </div>
            </div>

            <div className='grid col-span-2 mx-12 mt-10  xl:mb-[7.5rem] xl:ml-[42rem]'>
                <div className='flex border-2 border-siena rounded-br-2xl justify-center items-center mx-auto  xl:h-[10rem] xl:w-[30rem] '>
                        <img src={matheus} alt="" className='w-[6rem] -ml-[2rem] -my-[1rem] xl:w-[15rem]'/>
                            <h5 className='text-[0.8rem] w-[17rem]  mx-[1rem] justify-center items-center font-mont text-center text-vermelho-madeira  xl:text-[1.25rem] xl:pt-5 xl:w-[15rem]'>Dr. Matheus Lobato Biomédico Esteta CRBM: 30182</h5>
                </div>
            </div>

            <div className='grid col-span-2 mx-12 -mt-[25rem] xl:mb-[15rem]  xl:ml-[42rem]'>
                <div className='flex border-2 border-siena rounded-br-2xl justify-center items-center mx-auto  xl:h-[10rem] xl:w-[30rem]'>
                        <img src={beatriz} alt="" className='w-[6rem] -ml-[2rem] -my-[1rem] xl:w-[15rem]'/>
                            <h5 className='text-[0.8rem] w-[17rem]  mx-[1rem] justify-center items-center font-mont text-center text-vermelho-madeira xl:text-[1.25rem] xl:pt-5 xl:w-[15rem] '>Dra. Beatriz Aguirre Biomédica Esteta CRBM: 49802</h5>
                </div>
            </div>
         
                <div className="bg-siena flex justify-center items-center mx-auto w-[360px] px-[2rem] mt-[15rem] xl:w-[1920px] xl:h-[25rem] xl:mt-[25rem] ">
                   <div className='xl:flex xl:justify-center xl:items-center xl:mx-auto xl:max-w-[1150px]'>
                        
                        <img src={calendario} alt="" className=' w-[3.3rem] h-[3.5rem] xl:w-[11rem] xl:h-[13rem]' />
                        <p className='text-left mx-auto items-center py-[4rem] pl-[1.5rem]  text-[1rem] font-mont text-creme-claro uppercase xl:text-[2.25rem]'>Nós oferecemos um acompanhamento 
                        <span className='font-extrabold'> 7 dias por semana,</span> após a realização do procedimento
                        <span className='font-extrabold'> através de um Whatsapp especialmente para você.</span>
                        </p>
                   </div>
                </div>
           
                <div className=' bg-gradient-to-b from-vermelho-madeira to-vermelho-escuro -mt-[40rem] col-span-3 mx-auto  rounded-46 w-[11rem] xl:w-[20rem] xl:-mt-[50rem]'> 
                   
                   <p className='text-center text-[1.1rem] text-creme-claro font-mont font-extrabold uppercase xl:text-[2.8rem]'>Para você</p>
                 </div>

            <div className="justify-center items-center mx-auto col-span-3 pt-[3rem]">

                <ul className='list-disc text-[0.875rem] px-[3rem] w-[25rem] text-left font-mont text-vermelho-madeira xl:text-[2.25rem] xl:w-[60rem]'>
                    <li >Protocolos seguros e Inovadores sempre pensando em você;</li>
                    <li className='pt-[1rem]'>Produtos com ANVISA , onde você terá acesso a rastreabilidade junto ao fornecedor;</li>
                    <li className='pt-[1rem]'>Produtos abertos na sua frente antes de qualquer procedimento. Transparência sempre;</li>
                    <li className='pt-[1rem]'>Clínica regularizada em todos os órgãos;</li>
                    <li className='pt-[1rem]'>Avaliação totalmente gratuita e personalizada;</li>
                    <li className='pt-[1rem]'>Avaliação e procedimento no mesmo dia.</li>
                </ul>


                <div className='flex justify-center items-center pt-[2rem] xl:mx-auto xl:mb-[-3rem] xl:pt-[8rem] '>
                            <a href='https://wa.me/5511997173432?text=Gostaria de saber mais sobre a Estética Salomão'>
                                <button className='flex justify-center items-center mx-auto cursor-pointer drop-shadow-lg '>
                                    <img src={botao} alt="" className='relative w-[21rem]  xl:w-[70rem] hover:w-[22rem] hover:shadow-dentro hover:shadow-creme hover:transition-all hover:ease-out hover:duration-700 xl:hover:w-[72rem] xl:hover:shadow-dentro xl:hover:shadow-creme xl:hover:transition-all xl:hover:ease-out xl:hover:duration-700'/>
                                    <span className='absolute pr-[1rem] text-[0.8rem] font-mont font-extrabold drop-shadow-lg leading-tight text-branco uppercase xl:text-[2.5rem] xl:pr-[5rem]'>Quero iniciar agora meu tratamento</span>
                                    <img src={whats} alt="" className='absolute right-6 w-[1.5rem] h-auto  self-center xl:w-[5rem] '/>
                                </button>
                            </a>  
                </div>
            </div>
        
     

        </div>

    </div>
    </>
    )
}

export default Equipe