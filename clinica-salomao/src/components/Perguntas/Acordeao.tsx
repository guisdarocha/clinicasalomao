import setaUp from '../../assets/setaUp.svg'
import  setaDown  from '../../assets/setaDown.svg'
import { Key, useState} from "react"

type AcordeaoProps = {
    section: any,
    sections: any,
    index: any,
    sectionIndex: any,
}

type AcordeaoSectionProps = {
    section: any,
    sections: any,
    index: any,
    isActiveSection: any,
    setActiveIndex: any,
    activeIndex: any,
    sectionIndex: any,
    
}

const AcordeaoSection = ({section, isActiveSection, sectionIndex, setActiveIndex} : AcordeaoSectionProps) => {
    const toggleSection = () => {
        const nextIndex = isActiveSection ? null : sectionIndex;
        setActiveIndex(nextIndex);
    }
    

    return (
        <div className='mt-[3rem] pt-[1.5rem] -my-[3rem]'>
            
            <div onClick={toggleSection} className='flex bg-gradient-to-b from-perguntaA to-perguntaB px-[1rem] py-[0.5rem] rounded-46 drop-shadow-md  '>
                <div className='flex ml-2 justify-start items-center font-mont font-bold text-white text-[0.8rem] w-[13rem] leading-tight'>{section.title}</div>
                <div className=' flex items-center ml-6 max-w-[1.5rem] transition-all ease-out duration-700 '>{isActiveSection ? <img src={setaUp} alt="-"  /> : <img src={setaDown} alt="+" />}</div>
            </div>
            {isActiveSection && <div className='mt-[0.1rem] bg-creme flex mx-auto px-[1rem] py-[1rem] drop-shadow-xl font-mont font-medium rounded-xl shadow-inner text-vermelho-madeira leading-tight text-[0.8rem] '>{section.text}</div>}
        </div>
    );
};


const Acordeao = ({ sections } : AcordeaoProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
return (
    <div className="bg-creme-claro w-[360px] px-[2rem]">
        {sections.map((section: any, index: Key | null | undefined) => (
        <AcordeaoSection section={section} key={index} 
        isActiveSection={index === activeIndex} 
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
        sectionIndex={index}
    
        
        sections={undefined} index={undefined}/>
        ))}
    </div>

 )
}

export default Acordeao;

