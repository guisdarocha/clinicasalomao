import senhora from '../../assets/senhora.png'
import whats from '../../assets/whats.svg'

const Avaliacao = () => {
    return (
    <>
    <div>
        <div className="texto">
            <p>Através de uma avaliação personalizada, individual um protocolo será
            montado especialmente para você. Nosso profissional irá lhe apresentar o
            melhor tratamento, para que você tenha resultado que sempre desejou e saia
            maravilhada com sua autoestima nas alturas. Faça inveja para suas amigas e
            fique 10 anos mais jovem
            </p>
            <button className='whatsapp'>
                <img src={whats} alt=""/>
                <span>Quero tratar minha flacidez</span>
            </button>
        </div>
        <img src={senhora} alt="" />
    </div>
    </>
    )
}

export default Avaliacao