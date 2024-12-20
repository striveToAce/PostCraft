import React from 'react';
import Link from 'next/link';

interface PostCardProps {
    title: string;
    body: string;
    id: number;
}

const PostCard: React.FC<PostCardProps> = ({ title, body, id }) => {
    return (
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg m-2 bg-gradient-to-br from-purple-400 to-indigo-500 hover:shadow-2xl transition-shadow duration-300">
            <div className="px-4 py-3">
                <div className="font-bold text-lg mb-1 text-white">{title}</div>
                <p className="text-gray-100 text-sm line-clamp-2">{body}</p>
            </div>
            <div className="px-4 pt-2 pb-3">
                <Link className="inline-block bg-white hover:bg-gray-200 text-indigo-600 font-semibold text-sm py-1 px-2 rounded-full transition-colors duration-300 shadow-sm" href={`/posts/${id}`}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default PostCard;