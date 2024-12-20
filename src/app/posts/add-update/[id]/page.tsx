'use client'
import React from 'react';
import Head from 'next/head';
import { useParams } from 'next/navigation';
import PostFormPage from '@/app/components/posts/AddUpdate';

const AddUpdatePostPage: React.FC = () => {
  const params = useParams();
  const postId = params?.id; // Access the postId from the params

  return (
    <>
      <Head>
        <title>{`PostCraft - ${postId ? 'Edit' : 'Add'} Post`}</title>
        <meta
          name="description"
          content={`${
            postId ? 'Edit your existing post' : 'Add a new post'
          } on PostCraft, your hub for insightful articles and updates.`}
        />
        <meta name="keywords" content="PostCraft, add post, edit post, blog, articles" />
        <meta name="author" content="PostCraft Team" />
        <meta property="og:title" content={`PostCraft - ${postId ? 'Edit' : 'Add'} Post`} />
        <meta
          property="og:description"
          content={`${
            postId ? 'Edit your existing post' : 'Add a new post'
          } on PostCraft, your hub for insightful articles and updates.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/add-update-post" />
        <meta property="og:image" content="https://yourdomain.com/images/post-form-og-image.jpg" />
      </Head>
      <PostFormPage postId={postId as string} />
    </>
  );
};

export default AddUpdatePostPage;