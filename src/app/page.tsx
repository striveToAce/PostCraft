import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/posts');
  return null; // This line will never be reached
}