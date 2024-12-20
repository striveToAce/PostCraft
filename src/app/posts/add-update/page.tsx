import React from 'react';
import type { Metadata } from 'next'
import PostFormPage from '@/app/components/posts/AddUpdate';

export const metadata: Metadata = {
  title: 'Add Post - PostCraft',
  description: 'Add a new post on PostCraft, your hub for insightful articles and updates.',
  keywords: 'PostCraft, add post, edit post, blog, articles',
};

const AddUpdatePostPage: React.FC = () => {
  return (
    <>
      <PostFormPage />
    </>
  );
};

export default AddUpdatePostPage;