'use client'

import React from 'react';
import PostCard from './PostCard';
import HeaderFooterLayout from '../layout/HeaderFooterLayout';

export const PostListing: React.FC<{ posts: IPost[] }> = ({ posts }) => {
  return (
    <HeaderFooterLayout isAuthPage={true}>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
    </HeaderFooterLayout>
  );
};

export default PostListing;