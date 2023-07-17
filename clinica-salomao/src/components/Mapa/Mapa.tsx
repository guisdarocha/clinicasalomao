import brasil from '../../assets/mapaBrasil.svg'
import whats from '../../assets/whats.svg'

const Mapa = () => {
    return (
    <>
    <div className='aling-center bg-creme h-[800px] pt-[10rem] '>
        <div className='flex justify-center'>
            <img src={brasil} alt="" className='flex' />
            <div className="grid self-center -ml-[3rem] w-[28rem] h-[289px]">
                <h3 className='text-[2.25rem] text-vermelho-madeira font-belleza leading-tight uppercase'>Você sabia que o Brasil é referência MUNDIAL em Estética?</h3>
                <h4 className='text-[2.25rem] pt-[55px] text-vermelho-madeira font-belleza leading-tight'>Isso mesmo, é daqui que saem os protocolos com os melhores profissionais e produtos.</h4>
            </div>
         </div>

         <div className='flex justify-center items-center pt-[5rem] '>
            <button className='flex bg-gradient-to-r from-whats-escuro via-whats to-whats-escuro border-4 border-branco cursor-pointer drop-shadow-lg px-[4rem] py-[2rem] rounded-[8rem]'>
                <span className='text-[3rem] font-belleza drop-shadow-lg leading-tight text-branco uppercase'>Quero tratar minha flacidez</span>
                <img src={whats} alt="" className='animate-bounce pl-[1rem] self-center '/>
            </button>
         </div>
    </div>
    </>
    )
}

export default Mapa     