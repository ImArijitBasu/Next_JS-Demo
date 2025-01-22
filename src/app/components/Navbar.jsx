import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import React from 'react';

const Navbar = async() => {
    const {getUser} = getKindeServerSession();
    const user = await getUser()
    console.log(user);
    return (
        <div className='bg-gray-200'>
            <nav className='container mx-auto flex justify-between items-center py-4 font-bold uppercase'>
                <div className="">
                    <h1>logo</h1>
                </div>
                <div className="flex space-x-4">
                    <Link className='btn border-2 border-gray-500 rounded-md px-2 py-1' href="/">Home</Link>
                    <Link className='btn border-2 border-gray-500 rounded-md px-2 py-1' href="/about">About</Link>
                    <Link className='btn border-2 border-gray-500 rounded-md px-2 py-1' href="/products">Products</Link>
                    {
                        user ? <>
                        <Link className='btn border-2 border-gray-500 rounded-md px-2 py-1' href="/dashboard">dashboard</Link>
                        <Link className='btn border-2 border-gray-500 rounded-md px-2 py-1' href="/api/auth/logout">logout</Link>
                        </> : <>
                        <Link className='btn border-2 border-gray-500 rounded-md px-2 py-1' href="/api/auth/register">Sign UP</Link>
                    <Link className='btn border-2 border-gray-500 rounded-md px-2 py-1' href="/api/auth/login">Sign in</Link> 
                        </>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;