import tresUm from '../../assets/tresEmUm.png'
import papada from '../../assets/papada.png'
import papadaDois from '../../assets/papada2.png'
import bigodeChines from '../../assets/bigodeChines.png'
import labial from '../../assets/labial.png'
import codigoBarras from '../../assets/codigoBarras.png'

const Processos = () => {
    return (
    <>
    <div className="container">
        <h3>Você está com dúvida?</h3>
        <h4>Então veja os resultados abaixo de nossas clientes, tenho certeza que
        você vai Amar cada resultado e dar seu primeiro passo para seu rejuvenescimento!</h4>
        <div>
            <img src={tresUm} alt="" />
            <p>Bigode Chines</p>
            <p>Marionete</p>
            <p>Papada</p>
        </div>
        <div>
            <p>Papada</p>
            <img src={papada} alt="" />
        </div>
        <div>
            <img src={bigodeChines} alt="" />
            <p>Bigode Chines</p>
        </div>
        <div>
            <p>Labial</p>
            <img src={labial} alt="" />
        </div>
        <div>
            <img src={codigoBarras} alt="" />
            <p>Código de barras</p>
        </div>
        <div>
            <p>Papada</p>
            <img src={papadaDois} alt="" />
        </div>
    </div>
    </>
    )
}

export default Processos