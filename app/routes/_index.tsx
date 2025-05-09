// import { MetaFunction } from "@remix-run/node";
// import { useLocation } from "react-router-dom";
// export const meta: MetaFunction = () => {
//   return [
//     { title: "Shrey Sadhukhan | Portfolio" },
//     {
//       property: "og:title",
//       content: "Shrey Sadhukhan | Portfolio",
//     },
//     {
//       name: "description",
//       content: "This app is the best",
//     },
//   ];
// };

// const IndexPage = () => {
//   const location = useLocation();

//   return (
//     <div className="divide-y divide-gray-200 dark:divide-gray-700">
//       <div className="space-y-2 pt-6 pb-8 md:space-x-5 flex lg:flex-row justify-between flex-col items-center">
//         <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
//           Home
//         </h1>
//         <a
//           href="/daily-updates"
//           className={`px-10 pt-4 border font-bold rounded-md ${
//             location.pathname === "/daily-updates"
//               ? "bg-teal-600 text-white"
//               : "bg-gradient-to-t from-teal-500 to-teal-600 text-white"
//           }`}
//         >
//           Daily Questions
//         </a>
//       </div>

//       <div className="items-center spacey-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
//         <div className="flex flex-col items-center pt-8">
//           <img
//             src={"https://github.com/shreyzeous21.png"}
//             alt="Image of myself"
//             className="h-48 w-48 rounded-full object-cover object-top"
//           />
//           <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
//             Shrey sadhukhan
//           </h3>
//           <p className="text-gray-500 dark:text-gray-400 text-center">
//             Hey my name is Jan and I am a Full Stack Developer
//           </p>

//           <div className="flex space-x-5 pt-6">
//             <a href="https://github.com/shreyzeous21" target="_blank">
//               <svg
//                 viewBox="0 0 1024 1024"
//                 fill="currentColor"
//                 className="w-8 h-8 text-teal-500 hover:text-teal-600"
//               >
//                 <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
//               </svg>
//             </a>
//             <a
//               href="https://www.linkedin.com/in/shrey-sadhukhan/"
//               target="_blank"
//             >
//               <svg
//                 viewBox="0 0 1024 1024"
//                 fill="currentColor"
//                 className="w-8 h-8 text-teal-500 hover:text-teal-600"
//               >
//                 <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
//               </svg>
//             </a>
//             <a href="mailto:shrey.sadhukhan21@gmail.com" target="_blank">
//               <svg
//                 viewBox="0 0 1024 1024"
//                 fill="currentColor"
//                 className="w-8 h-8 text-teal-500 hover:text-teal-600"
//               >
//                 <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" />
//               </svg>
//             </a>
//           </div>
//         </div>
//         <div className="prose max-w-none prose-lg pt-8 pb-8 dark:prose-invert xl:col-span-2">
//           <p>
//             Hey everyone my name is Shrey, I am 23 years old and i am a Full
//             Stack developer based in India
//           </p>
//           <p>
//             I love building Full Stack applications with React and to share them
//             on Github. When I discovered React, Next Js, Remix.run, I was blown
//             away by its interactivity and speed. Its virtual DOM and efficient
//             rendering mechanisms allowed me to create dynamic user interfaces
//             that responded to user actions in real-time.
//           </p>
//           <p>
//             Building applications with React, Next Js, Remix.run and sharing
//             them on Github is my ultimate combination of creative expression,
//             technical expertise, and community engagement. I'm thrilled to
//             continue this journey, honing my skills, and inspiring others in the
//             process.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndexPage;

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
      projects(orderBy: publishedAt_DESC,first: 1000) {
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
    <div className="py-8 ">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          Photo Gallery
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          Beautiful moments captured in time
        </p>
      </div>

      {/* Masonry Grid Container */}
      <div className="columns-1 gap-4 columns-2 lg:columns-4 [&>div:not(:first-child)]:mt-4">
        {projects.projects.map((project) => (
          <div
            key={project.id}
            className="relative group break-inside-avoid overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl dark:shadow-gray-800/50"
          >
            <img
              src={project.titleImage.url}
              alt={project.title}
              className="w-full h-full border rounded-2xl border-black"
              width={project.titleImage.width}
              height={project.titleImage.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
