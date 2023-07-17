import tresUm from '../../assets/tresEmUm.png'
import papada from '../../assets/papada.png'
import papadaDois from '../../assets/papada2.png'
import bigodeChines from '../../assets/bigodeChines.png'
import labial from '../../assets/labial.png'
import codigoBarras from '../../assets/codigoBarras.png'
import esquerda from '../../assets/pinEsquerda.svg'

const Processos = () => {
    return (
    <>
    <div className="flex justify-center items-center mx-auto max-w-[1080px]">
        
        <div className='grid grid-cols-2 '>
            <div className="col-span-2 justify-center items-center mx-auto py-[4rem] px-[4rem] ">
                <h3 className='text-[3.1rem] font-belleza text-center text-vermelho-madeira uppercase'>Você está com dúvida?</h3>
                <h4 className='text-[2.3rem]  w-[50rem] pt-[2rem] font-belleza text-center text-vermelho-madeira leading-tight'>Então veja os resultados abaixo de nossas clientes, tenho certeza que
                você vai Amar cada resultado e dar seu primeiro passo para seu rejuvenescimento!</h4>
            </div>
            
            <div className='flex col-span-2 justify-center items-center '>
                <div className='relative order-last'>
                    <div className='absolute -left-[7rem] -top-[18rem] w-[16rem]'>
                        <p className='text-[2rem]  w-[12rem] ml-[3rem] font-belleza text-start text-vermelho-madeira'>Bigode Chines</p>
                        <img src={esquerda} alt="" className=''/>
                    </div>                    
                    
                    <div className='absolute -left-[7rem] -top-[14rem]'>
                        <p className='text-[2rem]  font-belleza text-center text-vermelho-madeira'>Marionete</p>
                        <img src={esquerda} alt="" className=''/>
                    </div>

                    <div className='absolute -left-[3rem] bottom-[5rem]'>
                        <p className='text-[2rem] font-belleza text-center text-vermelho-madeira'>Papada</p>
                        <img src={esquerda} alt="" className=''/>
                    </div>
                </div>
                <div className=''>
                    <img src={tresUm} alt="" className=' mr-[5rem] w-[548px] h-auto'/>
                </div>
            </div>

            <div className='col-start-1 justify-center items-center mx-auto'>                    
                <p>Papada</p>
            </div>
            <div>
                <img src={papada} alt="" className=' m-0 w-[548px] h-auto' />
            </div>

            <div>
                <img src={bigodeChines} alt="" />
                <p>Bigode Chines</p>
            </div>

             <div>
                <p>Labial</p>
                <img src={labial} alt="" />
            </div>

            <div>
                <img src={codigoBarras} alt="" />
                <p>Código de barras</p>
            </div>

            <div>
                <p>Papada</p>
                <img src={papadaDois} alt="" />
            </div>
        </div>
    </div>
    </>
    )
}

export default Processos