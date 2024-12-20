'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useRouter } from 'next/navigation';

interface HeaderProps {
    isAuthPage: boolean
}

const Header: React.FC<HeaderProps> = ({
    isAuthPage
}) => {
    const router = useRouter()
    const userName = useSelector((state: RootState) => state.user.name);
    const isLoggedIn = Boolean(userName);


    const getInitials = (name: string) => {
        const names = name.split(' ');
        const initials = names.map((n) => n[0]).join('');
        return initials.toUpperCase();
    };

    useEffect(() => {
        if (isAuthPage && !isLoggedIn && (typeof userName === "string")) {
            router.push('/login')
        }
    }, [isAuthPage, isLoggedIn, userName])

    return (
        <header className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link className="text-white text-2xl font-bold" href="/">
                    PostCraft
                </Link>
                <div>
                    {isLoggedIn ? (
                        <Link href={'/profile'} className="flex items-center space-x-4">
                            <div className="bg-white text-indigo-600 font-bold rounded-full w-10 h-10 flex items-center justify-center">
                                {getInitials(userName || '')}
                            </div>
                        </Link>
                    ) : (
                        <Link className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-full shadow hover:bg-gray-100 transition-colors duration-300" href="/login">

                            Login
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;