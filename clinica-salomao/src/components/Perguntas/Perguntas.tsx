import Faq from "./Faq";
import whats from '../../assets/whats.svg'
import botao from '../../assets/botaowhats.svg'

 const Perguntas = () => {

  
  return (
    <>
    <div className="bg-creme-claro">

        <div className=" justify-center max-w-[360px] mx-auto pt-[3rem] xl:max-w-[1280px] xl:h-[80rem] xl:flex xl:mx-auto xl:justify-center">
            <div className="w-[5rem] flex justify-start px-[2rem] -mb-[3rem] ">
              <h3 className="text-[1.5rem] text-vermelho-madeira font-belleza leading-none uppercase xl:text-[4.3rem] xl:ml-[5rem]">Perguntas frequentes</h3>
            </div>
      
        <div className="transition-all ease-out duration-700">
          <Faq />
        </div>


      </div>
      <div className='flex justify-center items-center pt-[2rem] xl:mx-auto xl:pb-[5rem] xl:pt-[10rem] '>
            <a href='https://wa.me/5511997173432?text=Gostaria de saber mais sobre a Estética Salomão'>
                <button className='flex justify-center items-center mx-auto cursor-pointer drop-shadow-lg '>
                    <img src={botao} alt="" className='relative w-[21rem]  xl:w-[70rem] hover:w-[22rem]  hover:transition-all hover:ease-out hover:duration-700 xl:hover:w-[72rem] xl:hover:transition-all xl:hover:ease-out xl:hover:duration-700'/>
                    <span className='absolute pr-[1rem] text-[0.8rem] font-mont font-extrabold drop-shadow-lg leading-tight text-branco uppercase xl:text-[2.6rem] xl:pr-[5rem]'>Quero iniciar agora meu tratamento</span>
                    <img src={whats} alt="" className='absolute right-6 w-[1.5rem] h-auto  self-center xl:w-[5rem] '/>
                </button>
            </a>  
        </div>
    </div>
     
    </>
  );
};


export default Perguntas;