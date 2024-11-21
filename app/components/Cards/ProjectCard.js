import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ name, brief, imageSrc, tags, slug }) => {
  return (
    <Link href={`/projects/${slug}`} className="relative p-1 group">
      {/* Image Section */}
      <div className="relative w-full h-[50vh] overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transform transition-transform duration-300 group-hover:scale-105"
        />
        {tags?.length > 0 && (
        <div className="absolute bottom-0 right-0 p-2 flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm font-semibold text-white bg-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      </div>

      {/* Product Details */}
      <div className="mt-4 font-medium text-white">
        <h3 className="md:text-4xl opacity-90">{name}</h3>
        <p className="text-xl mt-1">{brief}</p>
      </div>

    </Link>
  );
};

export default ProjectCard;
