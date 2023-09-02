import whats from '../../assets/whats.svg'
import botao from '../../assets/botaowhats.svg'

const Oito = () => {
    return (
    <>
    <div className='bg-terra pb-[3rem]'>
        <div className='h-screen xl:w-full xl:h-[55rem]'>
            <div className="grid grid-cols-2 ml-3 justify-center items-center mx-auto max-w-[500px] gap-x-3 gap-y-4 pt-[3rem] xl:max-w-full xl:grid-cols-4 xl:justify-center xl:mx-auto xl:pl-[5rem] xl:items-center xl:gap-y-10 xl:gap-x-1 xl:pt-[10rem] ">
                <div className="flex justify-center items-center w-[9.25rem] h-[6.5rem] rounded-tl-2xl rounded-br-2xl bg-creme xl:w-[15.8rem] xl:h-[11rem]">
                    <h4 className='text-[0.875rem] w-[18rem] font-mont  leading-tight text-center text-vermelho-madeira px-1 xl:text-[1.37rem]'>Você sente seu rosto derreter?</h4>
                </div>
                <div className="flex justify-center items-center w-[9.25rem] h-[6.5rem] rounded-tl-2xl rounded-br-2xl bg-creme xl:w-[15.8rem] xl:h-[11rem]">
                    <h4 className='text-[0.875rem] w-[30rem] font-mont  leading-tight text-center  text-vermelho-madeira px-1  py-1 xl:text-[1.37rem]'>Se sente triste ao se olhar no espelho, fazendo sua autoestima cair cada vez mais?</h4>
                </div>
                <div className="flex justify-center items-center w-[9.25rem] h-[6.5rem] rounded-tl-2xl rounded-br-2xl bg-creme xl:w-[15.8rem] xl:h-[11rem]">
                    <h4 className='text-[0.875rem] w-[23rem] font-mont  leading-tight text-center  text-vermelho-madeira px-1  py-1 xl:text-[1.37rem]'>As pessoas te dão muito mais idade do que você tem?</h4>
                </div>
                <div className="flex justify-center items-center w-[9.25rem] h-[6.5rem] rounded-tl-2xl rounded-br-2xl bg-creme xl:w-[15.8rem] xl:h-[11rem]">
                    <h4 className='text-[0.875rem] w-[28rem] font-mont  leading-tight text-center  text-vermelho-madeira px-1  py-1 xl:text-[1.37rem]'>Não gosta de tirar fotos, porque suas rugas aparecem em evidência cada vez mais?</h4>
                </div>
                <div className="flex justify-center items-center w-[9.25rem] h-[6.5rem] rounded-tl-2xl rounded-br-2xl bg-creme xl:w-[15.8rem] xl:h-[11rem]">
                    <h4 className='text-[0.875rem] w-[28rem] font-mont  leading-tight text-center  text-vermelho-madeira px-1  py-1 xl:text-[1.37rem]'>Te incomoda demais quando vê suas amigas com a pele mais bonita que a sua?</h4>
                </div>
                <div className="flex justify-center items-center w-[9.25rem] h-[6.5rem] rounded-tl-2xl rounded-br-2xl bg-creme xl:w-[15.8rem] xl:h-[11rem]">
                    <h4 className='text-[0.875rem] w-[23rem] font-mont  leading-tight text-center  text-vermelho-madeira px-1  py-1 xl:text-[1.37rem]'>Não sabe como resolver o Bigode Chinês e/ou famoso Buldogue?</h4>
                </div>
                <div className="flex justify-center items-center w-[9.25rem] h-[6.5rem] rounded-tl-2xl rounded-br-2xl bg-creme xl:w-[15.8rem] xl:h-[11rem]">
                    <h4 className='text-[0.875rem] w-[25rem] font-mont  leading-tight text-center  text-vermelho-madeira px-1  py-1  xl:text-[1.37rem]'>Sente irritada e chateada a com sua aparência e não sabe como resolver?</h4>
                </div>
                <div className="flex justify-center items-center w-[9.25rem] h-[6.5rem] rounded-tl-2xl rounded-br-2xl bg-creme xl:w-[15.8rem] xl:h-[11rem]">
                    <h4 className='text-[0.875rem] w-[28rem] font-mont  leading-tight text-center  text-vermelho-madeira px-1  py-1 xl:text-[1.37rem]'>Quantos anos você quer rejuvenescer sem precisar de uma cirurgia, já pensou nisso ?</h4>
                </div>
        
            </div>
                <div className='flex justify-center items-center pt-[2rem] xl:mx-auto xl:pt-[5rem] '>
                <a href='https://wa.me/5511997173432?text=Gostaria de saber mais sobre a Estética Salomão'>
                    <button className='flex justify-center items-center mx-auto cursor-pointer drop-shadow-lg '>
                        <img src={botao} alt="" className='relative w-[21rem] xl:w-[70rem] hover:w-[22rem] hover:shadow-dentro hover:shadow-creme hover:transition-all hover:ease-out hover:duration-700 xl:hover:w-[72rem] xl:hover:shadow-dentro xl:hover:shadow-creme xl:hover:transition-all xl:hover:ease-out xl:hover:duration-700'/>
                        <span className='absolute pr-[1rem] text-[0.8rem] text-center w-[22rem] font-mont font-extrabold drop-shadow-lg leading-tight text-branco uppercase xl:text-[3.125rem] xl:w-[65rem] xl:pr-[5rem]'>Quero uma avaliação gratuita</span>
                        <img src={whats} alt="" className='absolute right-6 w-[1.5rem] h-auto  self-center xl:w-[5rem] '/>
                    </button>
                </a>  
                </div>
        </div>
    </div>

    </>
    )
}

export default Oito