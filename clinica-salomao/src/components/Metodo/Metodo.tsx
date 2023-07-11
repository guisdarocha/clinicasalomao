import whats from '../../assets/whats.svg'
import metodo from '../../assets/metodo.png'

const Metodo = () => {
    return (
    <>
    <div className='conteiner'>
        <ul>
            <li>Muito simples, sem cirurgia e sem necessidade de repouso.</li>
            <li>Técnicas e protocolos inovadores especialmente para você
            acabar com tudo que mais te incomoda de forma personalizada!</li>
        </ul>
        <img src={metodo} alt="" />
        <ul>
            <li>Método seguro, minimamente invasivo sem necessidade de um processo
            de recuperação, pois não se trata de uma cirurgia.</li>
            <li>Protocolos mundialmente conhecidos pela eficiência em resultados nas clientes</li>
        </ul>
        <button className='whatsapp'>
            <img src={whats} alt=""/>
            <span>Quero fazer uma avaliação gratuita</span>
        </button>
    </div>
    </>
    )
}

export default Metodo