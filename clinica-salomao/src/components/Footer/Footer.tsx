import pin from '../../assets/pin.svg'
import whats from '../../assets/whats_footer.svg'
import instagram from '../../assets/instagram.svg'

const Footer = () => {
    return (
    <>
    <div className="container">
        <div>
            <img src={pin} alt="" />
            <p>Av. Paulista 2006 3°andar -SP</p>
        </div>
        <div>
            <img src={whats} alt="" />
            <p>(11) 99717-3432</p>
        </div>
        <div>
            <img src={instagram} alt="" />
            <p>@esteticasalomao</p>
        </div>
        <div>
            <p>CNPJ: 41.325.545/0001-55</p>
        </div>
    </div>
    </>
    )
}

export default Footer