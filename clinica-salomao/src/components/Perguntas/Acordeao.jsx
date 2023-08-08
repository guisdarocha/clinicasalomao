

const AcordeaoSection = ({section}) => {
   return 
    <div>
            <div>{section.title}</div>
            <div>{section.text}</div>
    </div>
}


const Acordeao = ({ sections } ) => {
return (
    <div>
        {sections.map((section, index) => (
        <AcordeaoSection section={section} key={index}/>
        ))}
    </div>

 )
}

export default Acordeao;