import Head from 'next/head';
import Redis from 'ioredis';
import PostListing from '../components/posts/PostListing';
import HeaderFooterLayout from '../components/layout/HeaderFooterLayout';

const fetchPosts = async (): Promise<IPost[]> => {
  const cacheKey = 'posts';
  const redis = new Redis();
  const cachedPosts = await redis.get(cacheKey);
  if (cachedPosts) {
    return JSON.parse(cachedPosts);
  }
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  const posts = await res.json();
  await redis.set(cacheKey, JSON.stringify(posts), 'EX', 120); // Cache for 2 minutes
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
    <>
      <Head>
        <title>Posts - PostCraft</title>
        <meta name="description" content="Browse the latest posts on PostCraft, your go-to platform for insightful articles and updates." />
        <meta name="keywords" content="PostCraft, posts, articles, updates, blog" />
        <meta name="author" content="PostCraft Team" />
        <meta property="og:title" content="Posts - PostCraft" />
        <meta property="og:description" content="Browse the latest posts on PostCraft, your go-to platform for insightful articles and updates." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/posts" />
        <meta property="og:image" content="https://yourdomain.com/images/posts-og-image.jpg" />
      </Head>
      <PostListing posts={posts} />
    </>
  );
};

export default PostsPage;