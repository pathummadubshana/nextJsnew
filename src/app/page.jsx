import Image from "next/image";
import Sidenav from "@/app/sidenav/navbar";
import About from "@/app/About/page";
import Skill from "@/app/Skill/page"
import Project from "@/app/Project/page"

export default function Home() {
  return (
 
    <div>
      <Sidenav/>
      <About/>
      <Skill/>
      <Project/>
    </div>
    
 

  
  
  );
}
