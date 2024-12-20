'use client'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { logout } from '@/store/slices/userSlice';
import HeaderFooterLayout from '../components/layout/HeaderFooterLayout';
import type { Metadata } from 'next'
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Profile - PostCraft',
  description: 'Profile page',
  keywords: 'PostCraft, profile, blog, articles',
};

const ProfilePage: React.FC = () => {
  const userName = useSelector((state: RootState) => state.user.name);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(()=>{
    if(!userName){
      router.push('/login')
    }
  },[userName])
  return (
    <HeaderFooterLayout isAuthPage={true}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Profile Information</h1>
          <div className="text-center">
            <p className="text-xl text-gray-700 mb-6">Hello, <span className="font-semibold">{userName}</span>!</p>

            <div className="flex justify-center mb-6">
              <button
                onClick={() => router.push('/posts')}
                className="w-full max-w-xs bg-sky-500 text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-sky-600 transition-colors duration-300"
              >
                View Posts
              </button>
            </div>

            <button
              onClick={() => dispatch(logout())}
              className="w-full max-w-xs bg-red-500 text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-red-600 transition-colors duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </HeaderFooterLayout>
  );
};

export default ProfilePage;