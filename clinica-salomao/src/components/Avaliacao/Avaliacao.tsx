import senhora from '../../assets/senhora.png'
import whats from '../../assets/whats.svg'
import botao from '../../assets/botaowhats.svg'

const Avaliacao = () => {
    return (
    <>
    <div className='bg-vermelho-madeira drop-shadow-lg h-auto'>

        <div className='flex justify-center items-center mx-auto max-w-[360px] xl:max-[1280px] '>
            <div className='grid grid-col-2'>

            
                <div className='cols-span-2'>

                        <div className='flex justify-center items-center mx-auto'>

                            <img src={senhora} alt="" className='max-w-[22.5rem] max-h-auto xl:max-w-[98rem]' />
                        </div>
        
                        <div className="text-center justify-center items-center mx-auto  pt-[2rem] w-[18rem] xl:w-[65rem] xl:py-[8rem]">
                            <p className='text-[1rem] text-creme-claro font-mont xl:text-[2.25rem]'>Através de uma avaliação personalizada e individual, um protocolo será montado especialmente para você.</p>
                            <p className='text-[1rem] pt-[2rem] text-creme-claro font-mont xl:text-[2.25rem]'>Nosso profissional irá lhe apresentar o melhor tratamento, para que você tenha resultado que sempre sonhou e saia com a sua autoestima nas alturas.</p>
                            <p className='text-[1rem] pt-[2rem] text-creme-claro font-mont xl:text-[2.25rem]'>Faça inveja para suas amigas e fique 10 anos mais jovem!</p>
                        </div>

                        <div className='flex justify-center items-center pt-[2rem] xl:mx-auto xl:mb-[-3rem] '>
                            <a href='https://wa.me/5511997173432?text=Gostaria de saber mais sobre a Estética Salomão'>
                                <button className='flex justify-center items-center mx-auto cursor-pointer drop-shadow-lg '>
                                    <img src={botao} alt="" className='relative w-[21rem]  xl:w-[70rem] hover:w-[22rem] hover:transition-all hover:ease-out hover:duration-700 xl:hover:w-[72rem]  xl:hover:transition-all xl:hover:ease-out xl:hover:duration-700'/>
                                    <span className='absolute pr-[1rem] text-[0.8rem] font-mont font-extrabold drop-shadow-lg leading-tight text-branco uppercase xl:text-[2.5rem] xl:pr-[5rem]'>Quero iniciar agora meu tratamento</span>
                                    <img src={whats} alt="" className='absolute right-6 w-[1.5rem] h-auto  self-center xl:w-[5rem] '/>
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