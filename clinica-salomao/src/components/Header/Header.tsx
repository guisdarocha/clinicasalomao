import logo from '../../assets/logo.png'
import imagemHeader from '../../assets/headerImage.png'


const Header = () => {
    return (
    <>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="chamada">
            <h1>Rejuvenescer mais de 10 anos sem cirurgia é possível</h1>
        </div>
        <div className="textoAuxiliar">
            <div className="texto">
                <h2>Você que tem entre 40 e 65 anos, que tal ELIMINAR a FLACIDEZ e as RUGAS.</h2>
            </div>
            <img src={imagemHeader} alt="" />
        </div>
        <div className="explicacao">
            <h3>Tratamentos que estimulam colágeno de forma natural e muito segura, proporcionando um resultado maravilhoso devolvendo sua autoestima com segurança</h3>
        </div>
    </>
    )
}

export default Header