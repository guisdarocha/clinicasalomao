import whats from '../../assets/whats.svg'

const Tranquila = () => {
    return (
    <>
    <div className=" bg-laranja flex justify-center items-center mx-auto h-[1200px]">

        <div className="grid grid-cols-1 pt-[6rem] max-w-[1080px]">
            <h3 className='text-[3.9rem] w-[55rem] text-center text-creme font-belleza leading-tight justify-center items-center mx-auto uppercase'>Pode ficar tranquila, estética não tem idade.</h3>
            <h4 className='text-[2.6rem] text-creme font-belleza justify-center items-center mx-auto'>Vamos lá, faça seu procedimento mesmo que...</h4>
            
            <div className='justify-center gap-3 items-center mx-auto pt-[2rem] '>
                <div className='flex justify-center text-center items-center max-w-[48rem]  px-[4rem] py-[1rem] rounded-tl-46 rounded-br-46 bg-vermelho-madeira'>
                    <h5 className='text-[1.8rem] w-[25rem] font-belleza text-creme'>Preventivamente, e dê um breque no seu envelhecimento</h5>
                </div>
                <div className='flex justify-center text-center items-center mt-[2rem] max-w-[48rem] px-[4rem] py-[1rem] rounded-tl-46 rounded-br-46 bg-vermelho-madeira'>
                    <h5 className='text-[1.8rem] w-[25rem] font-belleza text-creme'>Corretivamente, e rejuvenesça muitos anos</h5>
                </div>
                <div className='flex justify-center text-center items-center mt-[2rem] max-w-[48rem] px-[4rem] py-[1rem] rounded-tl-46 rounded-br-46 bg-vermelho-madeira'>
                    <h5 className='text-[1.8rem] w-[25rem] font-belleza text-creme' >Mesmo nunca tendo feito nada</h5>
                </div>
                <div className='flex justify-center text-center items-centermt-[2rem] mt-[2rem] max-w-[48rem] px-[4rem] py-[1rem] rounded-tl-46 rounded-br-46 bg-vermelho-madeira'>
                    <h5 className='text-[1.8rem] w-[25rem] font-belleza text-creme' >Independente da sua idade</h5>
                </div>
            </div>

            <h3 className='text-[3.9rem] w-[55rem] mt-[4rem] text-center text-creme font-belleza leading-tight justify-center items-center mx-auto uppercase'>Só depende de você</h3>
            
            <a href='https://wa.me/5511997173432?text=Gostaria de saber mais sobre a Estética Salomão'>
            <div className='flex justify-center items-center pt-[5rem] -pb-[8rem] '>
                <button className='flex bg-gradient-to-r from-whats-escuro via-whats to-whats-escuro border-4 border-branco drop-shadow-lg cursor-pointer px-[4rem] py-[2rem] rounded-[8rem] hover:shadow-dentro hover:shadow-creme'>
                <span className='text-[3rem] font-belleza w-[50rem] text-left drop-shadow-lg text-branco leading-tight uppercase hover:text-[3.1rem] hover:w-[51rem]'>Resolva de uma vez por todas e não sofra mais com isso</span>
                <img src={whats} alt="" className='w-[100px] pl-[1rem] self-center '/>
            </button>
         </div>
            </a>
        </div>

    </div>
    </>
    )
}

export default Tranquila