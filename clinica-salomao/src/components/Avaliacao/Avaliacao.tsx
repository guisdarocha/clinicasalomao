import senhora from '../../assets/senhora.png'
import whats from '../../assets/whats.svg'

const Avaliacao = () => {
    return (
    <>
    <div className='bg-vermelho-madeira drop-shadow-lg h-auto'>

        <div className='flex justify-center items-center mx-auto max-w-[1080px] '>
            <div className='grid grid-col-2'>

            
                <div className='cols-span-2'>

                        <div className='flex justify-center items-center mx-auto'>

                            <img src={senhora} alt="" className='max-w-[68rem] max-h-[31rem]' />
                        </div>
        
                        <div className="text-center justify-center items-center mx-auto  pt-[5rem] w-[53rem]">
                            <p className='text-[2.5rem] text-creme-claro font-mont '>Através de uma avaliação personalizada e individual, um protocolo será montado especialmente para você.</p>
                            <p className='text-[2.5rem] pt-[2rem] text-creme-claro font-mont '>Nosso profissional irá lhe apresentar o melhor tratamento, para que você tenha resultado que sempre sonhou e saia com a sua autoestima nas alturas.</p>
                            <p className='text-[2.5rem] pt-[2rem] text-creme-claro font-mont '>Faça inveja para suas amigas e fique 10 anos mais jovem!</p>
                        </div>

                                <div className='pt-[5rem] -mb-[2rem] flex justify-center '>
                                    <a href='https://wa.me/5511997173432?text=Gostaria de saber mais sobre a Estética Salomão'>
                                            <button className='flex justify-center items-center mx-auto bg-gradient-to-r from-whats-escuro via-whats to-whats-escuro border-4 border-branco drop-shadow-lg cursor-pointer px-[4rem] pt-[1rem] pb-[1rem] rounded-[8rem] hover:shadow-dentro hover:shadow-creme hover:transition-all hover:ease-out hover:duration-700'>
                                                <span className='text-[2.1rem] font-mont font-extrabold w-[48rem] text-center drop-shadow-lg text-branco leading-tight uppercase hover:text-[2.2rem] hover:w-[51rem] hover:transition-all hover:ease-out hover:duration-700'>Quero fazer uma avaliação gratuita</span>
                                                <img src={whats} alt="" className='pl-[1rem] self-center '/>
                                            </button>
                                    </a>
                                </div>
                </div>
            </div>

        </div>

    </div>
    </>
    )
}

export default Avaliacao