import whats from '../../assets/whats.svg'
import botao from '../../assets/botao.png'

const Tranquila = () => {
    return (
    <>
    <div className=" bg-laranja flex justify-center items-center h-[600px] rounded-br-2xl">

        <div className="grid grid-cols-1 mt-4 max-w-[360px]">
            <h3 className='text-[1.5rem] text-center text-creme font-belleza leading-tight justify-center items-center mx-auto uppercase'>Pode ficar tranquila, estética não tem idade.</h3>
            <h4 className='text-[1rem] pt-[1rem] text-creme w-[17.1rem] text-center font-mont font-semibold justify-center leading-tight items-center mx-auto'>Vamos lá, faça seu procedimento mesmo que...</h4>
            
            <div className='justify-center items-center mx-auto pt-[2rem] px-1 '>
                <div className='flex justify-center text-center items-center  my-2 px-[4rem] py-[1rem] rounded-tl-46 rounded-br-46 bg-vermelho-madeira'>
                    <h5 className='text-[0.87rem] font-mont text-creme'>PREVENTIVAMENTE, e dê um breque no seu envelhecimento</h5>
                </div>
                <div className='flex justify-center text-center items-center  my-2 px-[4rem] py-[1rem] rounded-tl-46 rounded-br-46 bg-vermelho-madeira'>
                    <h5 className='text-[0.87rem] font-mont text-creme'>Corretivamente, e rejuvenesça muitos anos</h5>
                </div>
                <div className='flex justify-center text-center items-center  my-2 px-[4rem] py-[1rem] rounded-tl-46 rounded-br-46 bg-vermelho-madeira'>
                    <h5 className='text-[0.87rem] font-mont text-creme' >Mesmo nunca tendo feito nada</h5>
                </div>
                <div className='flex justify-center text-center items-center my-2 px-[4rem] py-[1rem] rounded-tl-46 rounded-br-46 bg-vermelho-madeira'>
                    <h5 className='text-[0.87rem] font-mont text-creme' >Independente da sua idade</h5>
                </div>
            </div>

            <h3 className='text-[1.5rem]  mt-[2rem] text-center text-creme font-belleza leading-tight justify-center items-center mx-auto uppercase'>Só depende de você</h3>
            

        </div>
        
        <div className='flex justify-center items-center pt-[2rem] '>
         <a href='https://wa.me/5511997173432?text=Gostaria de saber mais sobre a Estética Salomão'>
            <button className='flex justify-center items-center mx-auto cursor-pointer drop-shadow-lg '>
                <img src={botao} alt="" className='relative w-[21rem] hover:w-[22rem] hover:shadow-dentro hover:shadow-creme hover:transition-all hover:ease-out hover:duration-700'/>
                <span className='absolute pr-[1rem] text-[0.8rem] text-center w-[22rem] font-mont font-extrabold drop-shadow-lg leading-tight text-branco uppercase'>Quero uma avaliação gratuita</span>
                <img src={whats} alt="" className='absolute right-6 w-[1.5rem] h-auto  self-center '/>
            </button>
          </a>  
         </div>
    </div>
    </>
    )
}

export default Tranquila