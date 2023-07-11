import whats from '../../assets/whats.svg'

const Tranquila = () => {
    return (
    <>
    <div className="conteiner">
        <h3>Pode ficar tranquila, estética não tem idade.</h3>
        <h4>Vamos lá, faça seu procedimento mesmo que...</h4>
        <div className=''>
            <h5>Preventivamente, e dê um breque no seu envelhecimento</h5>
        </div>
        <div className=''>
            <h5>Corretivamente, e rejuvenesça muitos anos</h5>
        </div>
        <div className=''>
            <h5>Mesmo nunca tendo feito nada</h5>
        </div>
        <div className=''>
            <h5>Independente da sua idade</h5>
        </div>
        <h3>Só depende de você</h3>
    </div>
    <button className='whatsapp'>
        <img src={whats} alt=""/>
        <span>Resolva de uma vez por todas e não sofra mais com isso</span>
    </button>
    </>
    )
}

export default Tranquila