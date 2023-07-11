import whats from '../../assets/whats.svg'

const Oito = () => {
    return (
    <>
    <div className="perguntas">
        <div className="caixa">
            <h4>Você sente seu rosto derreter?</h4>
        </div>
        <div className="caixa">
            <h4>Se sente triste ao se olhar no espelho, fazendo sua autoestima cair cada vez mais?</h4>
        </div>
        <div className="caixa">
            <h4>As pessoas te dão muito mais idade do que você tem?</h4>
        </div>
        <div className="caixa">
            <h4>Não gosta de tirar fotos, porque suas rugas aparecem em evidência cada vez mais?</h4>
        </div>
        <div className="caixa">
            <h4>Te incomoda demais quando vê suas amigas com a pele mais bonita que a sua?</h4>
        </div>
        <div className="caixa">
            <h4>Não sabe como resolver o Bigode Chinês e/ou famoso Buldogue?</h4>
        </div>
        <div className="caixa">
            <h4>Sente IRRITADA E CHATEADA a com sua aparência e não sabe como resolver?</h4>
        </div>
        <div className="caixa">
            <h4>Quantos anos você quer rejuvenescer sem precisar de uma cirurgia, já pensou nisso ?</h4>
        </div>
    </div>
    <button className='whatsapp'>
        <img src={whats} alt=""/>
        <span>Não sofra com nada disso. Não perca mais tempo</span>
    </button>
    </>
    )
}

export default Oito