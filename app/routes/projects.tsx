import { LoaderArgs, MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { gql } from "graphql-request";
import { hygraph } from "~/utils/hygraph.server";
import { Project } from "~/utils/interface";

export const meta: MetaFunction = () => {
  return [
    { title: "Photo Gallery" },
    {
      property: "og:title",
      content: "Photo Gallery",
    },
    {
      name: "description",
      content: "Beautiful masonry-style photo gallery",
    },
  ];
};

interface iAppProps {
  projects: Project;
}

export async function loader({}: LoaderArgs) {
  const query = gql`
    query MyQuery {
      projects(orderBy: publishedAt_DESC) {
        id
        link
        overview
        title
        titleImage {
          url
          width
          height
        }
        publishedAt
      }
    }
  `;

  const projects = await hygraph.request<Project>(query);
  return json({ projects });
}

const Projects = () => {
  const { projects } = useLoaderData() as iAppProps;

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          Photo Gallery
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          Beautiful moments captured in time
        </p>
      </div>

      {/* Masonry Grid Container */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>div:not(:first-child)]:mt-4">
        {projects.projects.map((project) => (
          <div 
            key={project.id}
            className="relative group break-inside-avoid overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl dark:shadow-gray-800/50"
          >
            <img
              src={project.titleImage.url}
              alt={project.title}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              width={project.titleImage.width}
              height={project.titleImage.height}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-1 text-gray-200 line-clamp-2">
                  {project.overview}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center text-sm font-medium text-white hover:text-teal-300 transition-colors"
                >
                  View Project
                  <span className="ml-1 transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;