import logo from '../../assets/logo.png'
import imagemHeader from '../../assets/headerImage.png'


const Header = () => {
    return (
    <>
    <div className='bg-gradient-to-t from-creme-escuro to-creme w-full h-[1730px] xl:w-auto md:bg-creme  sm:bg-creme '>
        <div className="flex justify-center pt-6 ">
            <img src={logo} alt="" className='w-15 h-auto'/>
        </div>

        <div className="grid justify-items-center pt-20">
            <h1 className='text-[6.875rem] -mb-12 font-belleza text-vermelho-madeira uppercase'>Rejuvenescer</h1>
            <h1 className='text-[6.5rem] -mb-4 font-belleza text-vermelho-madeira uppercase'>mais de <span className='text-[9rem] text-siena'>10</span> anos </h1>
            <h1 className='text-[4rem] font-belleza text-vermelho-madeira uppercase'>sem cirurgia é possível</h1>
        </div>

        <div className="flex justify-center -mt-[3rem]">
            <div className='flex content-center pt-[12rem] pl-[5rem] pb-[16rem] md:pb-[32rem] max-w-[531px] h-auto '>
                <div className='bg-siena rounded-tl-46 '>
                    <h2 className='flex justify-center text-[3.25rem] w-[288px] h-auto mt-[6rem] mb-[6rem] ml-[4rem] mr-[30rem] font-belleza text-creme leading-tight text-left'>Você que tem entre 40 e 65 anos, que tal ELIMINAR a FLACIDEZ e as RUGAS.</h2>
                </div>
            </div>          
            <div className="flex place-content-end h-[1100px]">
                <img src={imagemHeader} alt="" className=' ' />
            </div>
       </div>
        
        <div className="flex -mt-[rem] drop-shadow-lg xl:-mt-[18rem] md:-mt-[18rem] xl:w-[1280px] xl:flex 2xl:flex 2xl:">
            <div className="bg-vermelho-madeira rounded-tl-46 rounded-br-46 ">
                <h3 className='text-[2.5rem] w-auto text-center font-belleza text-creme leading-tight mx-[5.5rem] my-[3rem] xl:w-[1280px]  '>Tratamentos que estimulam colágeno de forma natural e muito segura, proporcionando um resultado maravilhoso devolvendo sua autoestima com segurança</h3>
            </div>
        </div>
    </div>
    </>
    )
}

export default Header