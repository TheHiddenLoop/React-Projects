import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar({ user }) {
  const logout = () => {
    window.open("http://localhost:3000/auth/logout", "_self");
  };
 
  

  return (
    <div className='h-[50px] bg-purple-400 text-white flex justify-around items-center'>
      <span className='text-xl font-bold'>
        <Link to={"/"}>Lama App</Link>
      </span>

      {user ? (
        <ul className='flex items-center gap-4 font-semibold'>
          <li className='h-[37px] w-[37px] border-2 rounded-full border-blue-600'>
            <img
              src={user.photos?.[0]?.value || "https://via.placeholder.com/40"}
              alt="avatar"
              className='h-[35px] w-[35px] rounded-full object-cover'
            />
          </li>
          <li>{user.displayName}</li>
          <li
            className='cursor-pointer hover:text-gray-200'
            onClick={logout}
          >
            Logout
          </li>
        </ul>
      ) : (
        <Link
          className='font-semibold hover:text-gray-200'
          to={"/login"}
        >
          Login
        </Link>
      )}
    </div>
  );
}
