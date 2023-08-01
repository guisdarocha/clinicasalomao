import logo from '../../assets/logo.png'
import imagemHeader from '../../assets/headerImage.png'


const Header = () => {
    return (
    <>
    <div className='bg-gradient-to-t from-creme-escuro to-creme w-full h-[1730px] pb-[5rem]'>
        <div className="flex justify-center items-center mx-auto pt-6 bg-creme-claro h-[8rem] w-auto">
            <img src={logo} alt="" className='mx-auto max-w-[10rem] mt-[1rem] h-auto'/>
        </div>



        <div className="grid justify-items-center pt-20 pb-20">
            <h1 className='text-[2.5rem] -mb-4 font-belleza text-vermelho-madeira uppercase'>Rejuvenescer</h1>
            <h1 className='text-[2.5rem]  -mb-2  font-belleza text-vermelho-madeira uppercase'>mais de <span className='text-[4rem] text-siena'>10</span> anos </h1>
            <h1 className='text-[1.5rem] font-belleza text-vermelho-madeira uppercase'>sem cirurgia é possível</h1>
        </div>


        <div className="grid -mt-[3rem]">
            <div className='flex mx-auto bg-siena content-center  '>
                <div className=' h-auto w-[18rem] hover:shadow-dentro hover:shadow-creme hover:transition-all hover:ease-out hover:duration-700 rounded-tl-46 flex justify-left items-center'>
                    <h2 className='text-[1.5rem] font-mont text-creme leading-tight text-center'>Você que tem entre 40 e 65 anos, que tal 
                    <span className='text-[1.5rem] font-extrabold text-creme'> ELIMINAR</span> a
                    <span className='text-[1.5rem] font-extrabold text-creme'> FLACIDEZ</span> e
                    as <span className='text-[1.5rem] font-extrabold text-creme'> RUGAS</span> 
                    </h2>
                </div>
            </div>          
            <div className="">
                <img src={imagemHeader} alt="" className=' ' />
            </div>
       </div>

        
        
        <div className="flex items-center mx-auto drop-shadow-lg  max-w-[1180px] ">
            <div className="bg-vermelho-madeira rounded-tl-46 rounded-br-46 ">
                <h3 className='text-[2.5rem] text-center font-mont text-creme leading-tight  py-[3rem] px-[4rem] '>Tratamentos que estimulam colágeno de forma natural e muito segura, proporcionando um resultado maravilhoso devolvendo sua autoestima com segurança</h3>
            </div>
        </div>
    </div>
    </>
    )
}

export default Header