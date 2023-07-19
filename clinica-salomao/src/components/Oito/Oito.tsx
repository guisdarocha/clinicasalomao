import whats from '../../assets/whats.svg'

const Oito = () => {
    return (
    <>
    <div className='bg-terra '>

    <div className="grid grid-cols-2 justify-center items-center mx-auto max-w-[1080px] gap-x-[5rem] gap-y-[5rem] px-[5rem]  pt-[10rem]">
        <div className="flex justify-center items-center max-w-[400px] max-h-[335px] rounded-tl-46 rounded-br-46 bg-creme">
            <h4 className='text-[2.5rem] w-[18rem] py-[5rem] px-[2rem] font-garamond leading-tight text-center text-vermelho-madeira'>Você sente seu rosto derreter?</h4>
        </div>
        <div className="flex justify-center items-center max-w-[400px] max-h-[335px] rounded-tl-46 rounded-br-46 bg-creme">
            <h4 className='text-[2.5rem] w-[23rem] py-[5rem] px-[2rem] font-garamond leading-tight text-center  text-vermelho-madeira'>Se sente triste ao se olhar no espelho, fazendo sua autoestima cair cada vez mais?</h4>
        </div>
        <div className="flex justify-center items-center max-w-[400px] max-h-[335px] rounded-tl-46 rounded-br-46 bg-creme">
            <h4 className='text-[2.5rem] w-[23rem] py-[5rem] px-[2rem] font-garamond leading-tight text-center  text-vermelho-madeira'>As pessoas te dão muito mais idade do que você tem?</h4>
        </div>
        <div className="flex justify-center items-center max-w-[400px] max-h-[335px] rounded-tl-46 rounded-br-46 bg-creme">
            <h4 className='text-[2.5rem] w-[22rem] py-[5rem] px-[2rem] font-garamond leading-tight text-center  text-vermelho-madeira'>Não gosta de tirar fotos, porque suas rugas aparecem em evidência cada vez mais?</h4>
        </div>
        <div className="flex justify-center items-center max-w-[400px] max-h-[335px] rounded-tl-46 rounded-br-46 bg-creme">
            <h4 className='text-[2.5rem] w-[23rem] py-[5rem] px-[2rem] font-garamond leading-tight text-center  text-vermelho-madeira'>Te incomoda demais quando vê suas amigas com a pele mais bonita que a sua?</h4>
        </div>
        <div className="flex justify-center items-center max-w-[400px] max-h-[335px] rounded-tl-46 rounded-br-46 bg-creme">
            <h4 className='text-[2.5rem] w-[23rem] py-[5rem] px-[2rem] font-garamond leading-tight text-center  text-vermelho-madeira'>Não sabe como resolver o Bigode Chinês e/ou famoso Buldogue?</h4>
        </div>
        <div className="flex justify-center items-center max-w-[400px] max-h-[335px] rounded-tl-46 rounded-br-46 bg-creme">
            <h4 className='text-[2.5rem] w-[23rem] py-[5rem] px-[2rem] font-garamond leading-tight text-center  text-vermelho-madeira'>Sente IRRITADA E CHATEADA a com sua aparência e não sabe como resolver?</h4>
        </div>
        <div className="flex justify-center items-center max-w-[400px] max-h-[335px] rounded-tl-46 rounded-br-46 bg-creme">
            <h4 className='text-[2.5rem] w-[23rem] py-[5rem] px-[2rem] font-garamond leading-tight text-center  text-vermelho-madeira'>Quantos anos você quer rejuvenescer sem precisar de uma cirurgia, já pensou nisso ?</h4>
        </div>
    </div>
        <div className='flex justify-center items-center pt-[5rem] pb-[8rem] '>
            <button className='flex bg-gradient-to-r from-whats-escuro via-whats to-whats-escuro border-4 border-branco drop-shadow-lg cursor-pointer px-[4rem] py-[2rem] rounded-[8rem] hover:shadow-dentro hover:shadow-creme'>
                <span className='text-[3rem] font-belleza w-[45rem] text-left drop-shadow-lg text-branco uppercase hover:text-[3.1rem] hover:w-[46rem]'>Não sofra com nada disso. Não perca mais tempo</span>
                <img src={whats} alt="" className='pl-[1rem] self-center w-[100px] h-auto'/>
            </button>
         </div>
    </div>
    </>
    )
}

export default Oito