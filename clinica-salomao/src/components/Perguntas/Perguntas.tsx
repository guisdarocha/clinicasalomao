import Faq from "./Faq";
import whats from '../../assets/whats.svg'
import botao from '../../assets/botao.png'

 const Perguntas = () => {

  
  return (
    <>
        <div className="bg-creme-claro  pt-[5rem]">
            <div className="w-[5rem] flex justify-start px-[2rem]">
              <h3 className="text-[1.5rem] text-vermelho-madeira font-belleza leading-none uppercase">Perguntas frequentes</h3>
            </div>
      
        <div>
          <Faq />
        </div>

        <div className='col-span-3 flex justify-center pt-[4rem] pb-[4rem]'>

                    <a href='https://wa.me/5511997173432?text=Gostaria de saber mais sobre a Estética Salomão'>
                        <button className='flex justify-center items-center mx-auto cursor-pointer drop-shadow-lg '>
                            <img src={botao} alt="" className='relative w-[20rem] hover:w-[22rem] hover:shadow-dentro hover:shadow-creme hover:transition-all hover:ease-out hover:duration-700'/>
                            <span className='absolute pr-[1rem] text-[0.8rem] font-mont font-extrabold drop-shadow-lg leading-tight text-branco uppercase'>Quero tratar minha flacidez</span>
                            <img src={whats} alt="" className='absolute right-6 w-[1.5rem] h-auto self-center -mr-3'/>
                        </button>
                    </a>  
            </div>
      </div>
     
    </>
  );
};


export default Perguntas;