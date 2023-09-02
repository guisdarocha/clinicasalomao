
import celular from '../../assets/mockupCelular.png'
import CelularUm from '../CelularUm'
import setaCelular from '../../assets/setaCelular.svg'

const Depoimento = () => {
    
    return (
    <>
    <div className="bg-laranja h-[15rem] flex justify-center items-center mx-auto -mt-[4rem] rounded-tl-6xl rounded-br-6xl xl:h-[40rem]">

        <div className="grid grid-cols-2 max-w-[360px] py-[rem] xl:max-w-[1280px] ">
            <div className=" font-belleza text-creme ml-[2rem] w-[11rem] mt-[4rem] pr-6 xl:ml-[-10rem]">
                <h3 className='text-[1.125rem] leading-tight uppercase xl:text-[3.1rem] xl:w-[33rem]'>Veja o que nossos clientes relatam sobre nós</h3>
                <h5 className='text-[0.875rem] mt-[1rem] font-mont leading-tight xl:text-[2.1rem] xl:w-[26rem] xl:pb-[10rem]'>Passe para o lado e veja outras avaliações</h5>
                <img src={setaCelular} alt="" className='mt-3 xl:w-[16rem]' />
            </div>      
            <img src={celular} alt="" className='w-[145px] ml-[0.5rem] xl:w-[21rem]' />
        </div>
        <CelularUm />
        
    </div>
    
    </>
    )
}

export default Depoimento