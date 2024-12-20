import React from 'react';

interface PostCardProps {
  title: string;
  body: string;
  id: number;
}

const PostCard: React.FC<PostCardProps> = ({ title, body, id }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{body}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={`/posts/${id}`}
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default PostCard;