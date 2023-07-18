import { useState } from 'react';

const Perguntas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const transitionDuration = 500; // 500ms

  const contentStyle = {
    maxHeight: `${height}px`,
    overflow: 'hidden',
    transition: `max-height ${transitionDuration}ms ease-in-out`,
  };

  const buttonIconStyle = {
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: `transform ${transitionDuration}ms ease-in-out`,
  };

  const buttonText = isOpen ? 'Fechar' : 'Abrir';

  const handleHeight = () => {
    setHeight(isOpen ? 200 : 0);
  };

  return (
    <>
      <div className='pt-[4rem]'>
        <button
          className="bg-blue-500 flex text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            toggleCollapse();
            handleHeight();
          }}
        >
          {buttonText}{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            style={buttonIconStyle}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        <div className="bg-creme " style={contentStyle}>
          <p className='py-[4rem]'>
            Sim, pois cada cliente tem uma indicação e anatomia distinta. Os tratamentos variam de
            acordo com o que vc deseja de resultado e indicação do profissional
          </p>
        </div>
      </div>


        <div className="pt-[150px] w-[700px] flex justify-center items-center mx-auto ">
            <div className="justify-center ">
                    <input type="checkbox" className="peer top-[948.8rem] h-[4rem] w-[9rem] opacity-100 cursor-pointer" />
                    <div className="bg-gradient-to-b from-perguntaA to-perguntaB h-[3rem] w-full pl-5 flex justify-between items-center drop-shadow-lg">
                        <h1 className="flex text-[2.3rem] font-belleza text-creme ">Preciso fazer uma avaliação?</h1>
                    <div className="flex justify-end pr-[1rem]  text-creme peer:rotate-0 peer-checked:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </div>  
                    </div>
              

                <div className="bg-laranja overflow-hidden transtion-all duration-500 max-h-0  peer-checked:max-h-40">
                    <div className="p-4">
                        <p>
                        Sim, pois cada cliente tem uma indicação e anatomia distinta. Os tratamentos variam de acordo com o que vc deseja de resultado e indicação do profissional  
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}

export default Perguntas