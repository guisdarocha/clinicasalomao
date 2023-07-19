import senhora from '../../assets/senhora.png'
import whats from '../../assets/whats.svg'

const Avaliacao = () => {
    return (
    <>
    <div className='bg-vermelho-madeira drop-shadow-lg'>

        <div className='flex justify-center items-center mx-auto max-w-[1080px] '>

            <div className='grid grid-cols-2'>
                <div className="justify-center items-center mx-auto pl-[3rem] pt-[5rem]">
                    <p className='text-[1.8rem] text-creme font-belleza leading-tight'>Através de uma avaliação personalizada, individual um protocolo será.</p>
                    <p className='text-[1.8rem] pt-[2rem] text-creme font-belleza leading-tight'>Montado especialmente para você. Nosso profissional irá lhe apresentar o melhor tratamento, para que você tenha resultado que sempre desejou e saia.</p>
                    <p className='text-[1.8rem] pt-[2rem] text-creme font-belleza leading-tight'>Maravilhada com sua autoestima nas alturas. Faça inveja para suas amigas e fique 10 anos mais jovem.</p>
                    
                    <div className='pt-[3rem]'>
                        <button className='flex px-[0.5rem] justify-center items-center mx-auto bg-gradient-to-r from-whats-escuro via-whats  to-whats-escuro py-[1rem] border-2 border-branco drop-shadow-lg cursor-pointer rounded-[8rem] hover:shadow-dentro hover:shadow-creme'>
                            <span className='text-[1.2rem] font-belleza  pl-[0.8rem] text-center drop-shadow-lg text-branco leading-tight uppercase'>Quero iniciar agora meu tratamento</span>
                            <img src={whats} alt="" className=' pl-[0.5rem] pr-[0.3rem] self-center w-[60px] '/>
                        </button>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <img src={senhora} alt="" className='' />
                </div>
            </div>

        </div>

    </div>
    </>
    )
}

export default Avaliacao