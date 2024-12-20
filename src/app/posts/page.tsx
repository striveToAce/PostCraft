import Head from 'next/head';
import { unstable_cache } from 'next/cache';
import type { Metadata } from 'next'
import PostListing from '../components/posts/PostListing';

export const metadata: Metadata = {
  title: 'Posts - PostCraft',
  description: 'Explore the latest posts on PostCraft, your go-to platform for insightful articles and updates.',
  keywords: 'PostCraft, blog, articles, updates, posts',
};

const fetchPosts = async (): Promise<IPost[]> => {
  const fetchAndCachePosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }
    return await res.json();
  };

  const posts = await unstable_cache(fetchAndCachePosts, ['posts'], {
    revalidate: 30, // Cache for 30 sec
  })();

  return posts;
};

const PostsPage = async () => {
  let posts: IPost[] = [];
  let error: string | null = null;

  try {
    posts = await fetchPosts();
  } catch (err: any) {
    error = err?.message;
  }

  if (error) return <div className="text-red-500">{error}</div>;

  return (
      <PostListing posts={posts} />
  );
};

export default PostsPage;