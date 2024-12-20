'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeaderFooterLayout from '../layout/HeaderFooterLayout';

interface PostFormProps {
  postId?: string; // Optional postId for editing
}

const PostFormPage: React.FC<PostFormProps> = ({ postId }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (postId) {
      // Fetch the existing post data for editing
      const fetchPost = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch post');
          }
          const post = await response.json();
          setTitle(post.title);
          setBody(post.body);
        } catch (err: any) {
          setError(err.message);
        }
      };

      fetchPost();
    }
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !body) {
      setError('Both title and body are required.');
      return;
    }

    try {
      const method = postId ? 'PUT' : 'POST';
      const url = postId
        ? `https://jsonplaceholder.typicode.com/posts/${postId}`
        : 'https://jsonplaceholder.typicode.com/posts';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          id: postId ? parseInt(postId) : undefined, // Include id only for PUT
          title,
          body,
          userId: 1, // Assuming a static userId for demonstration
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to ${postId ? 'update' : 'add'} post`);
      }

      const result = await response.json();
      console.log(result); // Log the response for debugging

      // Show success toast
      toast.success(`Post ${postId ? 'updated' : 'added'} successfully!`);

      // Redirect to the posts page after successful submission
      setTimeout(() => {
        router.push('/posts');
      }, 500); // Delay to allow users to see the toast
    } catch (err: any) {
      setError(err.message);
      // Show error toast
      toast.error(err.message);
    }
  };

  return (
    <HeaderFooterLayout isAuthPage={true}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            {postId ? 'Edit Post' : 'Add New Post'}
          </h1>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="body" className="block text-gray-700 font-semibold mb-2">
                Body
              </label>
              <textarea
                id="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                rows={5}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-blue-600 transition-colors duration-300"
            >
              {postId ? 'Update Post' : 'Add Post'}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </HeaderFooterLayout>
  );
};

export default PostFormPage;