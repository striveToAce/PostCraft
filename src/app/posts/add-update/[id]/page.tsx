import React from 'react';
import Head from 'next/head';
import { unstable_cache } from 'next/cache';
import PostFormPage from '@/app/components/posts/AddUpdate';

const AddUpdatePostPage = async ({ params }: { params: { id: string } }) => {
  const postId = params?.id; // Access the postId from the params
  const fetchPost = async (id: string) => {
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
  const post = await fetchPost(postId as string);
  return (
    <>
      <Head>
        <title>{`PostCraft - ${postId ? 'Edit' : 'Add'} Post`}</title>
        <meta
          name="description"
          content={`${postId ? 'Edit your existing post' : 'Add a new post'
            } on PostCraft, your hub for insightful articles and updates.`}
        />
        <meta name="keywords" content="PostCraft, add post, edit post, blog, articles" />
        <meta name="author" content="PostCraft Team" />
        <meta property="og:title" content={`PostCraft - ${postId ? 'Edit' : 'Add'} Post`} />
        <meta
          property="og:description"
          content={`${postId ? 'Edit your existing post' : 'Add a new post'
            } on PostCraft, your hub for insightful articles and updates.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/add-update-post" />
        <meta property="og:image" content="https://yourdomain.com/images/post-form-og-image.jpg" />
      </Head>
      <PostFormPage title={post?.title} body={post?.body} postId={postId as string} />
    </>
  );
};

export default AddUpdatePostPage;