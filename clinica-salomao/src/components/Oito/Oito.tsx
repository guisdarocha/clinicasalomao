import whats from '../../assets/whats.svg'
import botao from '../../assets/botao.png'

const Oito = () => {
    return (
    <>
    <div className='bg-terra pb-[3rem]'>

    <div className="grid grid-cols-2 ml-3 justify-center items-center mx-auto max-w-[360px] gap-x-3 gap-y-4 pt-[3rem]">
        <div className="flex justify-center items-center w-[9.25rem] h-[6.5rem] rounded-tl-2xl rounded-br-2xl bg-creme">
            <h4 className='text-[0.875rem] w-[18rem] font-mont  leading-tight text-center text-vermelho-madeira px-1'>Você sente seu rosto derreter?</h4>
        </div>
        <div className="flex justify-center items-center w-[9.25rem] h-[6.5rem] rounded-tl-2xl rounded-br-2xl bg-creme">
            <h4 className='text-[0.875rem] w-[30rem] font-mont  leading-tight text-center  text-vermelho-madeira px-1  py-1'>Se sente triste ao se olhar no espelho, fazendo sua autoestima cair cada vez mais?</h4>
        </div>
        <div className="flex justify-center items-center w-[9.25rem] h-[6.5rem] rounded-tl-2xl rounded-br-2xl bg-creme">
            <h4 className='text-[0.875rem] w-[23rem] font-mont  leading-tight text-center  text-vermelho-madeira px-1  py-1'>As pessoas te dão muito mais idade do que você tem?</h4>
        </div>
        <div className="flex justify-center items-center w-[9.25rem] h-[6.5rem] rounded-tl-2xl rounded-br-2xl bg-creme">
            <h4 className='text-[0.875rem] w-[28rem] font-mont  leading-tight text-center  text-vermelho-madeira px-1  py-1'>Não gosta de tirar fotos, porque suas rugas aparecem em evidência cada vez mais?</h4>
        </div>
        <div className="flex justify-center items-center w-[9.25rem] h-[6.5rem] rounded-tl-2xl rounded-br-2xl bg-creme">
            <h4 className='text-[0.875rem] w-[28rem] font-mont  leading-tight text-center  text-vermelho-madeira px-1  py-1'>Te incomoda demais quando vê suas amigas com a pele mais bonita que a sua?</h4>
        </div>
        <div className="flex justify-center items-center w-[9.25rem] h-[6.5rem] rounded-tl-2xl rounded-br-2xl bg-creme">
            <h4 className='text-[0.875rem] w-[23rem] font-mont  leading-tight text-center  text-vermelho-madeira px-1  py-1'>Não sabe como resolver o Bigode Chinês e/ou famoso Buldogue?</h4>
        </div>
        <div className="flex justify-center items-center w-[9.25rem] h-[6.5rem] rounded-tl-2xl rounded-br-2xl bg-creme">
            <h4 className='text-[0.875rem] w-[25rem] font-mont  leading-tight text-center  text-vermelho-madeira px-1  py-1 '>Sente irritada e chateada a com sua aparência e não sabe como resolver?</h4>
        </div>
        <div className="flex justify-center items-center w-[9.25rem] h-[6.5rem] rounded-tl-2xl rounded-br-2xl bg-creme">
            <h4 className='text-[0.875rem] w-[28rem] font-mont  leading-tight text-center  text-vermelho-madeira px-1  py-1'>Quantos anos você quer rejuvenescer sem precisar de uma cirurgia, já pensou nisso ?</h4>
        </div>
    </div>
    <div className='flex justify-center items-center pt-[2rem] '>
         <a href='https://wa.me/5511997173432?text=Gostaria de saber mais sobre a Estética Salomão'>
            <button className='flex justify-center items-center mx-auto cursor-pointer drop-shadow-lg '>
                <img src={botao} alt="" className='relative w-[21rem] hover:w-[22rem] hover:shadow-dentro hover:shadow-creme hover:transition-all hover:ease-out hover:duration-700'/>
                <span className='absolute pr-[1rem] text-[0.8rem] text-left w-[16rem] font-mont font-extrabold drop-shadow-lg leading-tight text-branco uppercase'>Não sofra com nada disso.
Não perca mais tempo</span>
                <img src={whats} alt="" className='absolute right-6 w-[1.5rem] h-auto  self-center '/>
            </button>
          </a>  
         </div>
    </div>
    </>
    )
}

export default Oito