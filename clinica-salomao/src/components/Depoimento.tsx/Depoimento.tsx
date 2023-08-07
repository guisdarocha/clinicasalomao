import { Celular } from '../Slider'



const Depoimento = () => {
    
    return (
    <>
    <div className="bg-laranja h-[12rem] flex justify-center items-center mx-auto -mt-[4rem] rounded-tl-46 rounded-br-46">

        <div className="grid grid-cols-2 max-w-[1080px] py-[4rem]">
            <div className=" font-belleza text-creme ml-[2rem] w-[11rem]">
                <h3 className='text-[1.125rem] leading-tight uppercase'>Veja o que nossos clientes relatam sobre nós</h3>
                <h5 className='text-[0.875rem] mt-[1rem] font-mont leading-tight'>Passe para o lado e veja outras avaliações</h5>
            </div>      
            <Celular />
        </div>
    </div>
   
    </>
    )
}

export default Depoimento