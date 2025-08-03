import { Circle } from "./BlogCard";



export const BlogSkeleton = () => {
  return (
    <div role="status" className="animate-pulse w-screen flex justify-center">
      <div className="p-4 border-b border-slate-200 pb-4 w-full max-w-screen-md cursor-pointer">
        <div className="flex gap-2">
          {/* Avatar Skeleton */}
          <div className="flex justify-center items-center">
            <div className="h-10 w-10 bg-gray-200 rounded-full" />
          </div>

          {/* Name & Metadata */}
          <div className="flex-1">
            <div className="h-3 w-32 bg-gray-200 rounded-full mb-2" />
            <div className="h-2 w-24 bg-gray-200 rounded-full mb-1" />
            <div className="h-2 w-20 bg-gray-200 rounded-full mb-1" />
          </div>

          {/* Icon Skeleton */}
          <div className="flex justify-center items-center pl-2 text-sm">
            <Circle className="text-gray-300" />
          </div>
        </div>

        {/* Blog Title and Content */}
        <div className="mt-4 space-y-2">
          <div className="h-4 w-3/4 bg-gray-200 rounded-full" />
          <div className="h-3 w-full bg-gray-200 rounded-full" />
          <div className="h-3 w-5/6 bg-gray-200 rounded-full" />
          <div className="h-3 w-2/3 bg-gray-200 rounded-full" />
        </div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};
