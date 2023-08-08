
import { Key, useState} from "react"

type AcordeaoProps = {
    section: any,
    sections: any,
    index: any,
}

type AcordeaoSectionProps = {
    section: any,
    sections: any,
    index: any,
    isActiveSection: any,
}

const AcordeaoSection = ({section, isActiveSection} : AcordeaoSectionProps) => {
    return (
     <div>
         <div>
             <div>{section.title}</div>
             <div>{isActiveSection ? '-' : '+'}</div>
         </div>
            {isActiveSection && <div>{section.text}</div>}
     </div>
     )
 }


const Acordeao = ({ sections } : AcordeaoProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
return (
    <div className="bg-creme w-[360px]">
        {sections.map((section: any, index: Key | null | undefined) => (
        <AcordeaoSection section={section} key={index} 
        isActiveSection={index === activeIndex} 
        setActiveSection
        sections={undefined} index={undefined}/>
        ))}
    </div>

 )
}

export default Acordeao;