'use client';

import { useCallback, useState } from 'react';
import Avatar from '../Avatar';
import { AiFillCaretDown } from 'react-icons/ai';
import Link from 'next/link';
import MenuItem from './MenuItems';
import { signOut } from 'next-auth/react';
import BackDrop from './BackDrop';

const useToggleOpen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);
  return [isOpen, toggleOpen];
};

const UserMenu = () => {
  const [isOpen, toggleOpen] = useToggleOpen();

  return (
    <>
        <div className="relative z-30">
        <div
            onClick={toggleOpen}
            className="p-2 border-[1px] border-slate-700 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700"
        >
            <Avatar />
            <AiFillCaretDown />
        </div>
        {isOpen && (
            <div className="absolute rounded-md shadow-md w-[170px] bg-white overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer">
            <div>
                <Link href="/orders">
                <MenuItem onClick={toggleOpen}>Your Orders</MenuItem>
                </Link>
                <Link href="/admin">
                <MenuItem onClick={toggleOpen}>Admin Dashboard</MenuItem>
                </Link>
                <MenuItem onClick={() => {
                    toggleOpen();
                    signOut();
                }}>
                Log out</MenuItem>
            </div>
            <div>
            <Link href="/login">
                <MenuItem onClick={toggleOpen}>Log in</MenuItem>
                </Link>
             <Link href="/register">
                <MenuItem onClick={toggleOpen}>Register</MenuItem>
                </Link>
             </div>
            </div>
        )}
        </div>
        {isOpen ? <BackDrop onClick={toggleOpen}/> : null}
    </>
  );
};

export default UserMenu;
