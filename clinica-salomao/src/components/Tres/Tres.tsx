import mulher from '../../assets/mulherSorridente.png'

const Tres = () => {
    return (
    <>
    <div className=' -mt-[3rem] xl:-mt-[12rem]'>

       

                <div className="bg-cover relative h-[20rem] xl:h-[60rem]" style={{backgroundImage: `url(${mulher})`}}>
                    <div className='flex justify-center w-[360px] lg:w-[720px] xl:w-[1080px]'>
                            <div className="absolute grid grid-cols-1 gap-y-[1rem] mr-[8rem] mt-[5rem] max-w-[360px] xl:max-w-[38rem] xl:mt-[15rem]">
                                <div className="flex justify-left items-left pl-3 py-2 rounded-tl-2xl rounded-br-2xl bg-vermelho-madeira/75  xl:w-[38rem] xl:hover:w-[39rem]  xl:hover:transition-all xl:hover:duration-300">
                                    <h4 className='text-[0.75rem] font-mont leading-tight w-[9rem] text-creme xl:text-[1.87rem] xl:w-full xl:py-[3rem] xl:px-[2rem] xl:text-left'>Você se pergunta quando pode iniciar seu tratamento?</h4>
                                </div>
                                <div className="flex justify-center items-center  w-[11.5rem] pl-3 py-2  rounded-tl-2xl rounded-br-2xl bg-vermelho-madeira/75 xl:w-[38rem] xl:hover:w-[39rem]  xl:hover:transition-all xl:hover:duration-300">
                                    <h4 className='text-[0.75rem] font-mont leading-tight text-creme xl:text-[1.87rem] xl:py-[3rem] xl:px-[2rem] xl:text-left'>Tem medo de ser tarde demais?</h4>
                                </div>
                                <div className="flex justify-center items-center  w-[11.5rem] pl-3 py-2  rounded-tl-2xl rounded-br-2xl bg-vermelho-madeira/75 xl:w-[38rem] xl:hover:w-[39rem]  xl:hover:transition-all xl:hover:duration-300">
                                    <h4 className='text-[0.75rem]  font-mont leading-tight text-creme xl:text-[1.87rem] xl:py-[3rem] xl:px-[2rem] xl:text-left '>Se arrepende de cuidar da sua família e de NUNCA de ter pensado em VOCÊ em primeiro lugar?</h4>
                                </div>
                            </div>
                    </div>
                     
                </div>


    </div>
    </>
    )
}

export default Tres