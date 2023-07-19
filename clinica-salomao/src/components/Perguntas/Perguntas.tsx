import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import whats from '../../assets/whats.svg'

 const Perguntas = () => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };
 
  function Icon({ id, open }: any) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-7 w-7 text-creme mr-[2rem] transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }
  
  return (
    <Fragment>
        <div className="bg-creme-claro pt-[5rem]">
            <div className="max-w-[700px] flex justify-start mx-auto pb-[2rem]">
              <h3 className="text-[3.5rem] text-vermelho-madeira font-belleza leading-tight uppercase max-w-[21rem]">Perguntas frequentes</h3>
            </div>

        <div className="max-w-[700px]  bg-creme-claro grid-cols-2 justify-center mx-auto items-center">

            <Accordion className="bg-vermelho-madeira" open={open === 1} icon={<Icon id={1} open={open}  />}>
              <AccordionHeader className="text-[2rem] pl-[2rem] text-creme font-belleza font-thin hover:text-creme" onClick={() => handleOpen(1)}>
                Preciso fazer uma avaliação?
              </AccordionHeader>
              <AccordionBody className="bg-creme text-[1.5rem] py-[2rem] px-[2rem] text-vermelho-madeira font-belleza font-thin leading-tight">
                Sim, pois cada cliente tem uma indicação e anatomia distinta. Os tratamentos variam
                de acordo com o que vc deseja de resultado e indicação do profissional.
              </AccordionBody>
            </Accordion>

            <Accordion className="bg-vermelho-madeira mt-[2rem]" open={open === 2} icon={<Icon id={2} open={open}  />}>
              <AccordionHeader className="text-[1.9rem] pl-[2rem]  text-creme font-belleza font-thin hover:text-creme" onClick={() => handleOpen(2)}>
                Após procedimento o que devo ter de cuidados?
              </AccordionHeader>
              <AccordionBody className="bg-creme text-[1.5rem] py-[2rem] px-[2rem] text-vermelho-madeira font-belleza font-thin leading-tight">
                Cada procedimento tem sua orientação. Mas pode ficar tranquila, rotina normal com alguns 
                cuidados específicos de cada protocolo.
              </AccordionBody>
            </Accordion>
          
            
            <Accordion className="bg-vermelho-madeira mt-[2rem]" open={open === 3} icon={<Icon id={3} open={open}  />}>
              <AccordionHeader className="text-[1.9rem] pl-[2rem] text-creme font-belleza font-thin hover:text-creme" onClick={() => handleOpen(3)}>
                Posso fazer mais de um procedimento no mesmo dia?
              </AccordionHeader>
              <AccordionBody className="bg-creme text-[1.5rem] py-[2rem] px-[2rem] text-vermelho-madeira font-belleza font-thin leading-tight">
                Sim, porém tem protocolos que precisam de um intervalo entre eles para que sejam realizados.
              </AccordionBody>
            </Accordion>

            <Accordion className="bg-vermelho-madeira mt-[2rem]" open={open === 4} icon={<Icon id={4} open={open}  />}>
              <AccordionHeader className="text-[2rem] pl-[2rem] text-creme font-belleza font-thin hover:text-creme" onClick={() => handleOpen(4)}>
              É feito com anestesia?
              </AccordionHeader>
              <AccordionBody className="bg-creme text-[1.5rem] py-[2rem] px-[2rem] text-vermelho-madeira font-belleza font-thin leading-tight">
                Sim, nossos procedimentos são com anestesia tópica ou injetável, depende do protocolo.
              </AccordionBody>
            </Accordion>

            
            <Accordion className="bg-vermelho-madeira mt-[2rem]" open={open === 5} icon={<Icon id={5} open={open}  />}>
              <AccordionHeader className="text-[2rem] pl-[2rem] text-creme font-belleza font-thin hover:text-creme" onClick={() => handleOpen(5)}>
              Tem contraindicação?
              </AccordionHeader>
              <AccordionBody className="bg-creme text-[1.5rem] py-[2rem] px-[2rem] text-vermelho-madeira font-belleza font-thin leading-tight">
              Sim, principalmente lactantes e grávidas. É feito uma anamnese antes do seu procedimento 
               para entender um pouco da sua saúde e dar continuidade ao seu protocolo com toda 
              segurança.
              </AccordionBody>
            </Accordion>

            
            <Accordion className="bg-vermelho-madeira mt-[2rem]" open={open === 6} icon={<Icon id={6} open={open}  />}>
              <AccordionHeader className="text-[2rem] pl-[2rem] text-creme font-belleza font-thin hover:text-creme" onClick={() => handleOpen(6)}>
              Resultado é imediato?
              </AccordionHeader>
              <AccordionBody className="bg-creme text-[1.5rem] py-[2rem] px-[2rem] text-vermelho-madeira font-belleza font-thin leading-tight">
              Alguns procedimentos sim, outros ao longo dos dias. Cada protocolo tem sua função e
              importância no seu tratamento.
              </AccordionBody>
            </Accordion>

            
            <Accordion className="bg-vermelho-madeira mt-[2rem] " open={open === 7} icon={<Icon id={7} open={open}  />}>
              <AccordionHeader className="text-[2rem] pl-[2rem] text-creme font-belleza font-thin hover:text-creme" onClick={() => handleOpen(7)}>
              Esses procedimentos são compatíveis com o organismo?
              </AccordionHeader>
              <AccordionBody className="bg-creme  text-[1.5rem] py-[2rem] px-[2rem] text-vermelho-madeira font-belleza font-thin leading-tight">
              São compatíveis e absorvidos pelo organismo. Melhor tecnologia que temos hoje na Estética é 
              usada na Salomão sempre pensando na sua segurança.
              </AccordionBody>
            </Accordion>
          
        </div>

        <div className='col-span-3 flex justify-center pt-[4rem] pb-[8rem]'>
                    <button className='flex  justify-center items-center mx-auto bg-gradient-to-r from-whats-escuro via-whats to-whats-escuro border-4 border-branco drop-shadow-lg cursor-pointer px-[4rem] pt-[1rem] pb-[1rem] rounded-[8rem] hover:shadow-dentro hover:shadow-creme '>
                        <span className='text-[2rem] font-belleza w-[43rem]  drop-shadow-lg text-branco leading-tight uppercase hover:text-[2.1rem] hover:w-[44rem]'>Quero iniciar agora meu tratamento</span>
                        <img src={whats} alt="" className='pl-[1rem]'/>
                    </button>
            </div>
      </div>
     
    </Fragment>
  );
};


export default Perguntas;