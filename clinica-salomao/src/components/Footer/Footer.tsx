import pin from '../../assets/pin.svg'
import whats from '../../assets/whats_footer.svg'
import instagram from '../../assets/instagram.svg'

const Footer = () => {
    return (
    <>
    <div className=" bg-creme-claro">

            <div className="flex justify-center mx-auto max-w-[1080px] pb-[2rem] ">
                <div className="w-[720px] lg:w-[780px] h-[0.1rem] bg-vermelho-madeira "></div>
            </div>

        <div className="flex justify-center mx-auto max-w-[1080px] pb-[3rem] font-belleza">
          
            <div className='flex justify-center items-center pl-[0.3rem]'> 
                <div className="px-[0.7rem]">
                    <img src={pin} alt="" className='w-[2.2rem] h-auto '/>
                </div>
                <p className='text-[1rem] w-[9.3rem] text-vermelho-madeira leading-tight '>Av. Paulista 2006 3°andar -SP</p>
            </div>

            <div className='flex justify-center items-center pl-[0.3rem]'>
                <div className="px-[0.7rem]">
                    <img src={whats} alt="" className='w-[2.2rem] h-auto '/>
                </div>
                <p className='text-[1rem] w-[9.3rem] text-vermelho-madeira leading-tight '>(11) 99717-3432</p>
            </div>

            <div className='flex justify-center items-center pl-[0.3rem]'>
                <div className="px-[0.7rem]">
                    <img src={instagram} alt="" className='w-[2.2rem] h-auto '/>
                </div>
                <p className='text-[1rem] w-[9.3rem] text-vermelho-madeira leading-tight '>@esteticasalomao</p>
            </div>
            <div>
                <p className='text-[1rem] w-[9.3rem] text-vermelho-madeira leading-tight '>CNPJ: 41.325.545/0001-55</p>
            </div>
        </div>
    </div>
    </>
    )
}

export default Footer