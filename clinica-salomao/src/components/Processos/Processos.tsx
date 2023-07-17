import tresUm from '../../assets/tresEmUm.png'
import papada from '../../assets/papada.png'
import papadaDois from '../../assets/papada2.png'
import bigodeChines from '../../assets/bigodeChines.png'
import labial from '../../assets/labial.png'
import codigoBarras from '../../assets/codigoBarras.png'

const Processos = () => {
    return (
    <>
    <div className="flex justify-center items-center mx-auto">
        
        <div className='grid grid-cols-2'>

            <div className="col-span-2 justify-center items-center mx-auto py-[4rem] px-[4rem] ">
                <h3 className='text-[3.1rem] font-belleza text-center text-vermelho-madeira uppercase'>Você está com dúvida?</h3>
                <h4 className='text-[2.3rem]  w-[50rem] pt-[2rem] font-belleza text-center text-vermelho-madeira leading-tight'>Então veja os resultados abaixo de nossas clientes, tenho certeza que
                você vai Amar cada resultado e dar seu primeiro passo para seu rejuvenescimento!</h4>
            </div>

            <div className='col-start-1'>
                <p>Bigode Chines</p>
                <p>Marionete</p>
                <p>Papada</p>
            </div>
            <div>
                <img src={tresUm} alt="" className='col-start-2'/>
            <div>

                    <p>Papada</p>
                    <img src={papada} alt="" />
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


    </div>
    </>
    )
}

export default Processos