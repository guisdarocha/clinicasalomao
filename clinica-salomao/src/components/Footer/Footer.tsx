import pin from '../../assets/pin.svg'
import whats from '../../assets/whats_footer.svg'
import instagram from '../../assets/instagram.svg'

const Footer = () => {
    return (
    <>
    <div className=" bg-creme-claro">

            <div className="flex justify-center mx-auto max-w-[360px] pb-[2rem] ">
                <div className="w-[320px] lg:w-[780px] h-[0.1rem] bg-vermelho-madeira "></div>
            </div>

        <div className="grid grid-cols-2 max-w-[360px] ml-[1rem] pb-[1rem] px-[2.5rem]  font-mont">
          
            <div className='flex justify-center items-center pb-[1rem]'> 
                <div className="">
                    <img src={pin} alt="" className='w-[1.5rem] h-auto '/>
                </div>
                <p className='text-[0.6rem] w-[9.3rem] text-vermelho-madeira leading-tight ml-1'>Av. Paulista 2006 3°andar -SP</p>
            </div>
            
            <a href='https://wa.me/5511997173432?text=Gostaria de saber mais sobre a Estética Salomão'>
            <div className='flex justify-center items-center pb-[1rem]'>
                <div className="">
                    <img src={whats} alt="" className='w-[1.5rem] h-auto '/>
                </div>
                <p className='text-[0.6rem] w-[9.3rem] text-vermelho-madeira leading-tight ml-1 '>(11) 99717-3432</p>
            </div>
            </a>

            <a href='https://www.instagram.com/esteticasalomao/'>
            <div className='flex justify-center items-center pb-[1rem] cursor-pointer'>
                <div className="">
                    <img src={instagram} alt="" className='w-[1.5rem] h-auto '/>
                </div>
                <p className='text-[0.6rem] w-[9.3rem] text-vermelho-madeira leading-tight ml-1'>@esteticasalomao</p>
            </div>
            </a>
            <div>
                <p className='text-[0.6rem] w-[6rem] text-vermelho-madeira leading-tight '>CNPJ: 41.325.545/0001-55</p>
            </div>
        </div>
    </div>
    </>
    )
}

export default Footer