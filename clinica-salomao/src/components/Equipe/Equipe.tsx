import vanessa from '../../assets/vanessa.png'
import matheus from '../../assets/matheus.png'
import beatriz from '../../assets/beatriz.png'
import whats from '../../assets/whats.svg'
import calendario from '../../assets/calendario.svg'

const Equipe = () => {
    return (
    <>
    <div className="bg-creme flex justify-center items-center mx-auto">

        <div className="grid grid-cols-2 justify-center items-center max-w-[360px] pt-[4rem]">
            
            <div className="justify-center items-center mx-auto col-span-3 w-[15.5rem] pb-[8rem]">
                <h3 className='text-[0.87rem] font-mont text-center text-vermelho-madeira'>
                Nossa Equipe é formada por profissionais Especialistas em Harmonização Facial com cursos
                de especialização com mais de
                <span className='font-mont font-extrabold'> 15.000 clientes e 45.000 protocolos realizados.</span>
                </h3>
            </div>
            
            
            <div className='grid col-span-2 mx-9'>
                <div className='flex border-2 border-siena rounded-br-2xl justify-center items-center mx-auto my-[1rem]'>
                        <img src={vanessa} alt="" className='w-[6rem] -ml-[2rem] -my-[1rem]'/>
                            <h5 className='text-[0.8rem] w-[17rem]  mx-[2rem] justify-center items-center font-mont text-center text-vermelho-madeira '>Dra. Vanessa Pouza Biomédica Esteta CRBM: 22183</h5>
                </div>



            </div>
         
                <div className="bg-siena flex justify-center items-center mx-auto w-[360px] pl-[6rem]">
                    <img src={calendario} alt="" />
                    <p className='text-left mx-auto items-center w-[40rem] py-[4rem]  text-[2rem] font-mont text-creme-claro uppercase'>Nós oferecemos um acompanhamento 
                    <span className='font-extrabold'> 7 dias por semana,</span> após a realização do procedimento
                    <span className='font-extrabold'> através de um Whatsapp especialmente para você.</span>
                    </p>
                </div>
           
                <div className=' bg-gradient-to-b from-vermelho-madeira to-vermelho-escuro -mt-[50rem] col-span-3 mx-auto  rounded-46 w-[25rem]'> 
                   
                   <p className='text-center text-[2.8rem] text-creme-claro font-mont font-extrabold uppercase'>Para você</p>
                 </div>

            <div className="justify-center items-center mx-auto col-span-3 pt-[3rem]">

                <ul className='list-disc text-[2rem] px-[3rem] w-[55rem] text-left font-mont text-vermelho-madeira'>
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
                    <button className='flex justify-center items-center mx-auto bg-gradient-to-r from-whats-escuro via-whats to-whats-escuro border-4 border-branco drop-shadow-lg cursor-pointer px-[4rem] py-[2rem] rounded-[8rem] hover:shadow-dentro hover:shadow-creme hover:transition-all hover:ease-out hover:duration-700'>
                        <span className='text-[2.1rem] font-mont font-extrabold w-[48rem] text-center drop-shadow-lg text-branco leading-tight uppercase hover:text-[2.2rem] hover:w-[51rem] hover:transition-all hover:ease-out hover:duration-700'>Quero fazer uma avaliação gratuita</span>
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