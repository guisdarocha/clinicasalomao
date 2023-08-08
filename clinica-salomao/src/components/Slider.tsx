import { Carousel, IconButton } from "@material-tailwind/react";
import um from '../assets/mockupUm.jpeg'
import dois from '../assets/mockupDois.jpeg'

export function Celular() {
  return (
    <Carousel
      className="absolute left-[12.3rem] mt-[13rem] "
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="hidden">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="red"
          size="lg"
          onClick={handleNext}
          className=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <img
        src={um}
        alt="image 1"
        className="w-[128px] h-[280px] rounded-xl"
      />
      <img
        src={dois}
        alt="image 2"
        className="w-[128px] h-[280px] rounded-xl"
      />
      <img
       
        alt="image 3"
        className="w-[128px] h-[280px] rounded-xl"
      />
    </Carousel>
  );
}