import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"; // ✅

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center flex-col">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={"2023-10-01"}
            />
          ))}

          {/* <BlogCard
          authorName="John Doe"
          title="Understanding React"
          content="React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can change data, without reloading the page. Its key feature is the ability to build components that manage their own state."
          publishedDate="2023-10-01"
        />

        <BlogCard
          authorName="John Doe"
          title="Understanding React"
          content="React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can change data, without reloading the page. Its key feature is the ability to build components that manage their own state."
          publishedDate="2023-10-01"
        /> */}
        </div>
      </div>
    </div>
  );
};
