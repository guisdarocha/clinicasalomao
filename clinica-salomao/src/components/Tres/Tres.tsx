import mulher from '../../assets/mulherSorridente.png'

const Tres = () => {
    return (
    <>
    <div className=' -mt-[9rem]'>
       <div className="bg-cover h-[70rem]" style={{backgroundImage: `url(${mulher})`}}>
       <div className="absolute grid grid-cols-1 gap-y-[2rem] pl-[8rem] pt-[19rem]">
            <div className="flex justify-center items-center  w-[25rem]  rounded-tl-46 rounded-br-46 bg-vermelho-madeira/75 ">
                <h4 className='text-[2rem] w-[18rem] my-[3rem] pl-[1rem] font-belleza leading-tight text-creme'>Você se pergunta quando pode iniciar seu tratamento?</h4>
            </div>
            <div className="flex justify-center items-center  w-[25rem]  rounded-tl-46 rounded-br-46 bg-vermelho-madeira/75">
                <h4 className='text-[2rem] w-[18rem] my-[3rem] pl-[1rem] font-belleza leading-tight text-creme'>Tem medo de ser tarde demais?</h4>
            </div>
            <div className="flex justify-center items-center  w-[25rem]  rounded-tl-46 rounded-br-46 bg-vermelho-madeira/75">
                <h4 className='text-[2rem] w-[18rem] my-[3rem] pl-[1rem] font-belleza leading-tight text-creme'>Se arrepende de cuidar da sua família e de NUNCA de ter pensado em VOCÊ em primeiro lugar?</h4>
            </div>
        </div>

       </div>
    </div>
    </>
    )
}

export default Tres