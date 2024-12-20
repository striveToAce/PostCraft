import React from 'react';
import type { Metadata } from 'next'
import HeaderFooterLayout from '../components/layout/HeaderFooterLayout';
import LoginForm from '../components/auth/LoginForm';

export const metadata: Metadata = {
  title: 'Login - PostCraft',
  description: 'Login to PostCraft to access your personalized content and manage your profile.',
  keywords: 'PostCraft, login, user access, profile management',
};

const LoginPage: React.FC = () => {

  return (
    <HeaderFooterLayout isAuthPage={false}>
      <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
        <LoginForm />
      </div>
    </HeaderFooterLayout>
  );
};

export default LoginPage;