import whats from '../../assets/whats.svg'
import metodo from '../../assets/metodo.png'

const Metodo = () => {
    return (
    <>
    <div className="bg-gradient-to-b from-creme-claro to-creme flex justify-center items-center mx-auto">
        
        <div className='grid grid-cols-2  justify-center items-center max-w-[1080px] pt-[4rem]'>
            <h3 className='text-[3.7rem] px-[2rem] pt-[4rem] w-[35rem] font-belleza text-vermelho-madeira text-left uppercase leading-tight'>Qual o método utilizado ?</h3>
            <ul className='col-start-1 list-disc  text-[1.8rem] px-[3rem] font-mont text-vermelho-madeira'>
                <li className='py-[2rem]'>Muito simples, sem cirurgia e sem necessidade de repouso.</li>
                <li>Técnicas e protocolos inovadores especialmente para você
                acabar com tudo que mais te incomoda de forma personalizada!</li>
            </ul>
            <img src={metodo} alt="" className='col-start-2'/>
            <ul className='col-span-2 list-disc py-[3rem] text-[1.8rem] px-[3rem] font-mont text-left text-vermelho-madeira'>
                <li className='pb-[2rem]'>Método seguro, minimamente invasivo sem necessidade de um processo
                de recuperação, pois não se trata de uma cirurgia.</li>
                <li>Protocolos mundialmente conhecidos pela eficiência em resultados nas clientes</li>
            </ul>

            <div className='col-span-2 flex justify-center '>
            <a href='https://wa.me/5511997173432?text=Gostaria de saber mais sobre a Estética Salomão'>
                    <button className='flex justify-center items-center mx-auto bg-gradient-to-r from-whats-escuro via-whats to-whats-escuro border-4 border-branco drop-shadow-lg cursor-pointer px-[4rem] pt-[1rem] pb-[1rem] rounded-[8rem] hover:shadow-dentro hover:shadow-creme hover:transition-all hover:ease-out hover:duration-700'>
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

export default Metodo