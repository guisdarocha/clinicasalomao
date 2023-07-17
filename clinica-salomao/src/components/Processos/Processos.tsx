import tresUm from '../../assets/tresEmUm.png'
import papada from '../../assets/papada.png'
import papadaDois from '../../assets/papada2.png'
import bigodeChines from '../../assets/bigodeChines.png'
import labial from '../../assets/labial.png'
import codigoBarras from '../../assets/codigoBarras.png'
import esquerda from '../../assets/pinEsquerda.svg'
import direita from '../../assets/pinDireita.svg'

const Processos = () => {
    return (
    <>
    <div className='bg-gradient-to-t from-creme-escuro to-creme'>

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
                        <div className='absolute -left-[9rem] -top-[10rem] w-[16rem]'>
                            <p className='text-[2rem] w-[16rem] ml-[3rem] font-belleza text-center text-vermelho-madeira'>Marionete</p>
                            <img src={esquerda} alt="" className=''/>
                        </div>
                        <div className='absolute -left-[12rem] -bottom-[1rem] w-[17rem]'>
                            <p className='text-[2rem] w-[16rem] ml-[5rem] font-belleza text-center text-vermelho-madeira'>Papada</p>
                            <img src={esquerda} alt="" className=''/>
                        </div>
                    </div>
                    <div className=''>
                        <img src={tresUm} alt="" className=' mr-[5rem] w-[548px] h-auto'/>
                    </div>
                </div>


                <div className='flex pt-[5rem] col-span-2 justify-center items-center '>
                    <div className='relative '>
                        <div className='absolute -right-[12rem] -bottom-[2rem] pr-[5rem] w-[22rem]'>
                            <p className='text-[2rem] w-[10rem] -mr-[5rem] font-belleza text-center text-vermelho-madeira'>Papada</p>
                            <img src={direita} alt="" className=''/>
                        </div>
                    </div>
                    <div className='order-last'>
                        <img src={papada} alt="" className=' mr-[5rem] w-[548px] h-auto'/>
                    </div>
                </div>


                <div className='flex pt-[5rem] col-span-2 justify-center items-center '>
                    <div className='relative order-last'>
                        <div className='absolute -left-[10rem] -bottom-[3rem] w-[17rem]'>
                            <p className='text-[2rem] w-[16rem] ml-[3rem] font-belleza text-center text-vermelho-madeira'>Bigode Chinês</p>
                            <img src={esquerda} alt="" className=''/>
                        </div>
                    </div>
                    <div className=''>
                        <img src={bigodeChines} alt="" className=' mr-[5rem] w-[548px] h-auto'/>
                    </div>
                </div>


                <div className='flex pt-[5rem] col-span-2 justify-center items-center '>
                    <div className='relative '>
                        <div className='absolute -right-[12rem] -bottom-[1rem] pr-[5rem] w-[22rem]'>
                            <p className='text-[2rem] w-[9rem] -mr-[6rem] font-belleza text-center text-vermelho-madeira'>Labial</p>
                            <img src={direita} alt="" className=''/>
                        </div>
                    </div>
                    <div className='order-last'>
                        <img src={labial} alt="" className=' mr-[5rem] w-[548px] h-auto'/>
                    </div>
                </div>
                
                
                <div className='flex pt-[5rem] col-span-2 justify-center items-center '>
                    <div className='relative order-last'>
                        <div className='absolute -left-[10rem] -bottom-[8rem] w-[21rem]'>
                            <p className='text-[2rem] w-[15rem] ml-[5rem] font-belleza text-center text-vermelho-madeira'>Código de barras</p>
                            <img src={esquerda} alt="" className=''/>
                        </div>
                    </div>
                    <div className=''>
                        <img src={codigoBarras} alt="" className=' mr-[5rem] w-[548px] h-auto'/>
                    </div>
                </div>

                <div className='flex pt-[5rem] col-span-2 justify-center items-center '>
                    <div className='relative '>
                        <div className='absolute -right-[12rem] -bottom-[2rem] pr-[5rem] w-[22rem]'>
                            <p className='text-[2rem] w-[10rem] -mr-[5rem] font-belleza text-center text-vermelho-madeira'>Papada</p>
                            <img src={direita} alt="" className=''/>
                        </div>
                    </div>
                    <div className='order-last'>
                        <img src={papadaDois} alt="" className=' mr-[5rem] w-[548px] h-auto'/>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
    )
}

export default Processos