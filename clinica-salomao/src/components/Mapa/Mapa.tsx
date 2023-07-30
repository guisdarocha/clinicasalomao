import brasil from '../../assets/mapaBrasil.svg'
import whats from '../../assets/whats.svg'

const Mapa = () => {
    return (
    <>
    <div className='aling-center bg-creme h-[800px] pt-[15rem] '>
        <div className='flex justify-center'>
            <img src={brasil} alt="" className='flex' />
            <div className="grid self-center -ml-[3rem] w-[28rem] h-[289px]">
                <h3 className='text-[2.25rem] text-vermelho-madeira font-belleza leading-tight uppercase'>Você sabia que o Brasil é referência MUNDIAL em Estética?</h3>
                <h4 className='text-[2.2rem] pt-[55px] text-vermelho-madeira font-mont leading-tight'>Isso mesmo, é daqui que saem os protocolos com os melhores profissionais e produtos.</h4>
            </div>
         </div>

         <div className='flex justify-center items-center pt-[2rem] '>
         <a href='https://wa.me/5511997173432?text=Gostaria de saber mais sobre a Estética Salomão'>
            <button className='flex bg-gradient-to-r from-whats-escuro via-whats to-whats-escuro border-4 border-branco cursor-pointer drop-shadow-lg px-[4rem] py-[2rem] rounded-[8rem] hover:shadow-dentro hover:shadow-creme hover:transition-all hover:ease-out hover:duration-700'>
                <span className='text-[3rem] font-mont font-extrabold drop-shadow-lg leading-tight text-branco uppercase hover:text-[3.1rem] hover:transition-all hover:ease-out hover:duration-700'>Quero tratar minha flacidez</span>
                <img src={whats} alt="" className='pl-[1rem] self-center '/>
            </button>
          </a>  
         </div>
    </div>
    </>
    )
}

export default Mapa     