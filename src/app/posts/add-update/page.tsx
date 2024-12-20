'use client'
import React from 'react';
import Head from 'next/head';
import PostFormPage from '@/app/components/posts/AddUpdate';

const AddUpdatePostPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>{`PostCraft - Add Post`}</title>
        <meta
          name="description"
          content={`Add a new post on PostCraft, your hub for insightful articles and updates.`}
        />
        <meta name="keywords" content="PostCraft, add post, edit post, blog, articles" />
        <meta name="author" content="PostCraft Team" />
        <meta property="og:title" content={`PostCraft - Add Post`} />
        <meta
          property="og:description"
          content={`Add a new post on PostCraft, your hub for insightful articles and updates.`}
        />
        <meta property="og:type" content="website" />
      </Head>
      <PostFormPage />
    </>
  );
};

export default AddUpdatePostPage;