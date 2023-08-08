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
        <div>
            <div onClick={toggleSection} className='flex'>
                <div>{section.title}</div>
                <div>{isActiveSection ? <img src={setaUp} alt="-" /> : <img src={setaDown} alt="+" />}</div>
            </div>
            {isActiveSection && <div>{section.text}</div>}
        </div>
    );
};


const Acordeao = ({ sections } : AcordeaoProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
return (
    <div className="bg-creme w-[360px] px-[2rem]">
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

