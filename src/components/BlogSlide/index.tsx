import { findAllPublicPostsCached } from "@/lib/post/queries/public";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import BlogSlideClient from "./BlogSlideClient";

export default async function BlogSlide() {
  const posts = await findAllPublicPostsCached();
  const featuredPosts = Array.isArray(posts) ? posts.slice(0, 3) : [];
  return (
    <BlogSlideClient>
      {featuredPosts.map((post) => {
        const postLink = `/post/${post.slug}`;
        return (
          <div key={post.id} className="flex w-full">
            <div className="flex px-16 pb-4 items-center justify-center   h-[300px] sm:col-start-1 sm:col-end-2">
              <PostCoverImage
                linkProps={{ href: postLink }}
                imageProps={{
                  width: 400,
                  height: 300,
                  src: post.coverImageUrl,
                  alt: post.title,
                  priority: true,
                  className:
                    "rounded-2xl object-cover w-[100px] h-auto max-h-[320px] sm:max-h-[380px]",
                }}
              />
            </div>
            <div className="flex items-center justify-center px-4">
              <PostSummary
                postLink={postLink}
                postHeading="h1"
                createdAt={post.createdAt}
                excerpt={post.excerpt}
                title={post.title}
              />
            </div>
          </div>
        );
      })}
    </BlogSlideClient>
  );
}
