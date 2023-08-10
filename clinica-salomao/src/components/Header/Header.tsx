import logo from '../../assets/logo.png'
import imagemHeader from '../../assets/headerImage.png'


const Header = () => {
    return (
    <>
    <div className='bg-gradient-to-t from-creme-escuro to-creme pb-[5rem]'>
        <div className='w-full h-[500px] xl:h-[700px]'>

            <div className="flex justify-center items-center mx-auto pt-6 bg-creme-claro h-[3rem] xl:h-[6rem]">
                <img src={logo} alt="" className='mx-auto max-w-[6rem] my-[0.3rem] h-auto xl:max-w-[12rem] xl:mt-[1rem] '/>
            </div>



            <div className="grid justify-items-center pt-8 pb-20 xl:justify-start xl:ml-[5rem] xl:mt-[4rem]">
                <h1 className='text-[2.5rem] -mb-6 font-belleza text-vermelho-madeira uppercase xl:text-[5rem]'>Rejuvenescer</h1>
                <h1 className='text-[1.25rem] font-belleza flex justify-center items-center  text-vermelho-madeira uppercase tracking-wide xl:text-[3.25rem] xl:mt-[-4rem]'>mais de  <span className='text-[3.5rem] px-2 text-siena tracking-tighter xl:text-[12rem] xl:px-5'> 10 </span> anos </h1>
                <h1 className='text-[1.25rem] -mt-4 font-belleza text-vermelho-madeira uppercase xl:text-[3.25rem] xl:mt-[-4rem]'>sem cirurgia é possível</h1>
            </div>


            <div className="grid grid-cols-2 -mt-[3rem] xl:pl-[2rem]">
                <div className=' mx-auto bg-siena rounded-2xl h-[11.6rem] w-[10.3rem] content-center ml-[1rem] pb-[2.4rem] xl:w-[44rem] xl:h-[10rem] xl:rounded-tl-46 xl:rounded-zero '>
                    <div className='xl:flex xl:items-center  xl:w-[44rem] xl:h-[10rem] xl:rounded-tl-46 xl:rounded-zero hover:shadow-dentro hover:shadow-creme hover:transition-all hover:ease-out hover:duration-700'>
                        <h2 className='pt-[1.8rem] pl-[1.3rem] pr-[1rem] text-[1.1rem]  xl:text-[1.85rem] font-mont text-creme leading-tight text-left xl:pt-0 xl:pl-[3rem]'>Você que tem entre 40 e 65 anos, que tal 
                        <span className='text-[1.1rem] xl:text-[1.85rem] font-extrabold text-creme'> ELIMINAR</span> a
                        <span className='text-[1.1rem] xl:text-[1.85rem] font-extrabold text-creme'> FLACIDEZ</span> e
                        as <span className='text-[1.1rem] xl:text-[1.85rem] font-extrabold text-creme'> RUGAS</span> 
                        </h2>
                    </div>
                </div>          
                <div className="">
                    <img src={imagemHeader} alt="" className=' -mt-[2rem] xl:max-w-[22rem] xl:max-h-[38rem] xl:mt-[-25rem] xl:ml-[10rem]' />
                </div>
        </div>

            
            
            <div className="flex items-center drop-shadow-lg ">
                <div className="bg-vermelho-madeira w-full h-[7.9rem] mx-auto rounded-tr-2xl rounded-bl-2xl xl:h-[13rem]">
                    <h3 className='text-[1rem] w-[20rem] my-[0.9rem] mx-4 text-center font-mont text-creme leading-tight xl:text-[2.1rem] xl:w-[68rem] xl:mx-auto xl:pt-[1.5rem]'>Tratamentos que estimulam colágeno de forma natural e muito segura, proporcionando um resultado maravilhoso devolvendo sua autoestima com segurança</h3>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Header