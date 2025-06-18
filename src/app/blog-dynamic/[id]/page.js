import Link from "next/link";
import { blogData } from '@/lib/fackData/blogData';
import { IoArrowBack } from "react-icons/io5";
export async function generateMetadata({ params }) {
  const blog = blogData.find((item) => item.id === Number(params.id));
  return {
    title: blog ? blog.title : 'Blog Not Found',
    description: blog ? blog.title : 'No blog description available',
  };
}

export default function BlogPost({ params }) {
  const blog = blogData.find((item) => item.id === Number(params.id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
     <main className="py-5 md:py-16 px-4 max-w-7xl mx-auto">
    {/* Back Button */}
    <div className="mb-8">
      <Link href="/classic-with-sidebar" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold">
        <IoArrowBack className="text-lg" />
        Back to Blog List
      </Link>
    </div>

    <div className="flex flex-col lg:flex-row gap-10 items-start">
      {/* Left: Image */}
      <div className="w-full lg:w-[40%]">
        <img
          src={blog.thumb}
          alt={blog.title}
          className="w-full h-auto rounded-2xl shadow-lg object-cover"
        />
      </div>
      {/* Right: Content */}
      <div className="w-full lg:w-[60%]">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
          <span className="font-medium">{blog.author.author_name}</span>
          <span className="h-1 w-1 bg-gray-400 rounded-full" />
          <span>{blog.date}</span>
          <span className="h-1 w-1 bg-gray-400 rounded-full" />
          <span>{blog.category?.join(', ')}</span>
        </div>
        <div className="prose max-w-none">
          {blog.content || 'Blog content goes here.'}
        </div>
      </div>
    </div>
  </main>
  );
}
