import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProjectBySlug, getProjects } from '@/app/contentful/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Link from 'next/link';

// Generate static paths for projects
export async function generateStaticParams() {
  const projects = await getProjects();

  if (!projects.length) {
    console.error('No projects found.');
    return [];
  }

  return projects.map((product) => ({
    slug: product.fields.slug,
  }));
}

// Rich text render options
const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong className="font-bold">{text}</strong>,
    [MARKS.ITALIC]: (text) => <em className="italic">{text}</em>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mt-4 text-white leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="mt-6 text-xl font-semibold">{children}</h2>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc ml-5 mt-4">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal ml-5 mt-4">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="mb-2">{children}</li>
    ),
  },
};

// Page component for individual project
export default async function ProjectPage({ params }) {
  const { slug } = params;
  const project = await getProjectBySlug(slug);

  // Handle 404 if the project is not found
  if (!project) {
    notFound();
  }

  const { projectName, projectBrief, projectImage, projectDate, projectDetails } = project.fields;

  return (
    <div className="bg-[#484846] rounded-t-lg mt-24 pb-24 p-6">

        <div className="flex justify-between items-center md:p-12">

        <Link href="/projects" className="flex flex-col items-center">
        <Image src="/utilities/back.svg" width={50} height={200}/>
        <p className="text-xl rotate-2 text-white font-medium">Back</p>
        </Link>

        <div className="text-center">
        <h1 className="text-4xl font-delicious text-white">{projectName}</h1>
        <p className="text-lg text-white mt-2">{projectBrief}</p>
      </div>

        <div>
        </div>

        </div>
      

      {/* Project Image */}
      <div className="relative w-full h-96 overflow-hidden rounded-lg my-8">
        <Image
          src={`https:${projectImage.fields.file.url}`}
          alt={projectName}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Date */}
      <p className="text-center text-sm text-white">{new Date(projectDate).toLocaleDateString()}</p>

      {/* Rich Text Content */}
      <div className="mt-8 max-w-6xl mx-auto">
        {documentToReactComponents(projectDetails, richTextOptions)}
      </div>

      <div className="col-span-2 flex flex-col items-center justify-center my-12">
      <Image src="/utilities/scrollend.svg" width={400} height={200}/>
      </div>

    </div>
  );
}
