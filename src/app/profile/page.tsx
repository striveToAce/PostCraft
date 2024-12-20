'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { logout } from '@/store/slices/userSlice';
import HeaderFooterLayout from '../components/layout/HeaderFooterLayout';
import { useRouter } from 'next/navigation';

const ProfilePage: React.FC = () => {
  const userName = useSelector((state: RootState) => state.user.name);
  const dispatch = useDispatch();
  const router = useRouter()

  if (!userName) {
    return (
      <HeaderFooterLayout isAuthPage={false}>
        <div className="text-center mt-20">
          <h1 className="text-2xl font-bold">You are not logged in.</h1>
          <p className="mt-4">Please log in to view your profile information.</p>
        </div>
      </HeaderFooterLayout>
    );
  }

  return (
    <HeaderFooterLayout isAuthPage={true}>
      <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Profile Information</h1>
        <div className="text-center">
          <p className="text-lg mb-4">Hello, <span className="font-semibold">{userName}</span>!</p>

          <div className='flex justify-center mb-4'>
          <button
            onClick={() => router.push('/posts')}
            className="w-full bg-sky-500 text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-sky-600 transition-colors duration-300"
          >
            View Posts
          </button>
        </div>

          <button
            onClick={() => dispatch(logout())}
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-red-600 transition-colors duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </HeaderFooterLayout>
  );
};

export default ProfilePage;