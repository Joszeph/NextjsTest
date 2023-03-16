import { Hero } from "../sections/Hero";
import { Main } from "../sections/Main/index";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const mainProps = {
  image: { src: "/img/video.png", alt: "", width: 1000, height: 1680 },
  title: "Managed agency selection",
  description: "Stengthen your onboarding process",
};

const cards = [
  {
    image: { src: "/img/icon1.png", alt: "", width: 55, height: 55 },
    title: "Brief",
    description:
      "Complete brief writing or simple guidance on what to include, we've got you covered.",
      width:'434',
      backgroundColor: '#f9f9f9',
      link:'https://goodbrief.io/'
  },
  {
    image: { src: "/img/icon2.png", alt: "", width: 55, height: 55 },
    title: "Search",
    description:
      "In-depth agensy search covering; criteria matching, door knocking and due-dilligence vetting.",
      width:'460',
      backgroundColor:'#f4f4f4'
  },
  {
    image: { src: "/img/icon3.png", alt: "", width: 55, height: 55 },
    title: "Pitch",
    description:
      "Comprehensive, pitch management, icluding, diary management and pitch hosting.",
      width:'490',
      backgroundColor:'#f1f1f1'
  },
];

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps}/>
        <Main {...mainProps} cards={cards}/>
      </div>
    </>
  );
}
