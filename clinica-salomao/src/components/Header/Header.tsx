import logo from '../../assets/logo.png'
import imagemHeader from '../../assets/headerImage.png'


const Header = () => {
    return (
    <>
    <div className='bg-gradient-to-t from-creme-escuro to-creme pb-[5rem]'>
        <div className='w-full h-auto'>

            <div className="flex justify-center items-center mx-auto pt-6 bg-creme-claro h-[3rem]">
                <img src={logo} alt="" className='mx-auto max-w-[6rem] my-[0.3rem] h-auto'/>
            </div>



            <div className="grid justify-items-center pt-20 pb-20">
                <h1 className='text-[2.5rem] -mb-6 font-belleza text-vermelho-madeira uppercase'>Rejuvenescer</h1>
                <h1 className='text-[1.25rem] font-belleza flex justify-center items-center  text-vermelho-madeira uppercase tracking-wide'>mais de  <span className='text-[3.5rem] px-2 text-siena tracking-tighter'> 10 </span> anos </h1>
                <h1 className='text-[1.25rem] -mt-4 font-belleza text-vermelho-madeira uppercase'>sem cirurgia é possível</h1>
            </div>


            <div className="grid grid-cols-2 -mt-[3rem]">
                <div className='flex mx-auto bg-siena rounded-tl-6xl content-center   '>
                    <div className=' h-auto w-[18rem] py-[3rem] px-[0.5rem] hover:shadow-dentro hover:shadow-creme hover:transition-all hover:ease-out hover:duration-700 rounded-tl-46 flex justify-left items-center'>
                        <h2 className='text-[1.5rem] font-mont text-creme leading-tight text-center'>Você que tem entre 40 e 65 anos, que tal 
                        <span className='text-[1.5rem] font-extrabold text-creme'> ELIMINAR</span> a
                        <span className='text-[1.5rem] font-extrabold text-creme'> FLACIDEZ</span> e
                        as <span className='text-[1.5rem] font-extrabold text-creme'> RUGAS</span> 
                        </h2>
                    </div>
                </div>          
                <div className="">
                    <img src={imagemHeader} alt="" className=' -mt-[2rem] ' />
                </div>
        </div>

            
            
            <div className="flex items-center mx-auto drop-shadow-lg ">
                <div className="bg-vermelho-madeira rounded-tl-46 rounded-br-46 ">
                    <h3 className='text-[1.5rem] text-center font-mont text-creme leading-tight  py-[3rem] px-[4rem] '>Tratamentos que estimulam colágeno de forma natural e muito segura, proporcionando um resultado maravilhoso devolvendo sua autoestima com segurança</h3>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Header