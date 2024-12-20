import { notFound } from 'next/navigation';
import Head from 'next/head';
import { unstable_cache } from 'next/cache';
import HeaderFooterLayout from '@/app/components/layout/HeaderFooterLayout';
import Link from 'next/link';

interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const fetchPost = async (id: string): Promise<IPost | null> => {
  const fetchAndCachePost = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
      return null;
    }
    return await res.json();
  };

  const post = await unstable_cache(fetchAndCachePost, [`post-${id}`], {
    revalidate: 30, // Cache for 30 sec
  })();

  return post;
};

const PostDetailsPage = async ({ params }: { params: { id: string } }) => {
  const post = await fetchPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <HeaderFooterLayout isAuthPage={true}>
      <div className="container mx-auto px-4 py-8">
        <Head>
          <title>{post.title} - My Blog</title>
          <meta name="description" content={`Read more about ${post.title}`} />
        </Head>
        <div className="max-w-2xl mx-auto my-8 p-6 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-blue-900">{post.title}</h1>
          <p className="text-gray-800 text-lg leading-relaxed">{post.body}</p>
          <Link href={`/posts/add-update/${post.id}`}>
          <div className="mt-4 text-red-500 font-bold cursor-pointer">Edit</div>
        </Link>
        </div>
      </div>
    </HeaderFooterLayout>
  );
};

export default PostDetailsPage;