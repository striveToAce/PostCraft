import Head from 'next/head';
import PostCard from '../components/posts/PostCard';
import PostListing from '../components/posts/PostListing';


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
    <PostListing posts={posts} />
  );
};

export default PostsPage;