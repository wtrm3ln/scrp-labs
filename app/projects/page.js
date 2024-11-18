import Image from "next/image";
import { getProjects } from "../contentful/contentful";
import ProjectCard from "../components/Cards/ProjectCard";


export default async function Projects () {
    const projects = await getProjects();

    return(
    <div className="bg-[#484846] mt-24 text-white py-16 px-4 rounded-lg">
    
    <div className="text-center">
            <p className="text-4xl mx-auto max-w-sm text-white font-delicious">We believe in collaborations that have a lasting impact!</p>
    </div>

    <div className="md:grid grid-cols-2 gap-12 p-2 md:p-12">
      {projects.map((project, index) => (
        <div key={index}>
          <ProjectCard
            tags={project.fields.tags}
            name={project.fields.projectName}
            brief={project.fields.projectBrief}
            imageSrc={`https:${project.fields.projectImage.fields.file.url}`}
            slug={project.fields.slug}
          />
        </div>
      ))}
    </div>


      {/* Note */}

      <div className="my-20 mx-auto flex flex-col items-center text-center max-w-3xl justify-center ">
            <p className="text-4xl text-white font-delicious">Your mind is unique & so are your ideas! Looking for something different exclusively made for you? <br></br><br></br>Ah- We love it!  Lets get started</p>
            <a className="bg-white text-primary text-xl mt-3 font-semibold px-5 py-2 rounded-full shadow-lg">
            Contact us
            </a>
        </div>
    </div>
  );
}