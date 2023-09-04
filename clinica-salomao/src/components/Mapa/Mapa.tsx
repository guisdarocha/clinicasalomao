import brasil from '../../assets/mapaBrasil.svg'
import whats from '../../assets/whats.svg'
import botao from '../../assets/botaowhats.svg'

const Mapa = () => {
    return (
    <>
    <div className=' bg-creme h-[300px] pt-[6rem] xl:h-[46rem] xl:px-[5rem] '>
        <div className='xl:w-[1200px] xl:mx-auto'>
            <div className='grid grid-cols-2 '>
                <img src={brasil} alt="" className='w-[8rem] h-auto pt-6  pl-[1.4rem] xl:w-[25.6rem] xl:pt-[10rem] ' />
                <div className="-ml-[3rem] w-[11.1rem] xl:w-[45rem] xl:pt-[15rem] xl:-ml-[13.5rem]">
                    <h3 className='text-[1rem] text-vermelho-madeira font-belleza leading-tight uppercase xl:text-[2.25rem]'>Você sabia que o Brasil é referência MUNDIAL em Estética?</h3>
                    <h4 className='text-[0.8rem] pt-5 text-vermelho-madeira font-mont leading-tight xl:text-[2.25rem]'>Isso mesmo, é daqui que saem os protocolos com os melhores profissionais e produtos.</h4>
                </div>
            </div>

            <div className='flex justify-center items-center pt-[2rem] xl:mx-auto '>
            <a href='https://wa.me/5511997173432?text=Gostaria de saber mais sobre a Estética Salomão'>
                <button className='flex justify-center items-center mx-auto cursor-pointer drop-shadow-lg '>
                    <img src={botao} alt="" className='relative w-[21rem]  xl:w-[70rem] hover:w-[22rem]  hover:transition-all hover:ease-out hover:duration-700 xl:hover:w-[72rem]  xl:hover:transition-all xl:hover:ease-out xl:hover:duration-700'/>
                    <span className='absolute pr-[1rem] text-[0.8rem] font-mont font-extrabold drop-shadow-lg leading-tight text-branco uppercase xl:text-[3.125rem]'>Quero tratar minha flacidez</span>
                    <img src={whats} alt="" className='absolute right-6 w-[1.5rem] h-auto  self-center xl:w-[5rem] '/>
                </button>
            </a>  
            </div>
        </div>
    </div>
    </>
    )
}

export default Mapa     