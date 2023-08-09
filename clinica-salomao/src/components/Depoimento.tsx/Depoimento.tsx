
import celular from '../../assets/mockupCelular.png'
import CelularUm from '../CelularUm'
import setaCelular from '../../assets/setaCelular.svg'

const Depoimento = () => {
    
    return (
    <>
    <div className="bg-laranja h-[15rem] flex justify-center items-center mx-auto -mt-[4rem] rounded-tl-46 rounded-br-46">

        <div className="grid grid-cols-2 max-w-[360px] py-[rem] ">
            <div className=" font-belleza text-creme ml-[2rem] w-[11rem] mt-[4rem] pr-6">
                <h3 className='text-[1.125rem] leading-tight uppercase'>Veja o que nossos clientes relatam sobre nós</h3>
                <h5 className='text-[0.875rem] mt-[1rem] font-mont leading-tight'>Passe para o lado e veja outras avaliações</h5>
                <img src={setaCelular} alt="" className='mt-3' />
            </div>      
            <img src={celular} alt="" className='w-[145px] ml-[0.5rem]' />
        </div>
        <CelularUm />
        
    </div>
    
    </>
    )
}

export default Depoimento