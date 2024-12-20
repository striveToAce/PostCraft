import React from 'react';
import Head from 'next/head';
import HeaderFooterLayout from '../components/layout/HeaderFooterLayout';
import LoginForm from '../components/auth/LoginForm';

const LoginPage: React.FC = () => {

  return (
    <HeaderFooterLayout isAuthPage={false}>
      <Head>
        <title>Login - PostCraft</title>
        <meta name="description" content="Login to PostCraft to access your personalized content and manage your profile." />
        <meta name="keywords" content="PostCraft, login, user access, profile management" />
        <meta name="author" content="PostCraft Team" />
        <meta property="og:title" content="Login - PostCraft" />
        <meta property="og:description" content="Login to PostCraft to access your personalized content and manage your profile." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/login" />
        <meta property="og:image" content="https://yourdomain.com/images/login-og-image.jpg" />
      </Head>
      <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
        <LoginForm />
      </div>
    </HeaderFooterLayout>
  );
};

export default LoginPage;