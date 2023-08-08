import Acordeao from "./Acordeao";

const perguntasRespostas = [
    {
      title:'Preciso fazer uma avaliação?',
       text:' Sim, pois cada cliente tem uma indicação e anatomia distinta. Os tratamentos variam de acordo com o que vc deseja de resultado e indicação do profissional.'
    },  
    
    {
        title:'Após procedimento o que devo ter de cuidados?',
       text:' Cada procedimento tem sua orientação. Mas pode ficar tranquila, rotina normal com alguns cuidados específicos de cada protocolo.' 
    },
   
]

const Faq = () => {
    
    
    return (
        <div>
            <h1>faq</h1>
            <Acordeao sections={perguntasRespostas} section={undefined} index={undefined}/>
        </div>
    )
  };
  
  
  export default Faq;