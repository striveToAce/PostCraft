'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/store/slices/userSlice';
import { useRouter } from 'next/navigation';
import { RootState } from '@/store';

const LoginForm: React.FC = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const router = useRouter()
  const userName = useSelector((state: RootState) => state.user.name);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(login(name.trim()));
      setName('');
    }
  };

  useEffect(()=>{
    if(userName){
      router.push('/profile')
    }
  },[userName])

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="border rounded px-2 py-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
        Login
      </button>
    </form>
  );
};

export default LoginForm;