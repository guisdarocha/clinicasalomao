import whats from '../../assets/whats.svg'

const Oito = () => {
    return (
    <>
    <div className="flex bg-creme-escuro pt-[10rem]">
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
        <div className='flex justify-center items-center pt-[5rem] '>
            <button className='flex bg-gradient-to-r from-whats-escuro via-whats to-whats-escuro border-4 border-branco cursor-pointer px-[4rem] py-[2rem] rounded-[8rem]'>
                <span className='text-[3rem] font-belleza drop-shadow-lg text-branco uppercase'>Não sofra com nada disso. Não perca mais tempo</span>
                <img src={whats} alt="" className='animate-bounce pl-[1rem] self-center '/>
            </button>
         </div>
    </>
    )
}

export default Oito