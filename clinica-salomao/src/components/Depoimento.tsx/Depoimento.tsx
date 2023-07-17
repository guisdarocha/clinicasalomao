import depoimentoUm from '../../assets/mockupCelular.png'

const Depoimento = () => {
    return (
    <>
    <div className="bg-laranja h-[35rem] -mt-[4rem] rounded-tl-46 rounded-br-46">

        <div className="grid grid-cols-2 flex justify-center items-center max-w-[1080px] pt-[4rem]">
            <div className="container font-belleza text-creme ml-[5rem] w-[20rem]">
                <h3 className='text-[3.5rem] leading-tight uppercase'>Veja o que nossos clientes relatam sobre nós</h3>
                <h5 className='text-[1.8rem] leading-tight'>Passe para o lado e veja outras avaliações</h5>
            </div>      
            
            <div className='absolute top-[900rem] left-[10rem]'>
                <img src={depoimentoUm} alt="" className='h-[800px]' />

            </div>
        </div>
    </div>
    </>
    )
}

export default Depoimento