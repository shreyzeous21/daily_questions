import { LoaderArgs, MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { gql } from "graphql-request";
import { useState } from "react";

import { hygraph } from "~/utils/hygraph.server";
import { Post } from "~/utils/interface";

export const meta: MetaFunction = () => {
  return [
    { title: "Daily Updates" },
    {
      property: "og:title",
      content: "Daily Updates",
    },
    {
      name: "description",
      content: "This app is the best",
    },
  ];
};

interface iAppProps {
  posts: Post;
}

export async function loader({}: LoaderArgs) {
  const query = gql`
    query Posts {
      posts {
        createdAt
        id
        overview
        slug
        title
        updatedAt
      }
    }
  `;

  const posts = await hygraph.request(query);

  return json({ posts });
}

const DailyUpdates = () => {
  const { posts } = useLoaderData() as iAppProps;
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = posts.posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-2 pt-6 pb-8 md:space-y-5 lg:justify-between lg:flex-row flex-col flex items-center">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Daily Updates
        </h1>

        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mt-4 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id} className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div>
                <p className="text-base font-medium leading-6 text-teal-500">
                  {new Date(post.createdAt).toISOString().split("T")[0]}
                </p>
              </div>

              <Link
                to={`/post/${post.slug}`}
                className="space-y-3 xl:col-span-3"
                prefetch="intent"
              >
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                    {post.title}
                  </h3>
                </div>
                <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                  {post.overview}
                </div>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyUpdates;
