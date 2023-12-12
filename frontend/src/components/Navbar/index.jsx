import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState, useRef } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick'; // Import the custom hook
import { Baloo_Paaji_2 } from 'next/font/google';
import { FaRegUserCircle } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { useUser } from '@/hooks/useUserContext';
const baloo = Baloo_Paaji_2({ subsets: ['latin'] });


export const Navbar = () => {
  const router = useRouter()
  const menuRef = useRef(); // Reference for the menu element
  const [isUserMenuExpanded, setIsUserMenuExpanded] = useState(false);
  const { user: { userId, username, email }, setUser, logout } = useUser();
  const closeMenu = () => setIsUserMenuExpanded(false);
  const toggleMenu = () => {
    if (userId === '') {
      router.push('/login')
    }
    setIsUserMenuExpanded(!isUserMenuExpanded);
  };
  useOutsideClick(menuRef, closeMenu);


  const handleLogout = () => {
    closeMenu();
    logout();
    router.push('/login');
  }

  return (
    <>
      <nav className="">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center sm:justify-between h-[64px] mx-auto px-8 py-4"></div>
      </nav >
      <nav className="bg-app-primary shadow-md h-[64px] fixed w-screen z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center sm:justify-between h-[64px] mx-auto px-8 py-4">
          <Link href={'/'} className='flex flex-1 items-center h-8 align-middle justify-center sm:justify-start'>
            <span className={`${baloo.className} pt-1 text-app-content font-bold text-[36px] align-middle px-6 tracking-wider`}>
              MailEx
            </span>
          </Link>
          <div className="relative items-center justify-between hidden w-full sm:flex sm:w-auto sm:px-8" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 sm:p-0 mt-4 border sm:space-x-8 sm:flex-row sm:mt-0 sm:border-0">
              <Link href={userId !== '' ? '/mailbox' : '/login?redirect=%2Fmailbox'} className="group relative flex justify-center items-center text-app-content font-bold tracking-wide" >
                <div className='absolute h-10 w-10 rounded-full group-hover:bg-app-primary-light' ></div>
                <IconMailoutline className="cursor-pointer z-10 text-app-content text-2xl" />
              </Link>
              <div className='cursor-pointer'>
                <Link className="cursor-pointer group relative flex justify-center items-center text-app-content font-bold tracking-wide" href={'/'}>
                  <div className='cursor-pointer absolute h-10 w-10 rounded-full group-hover:bg-app-primary-light' ></div>
                  <FiGlobe className='cursor-pointer z-10' size={'24px'} />
                </Link>
              </div>
              <div onClick={toggleMenu} className="cursor-pointer group relative flex justify-center items-center text-app-content font-bold tracking-wide">
                <div className='absolute h-10 w-10 rounded-full group-hover:bg-app-primary-light' ></div>
                <FaRegUserCircle className=" z-10" size={'24px'} />
              </div>
            </ul>
            <div ref={menuRef} className={`${isUserMenuExpanded ? '' : 'hidden'} absolute right-8 top-4 flex items-center space-x-3 md:space-x-0`}>
              {/* <!-- Dropdown menu --> */}
              {userId !== '' ? (
                <div className="z-50 my-4 text-base bg-white list-none divide-y divide-gray-100 rounded shadow" id="user-dropdown">
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 ">{username}</span>
                    {/* <span className="block text-sm  text-gray-500 truncate">name@flowbite.com</span> */}
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <a href="#" className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200">Profile</a>
                    </li>
                    <li>
                      <a href="#" className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200">Settings</a>
                    </li>
                    <li>
                      <div onClick={handleLogout} className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200">
                        Log Out
                      </div>
                    </li>
                  </ul>
                </div>) :
                null
              }
            </div>
          </div>
          {/* <button type="button" className="flex text-sm bg-gray-100 rounded-full md:me-0 focus:ring-4 focus:ring-app-primary" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
          <span className="sr-only">Open user menu</span>
          <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
        </button> */}
        </div>
      </nav>
    </>

  )
}


function IconMailoutline(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>)
  );
}