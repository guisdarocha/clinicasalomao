import tresUm from '../../assets/tresEmUm.png'
import papada from '../../assets/papada.png'
import papadaDois from '../../assets/papadaDois.png'
import bigodeChines from '../../assets/bigodeChines.png'
import labial from '../../assets/labial.png'
import codigoBarras from '../../assets/codigoBarras.png'
import harmonizacao from '../../assets/harmonizacao.png'

const Processos = () => {
    return (
    <>
    <div className='bg-gradient-to-t from-creme-escuro to-creme'>

        <div className="flex justify-center items-center mx-auto max-w-[360px]">
            
            <div className='grid grid-cols-2 '>
                <div className="col-span-2 justify-center items-center mx-auto pt-[3rem] px-[2rem] ">
                    <h3 className='text-[1.5rem] w-[12rem] mx-auto leading-tight font-belleza text-center text-vermelho-madeira uppercase'>Você está com dúvida?</h3>
                    <h4 className='text-[1rem]  pt-[2rem] font-mont text-center text-vermelho-madeira leading-snug'>
                    Então veja abaixo os nossos resultados, tenho certeza que você vai 
                    <span className='text-[1.1rem] font-mont font-extrabold uppercase'> Amar </span>
                    e dar o primeiro passo para o seu rejuvenescimento!</h4>
                </div>
                
                <div className='flex col-span-2 justify-center items-center pt-8 pb-[1rem]'>
                    <div className=''>
                        <img src={tresUm} alt="" className='w-[284px] h-auto'/>
                    </div>
                </div>

                <div className='flex col-span-2 justify-center items-center py-[1rem]'>
                    <div className=''>
                        <img src={papada} alt="" className='w-[284px] h-auto'/>
                    </div>
                </div>

                <div className='flex col-span-2 justify-center items-center py-[1rem]'>
                    <div className=''>
                        <img src={bigodeChines} alt="" className='w-[284px] h-auto'/>
                    </div>
                </div>

                <div className='flex col-span-2 justify-center items-center py-[1rem]'>
                    <div className=''>
                        <img src={codigoBarras} alt="" className='w-[284px] h-auto'/>
                    </div>
                </div>

                <div className='flex col-span-2 justify-center items-center py-[1rem]'>
                    <div className=''>
                        <img src={labial} alt="" className='w-[284px] h-auto'/>
                    </div>
                </div>

                <div className='flex col-span-2 justify-center items-center py-[1rem]'>
                    <div className=''>
                        <img src={papadaDois} alt="" className='w-[284px] h-auto'/>
                    </div>
                </div>

                <div className='flex col-span-2 justify-center items-center py-[3rem]'>
                    <div className=''>
                        <img src={harmonizacao} alt="" className='w-[284px] h-auto'/>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
    )
}

export default Processos