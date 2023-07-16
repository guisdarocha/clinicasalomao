import logo from '../../assets/logo.png'
import imagemHeader from '../../assets/headerImage.png'


const Header = () => {
    return (
    <>
    <div className='bg-gradient-to-t from-creme-escuro to-creme'>
        <div className="flex justify-center pt-6 ">
            <img src={logo} alt="" className='w-15 h-auto'/>
        </div>
        <div className="grid justify-items-center max-w-884 h-auto pt-20">
            <h1 className='text-[6.875rem] font-belleza text-vermelho-madeira uppercase'>Rejuvenescer</h1>
            <h1 className='text font-belleza text-vermelho-madeira uppercase'>mais de <span className=''>10</span> anos </h1>
            <h1 className='textfont-belleza text-vermelho-madeira uppercase'>sem cirurgia é possível</h1>
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
    </div>
    </>
    )
}

export default Header