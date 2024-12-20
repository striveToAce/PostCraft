import Head from 'next/head';
import PostCard from '../components/posts/PostCard';


const fetchPosts = async (): Promise<IPost[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
};

const PostsPage = async () => {
  let posts: IPost[] = [];
  let error: string | null = null;

  try {
    posts = await fetchPosts();
  } catch (err:any) {
    error = err?.message;
  }

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>My Blog</title>
        <meta name="description" content="A blog built with Next.js" />
      </Head>
      <h1 className="text-4xl font-bold text-center my-8">Posts</h1>
      <div className="flex flex-wrap justify-center">
        {posts.map((post) => (
          <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;