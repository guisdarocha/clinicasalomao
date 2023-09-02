import whats from '../../assets/whats.svg'
import metodo from '../../assets/metodo.png'
import botao from '../../assets/botaowhats.svg'

const Metodo = () => {
    return (
    <>
    <div className="bg-gradient-to-b from-creme-claro to-creme flex justify-center items-center mx-auto">
        
        <div className='grid grid-cols-2  justify-center items-center max-w-[360px] pt-[2rem] xl:max-w-[1280px] xl:pt-[6rem] xl:px-[3rem]'>
            <h3 className='text-[1.5rem] w-[16rem] pl-5 font-belleza text-vermelho-madeira text-left uppercase leading-tight xl:text-[3.75rem] xl:w-[31rem]'>Qual o método utilizado ?</h3>
            <ul className='col-start-1 list-disc pl-8 text-[0.87rem] font-mont text-vermelho-madeira xl:text-[2.25rem]'>
                <li className='py-[2rem]'>Muito simples, sem cirurgia e sem necessidade de repouso.</li>
                <li className='w-[19rem] xl:w-[39rem]'>Técnicas e protocolos inovadores especialmente para você
                acabar com tudo que mais te incomoda de forma personalizada!</li>
            </ul>
            <img src={metodo} alt="" className='col-start-2 -mt-[8rem] w-[9.2rem] xl:w-[24rem] xl:ml-[7rem]'/>
            <ul className='col-span-2 list-disc py-[1rem] text-[0.87rem] pl-8 font-mont text-left text-vermelho-madeira xl:text-[2.25rem]'>
                <li className='pb-[2rem]'>Método seguro, minimamente invasivo sem necessidade de um processo
                de recuperação, pois não se trata de uma cirurgia.</li>
                <li>Protocolos mundialmente conhecidos pela eficiência em resultados nas clientes</li>
            </ul>

            <div className='col-span-2 justify-center items-center pt-[1rem] xl:py-[4rem] '>
                <a href='https://wa.me/5511997173432?text=Gostaria de saber mais sobre a Estética Salomão'>
                    <button className='flex justify-center items-center mx-auto cursor-pointer drop-shadow-lg '>
                        <img src={botao} alt="" className='relative w-[21rem] xl:w-[60rem] hover:w-[22rem] hover:shadow-dentro hover:shadow-creme hover:transition-all hover:ease-out hover:duration-700 xl:hover:w-[62rem] xl:hover:shadow-dentro xl:hover:shadow-creme xl:hover:transition-all xl:hover:ease-out xl:hover:duration-700'/>
                        <span className='absolute pr-[3rem] w-[19rem] text-center text-[0.8rem] font-mont font-extrabold drop-shadow-lg leading-tight text-branco uppercase xl:text-[2.5rem] xl:w-[65rem] xl:pr-[5rem]'>Quero uma avaliação gratuita</span>
                        <img src={whats} alt="" className='absolute right-10 w-[1.5rem] h-auto  self-center -mr-2  xl:w-[4rem]'/>
                    </button>
                </a>  
            </div>
        </div>

    </div>
    </>
    )
}

export default Metodo