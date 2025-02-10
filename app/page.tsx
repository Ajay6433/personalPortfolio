import HeroSection from "@/components/HeroSection";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import Heading from "@/components/Heading";
import TechStack from "@/components/TechStack";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
   <>   
   <MaxWidthContainer>
    <HeroSection/>
    <Heading title="My Tech Stack" paragraph="Technologies I’ve been working with recently"/>
    <TechStack/>
    <Heading title="Projects" paragraph="Things I’ve built so far"/>
      <ProjectCard/>
    <Heading title="Get In Touch" paragraph="Reach out to discuss your project needs or any inquires. I am here to help you
bring your ideas to life."/>
    
   </MaxWidthContainer>
   </>
  );
} 
