import senhora from '../../assets/senhora.png'
import whats from '../../assets/whats.svg'
import botao from '../../assets/botao.png'

const Avaliacao = () => {
    return (
    <>
    <div className='bg-vermelho-madeira drop-shadow-lg h-auto'>

        <div className='flex justify-center items-center mx-auto max-w-[360px] '>
            <div className='grid grid-col-2'>

            
                <div className='cols-span-2'>

                        <div className='flex justify-center items-center mx-auto'>

                            <img src={senhora} alt="" className='max-w-[22.5rem] max-h-auto' />
                        </div>
        
                        <div className="text-center justify-center items-center mx-auto  pt-[2rem] w-[18rem]">
                            <p className='text-[1rem] text-creme-claro font-mont '>Através de uma avaliação personalizada e individual, um protocolo será montado especialmente para você.</p>
                            <p className='text-[1rem] pt-[2rem] text-creme-claro font-mont '>Nosso profissional irá lhe apresentar o melhor tratamento, para que você tenha resultado que sempre sonhou e saia com a sua autoestima nas alturas.</p>
                            <p className='text-[1rem] pt-[2rem] text-creme-claro font-mont '>Faça inveja para suas amigas e fique 10 anos mais jovem!</p>
                        </div>

                        <div className='flex justify-center items-center pt-[2rem] -mb-6 '>
                            <a href='https://wa.me/5511997173432?text=Gostaria de saber mais sobre a Estética Salomão'>
                                <button className='flex justify-center items-center mx-auto cursor-pointer drop-shadow-lg '>
                                    <img src={botao} alt="" className='relative w-[21rem] hover:w-[22rem] hover:shadow-dentro hover:shadow-creme hover:transition-all hover:ease-out hover:duration-700'/>
                                    <span className='absolute pr-[1rem] text-[0.8rem] text-left w-[13rem] font-mont font-extrabold drop-shadow-lg leading-tight text-branco uppercase'>não perca mais tempo</span>
                                    <img src={whats} alt="" className='absolute right-10 w-[1.5rem] h-auto  self-center mr-4'/>
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