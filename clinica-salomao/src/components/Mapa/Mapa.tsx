import brasil from '../../assets/mapaBrasil.svg'
import whats from '../../assets/whats.svg'
import botao from '../../assets/botao.png'

const Mapa = () => {
    return (
    <>
    <div className=' bg-creme h-[300px] pt-[6rem]'>
        <div className='grid grid-cols-2 '>
            <img src={brasil} alt="" className='w-[8rem] h-auto pt-6  pl-[1.4rem]' />
            <div className="-ml-[3rem] w-[11.1rem]">
                <h3 className='text-[1rem] text-vermelho-madeira font-belleza leading-tight uppercase'>Você sabia que o Brasil é referência MUNDIAL em Estética?</h3>
                <h4 className='text-[0.8rem] pt-5 text-vermelho-madeira font-mont leading-tight'>Isso mesmo, é daqui que saem os protocolos com os melhores profissionais e produtos.</h4>
            </div>
         </div>

         <div className='flex justify-center items-center pt-[2rem] '>
         <a href='https://wa.me/5511997173432?text=Gostaria de saber mais sobre a Estética Salomão'>
            <button className='flex justify-center items-center mx-auto cursor-pointer drop-shadow-lg '>
                <img src={botao} alt="" className='relative w-[21rem] hover:w-[22rem] hover:shadow-dentro hover:shadow-creme hover:transition-all hover:ease-out hover:duration-700'/>
                <span className='absolute pr-[1rem] text-[0.8rem] font-mont font-extrabold drop-shadow-lg leading-tight text-branco uppercase'>Quero tratar minha flacidez</span>
                <img src={whats} alt="" className='absolute right-6 w-[1.5rem] h-auto  self-center '/>
            </button>
          </a>  
         </div>
    </div>
    </>
    )
}

export default Mapa     