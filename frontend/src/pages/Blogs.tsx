import { Navbar } from "../components/Navbar"
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"; 
import { Msg } from "../components/Msg";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="bg-primary">
       <Navbar /> 
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
        <Navbar/>
        <Msg/>
      <div className="bg-primary back flex flex-col justify-center items-center cursor-pointer">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author?.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={"2023-10-01"}
            />
          ))}

        </div>
      </div>
    </div>
  );
};
