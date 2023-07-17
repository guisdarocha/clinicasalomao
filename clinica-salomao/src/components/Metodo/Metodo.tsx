import whats from '../../assets/whats.svg'
import metodo from '../../assets/metodo.png'

const Metodo = () => {
    return (
    <>
    <div className='grid grid-cols-2 bg-creme pt-[4rem]'>
        <h3 className='text-[3.1rem] font-belleza text-vermelho-madeira text-left leading-tight'>Qual o método utilizado ?</h3>
        <ul className='col-start-1 list-disc text-[1.8rem] font-belleza text-vermelho-madeira'>
            <li className='text'>Muito simples, sem cirurgia e sem necessidade de repouso.</li>
            <li>Técnicas e protocolos inovadores especialmente para você
            acabar com tudo que mais te incomoda de forma personalizada!</li>
        </ul>
        <img src={metodo} alt="" className='col-start-2'/>
        <ul className='col-span-2 list-disc text-[1.8rem] font-belleza text-vermelho-madeira'>
            <li>Método seguro, minimamente invasivo sem necessidade de um processo
            de recuperação, pois não se trata de uma cirurgia.</li>
            <li>Protocolos mundialmente conhecidos pela eficiência em resultados nas clientes</li>
        </ul>
        <button className='col-span-2'>
            <img src={whats} alt=""/>
            <span>Quero fazer uma avaliação gratuita</span>
        </button>
    </div>
    </>
    )
}

export default Metodo