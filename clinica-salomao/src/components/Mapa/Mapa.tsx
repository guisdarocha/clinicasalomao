import brasil from '../../assets/mapaBrasil.svg'
import whats from '../../assets/whats.svg'

const Mapa = () => {
    return (
    <>
    <div className='bg-creme pt-[5rem]'>
        <div>
            <img src={brasil} alt="" />
            <div className="texto">
                <h3>Você sabia que o Brasil é referência MUNDIAL em Estética?</h3>
                <h4>Isso mesmo, é daqui que saem os protocolos com os melhores profissionais e produtos.</h4>
            </div>
         </div>
        <button className='whatsapp'>
            <img src={whats} alt=""/>
            <span>Quero tratar minha flacidez</span>
        </button>
    </div>
    </>
    )
}

export default Mapa