import depoimentoUm from '../../assets/mockupCelular.png'

const Depoimento = () => {
    return (
    <>
    <div className="bg-laranja h-[35rem] flex justify-center items-center mx-auto -mt-[4rem] rounded-tl-46 rounded-br-46">

        <div className="grid grid-cols-2 max-w-[1080px] py-[4rem]">
            <div className=" font-belleza text-creme ml-[5rem] w-[20rem]">
                <h3 className='text-[3.5rem] leading-tight uppercase'>Veja o que nossos clientes relatam sobre nós</h3>
                <h5 className='text-[1.8rem] leading-tight'>Passe para o lado e veja outras avaliações</h5>
            </div>      
            
            <div className='absolute lg:left-[10rem] lg:top-[898rem] xl:left-[20rem] xl:top-[894rem]'>
                <img src={depoimentoUm} alt="" className='h-[800px]' />

            </div>
        </div>
    </div>
    </>
    )
}

export default Depoimento