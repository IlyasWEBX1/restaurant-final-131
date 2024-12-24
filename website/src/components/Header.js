import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import logo from '../logo.svg';
import '../index.css';
import { Link } from 'react-router-dom';

const Header = ({ onChangeComponent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/profile/`);
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchProfile();
  }, []);
  const logo = profile.length > 0 ? profile[0].logo : null;



  return (
    <div className='page-container new-header'>
      <div className='global-header'>
        <div
          id='react_0HN905CLRE69A'
          data-hypernova-key='GlobalHeader'
          data-hypernova-id='5ca90096-2f2d-4a33-a72d-86e46f993b7e'
        ></div>
        <div
          role='banner'
          className='bg-green-700 py-3 md:py-4 lt:bg-gray-100 lt:py-[22px] lz:py-[18px]'
        >
          <div className='container flex flex-col md:mx-auto'>
            <div className='flex flex-nowrap items-center relative h-7 md:h-10 pb-3.5 lt:pb-0 justify-between'>
              <div className='flex flex-nowrap lt:hidden'>
                <button
                  aria-label='primary navigation'
                  aria-expanded={isMenuOpen}
                  onClick={toggleMenu}
                  className='flex items-center lt:hidden bg-green-700 border-0'
                  data-testid='menu-button'
                  type='button'
                >
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-6 w-6 mr-2" // Adjust size with h-* and w-* classes
                  />
                  {isMenuOpen ? (
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path
                        d="M0.317295 0.338455C0.758053 -0.131695 1.49368 -0.109276 1.96036 0.38853L7.5 6.29759L13.0396 0.38853C13.5063 -0.109276 14.2419 -0.131695 14.6827 0.338455C15.1235 0.808605 15.1024 1.59329 14.6358 2.0911L9.09612 8.00015L14.6355 13.9089C15.1022 14.4067 15.1232 15.1914 14.6824 15.6615C14.2417 16.1317 13.506 16.1093 13.0393 15.6115L7.5 9.70272L1.96065 15.6115C1.49397 16.1093 0.758342 16.1317 0.317584 15.6615C-0.123173 15.1914 -0.102156 14.4067 0.364529 13.9089L5.90388 8.00015L0.36424 2.0911C-0.102444 1.59329 -0.123462 0.808605 0.317295 0.338455Z" fill='white'
                      />
                    </svg>
                  ) : (
                    <svg
                      width='17'
                      height='14'
                      viewBox='0 0 17 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M0 1.16667C0 0.522334 0.543654 0 1.21429 0H15.7857C16.4563 0 17 0.522334 17 1.16667C17 1.811 16.4563 2.33333 15.7857 2.33333H1.21429C0.543654 2.33333 0 1.811 0 1.16667Z'
                        fill='white'
                      ></path>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M0 7C0 6.35567 0.543654 5.83333 1.21429 5.83333H10.9286C11.5992 5.83333 12.1429 6.35567 12.1429 7C12.1429 7.64433 11.5992 8.16667 10.9286 8.16667H1.21429C0.543654 8.16667 0 7.64433 0 7Z'
                        fill='white'
                      ></path>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M0 12.8333C0 12.189 0.543654 11.6667 1.21429 11.6667H15.7857C16.4563 11.6667 17 12.189 17 12.8333C17 13.4777 16.4563 14 15.7857 14H1.21429C0.543654 14 0 13.4777 0 12.8333Z'
                        fill='white'
                      ></path>
                    </svg>
                  )}
                  <span className='font-semibold pl-1.5 text-white text-xl'>
                    {isMenuOpen ? 'Close Menu' : 'Menu'}
                  </span>
                </button>
              </div>
              {isMenuOpen && (
                <div id='menu' className='fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4 transform transition-transform duration-300 ease-in-out z-40' style={{ transform: isMenuOpen ? 'translateX(0) translateY(13.6%)' : 'translateX(-100%) translateY(13.6%)' }}>
                  <ul>
                    <li className='py-2 text-black hover:bg-green-500 hover:text-white cursor-pointer rounded-md active:bg-purple-500' ><Link to="/">Menu</Link></li>
                    <li className='py-2 text-black hover:bg-green-500 hover:text-white cursor-pointer rounded-md active:bg-purple-500' ><Link to="/about">About Us</Link></li>
                    <li className='py-2 text-black hover:bg-green-500 hover:text-white cursor-pointer rounded-md active:bg-purple-500' ><Link to="/openings">Schedule</Link></li>
                    <li className='py-2 text-black hover:bg-green-500 hover:text-white cursor-pointer rounded-md active:bg-purple-500' ><Link to="/FAQ">FAQ</Link></li>
                  </ul>
                </div>
              )}


            </div>
            <div className='lt:hidden'>
              <div className="flex justify-between items-center h-10 md:h-12 gap-10" data-testid="search-input">
                <SearchBar />
                {/* Navbar */}
                <div className="container bg-origin-box-border block relative">
                  <div className="flex flex-wrap items-center justify-between h-full w-full bg-green-900 rounded-t rounded-b">
                    <ul className="flex flex-wrap font-semibold text-sm list-none text-white w-full px-1.5 py-2 md:flex-row md:justify-between">
                      {/* Menu Items */}
                      <li className="w-full md:w-auto">
                        <a
                          className="block cursor-pointer py-2 px-4 text-lg text-center text-white no-underline antialiased border-none font-semibold hover:bg-green-800 hover:rounded"
                        >
                          <Link to="/">Menu</Link>
                        </a>
                      </li>
                      <li className="w-full md:w-auto">
                        <a
                          className="block cursor-pointer py-2 px-1 text-lg text-center text-white no-underline antialiased border-none font-semibold hover:bg-green-800 hover:rounded"

                        >
                          <Link to="/about">About Us</Link>
                        </a>
                      </li>
                      <li className="w-full md:w-auto">
                        <a
                          className="block cursor-pointer py-2 px-4 text-lg text-center text-white no-underline antialiased border-none font-semibold hover:bg-green-800 hover:rounded"


                        >
                          <Link to="/openings">Openings</Link>
                        </a>
                      </li>
                      <li className="w-full md:w-auto">
                        <a
                          className="block cursor-pointer py-2 px-4 text-lg text-center text-white no-underline antialiased border-none font-semibold hover:bg-green-800 hover:rounded"
                        >
                          <Link to="/FAQ">FAQ</Link>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Header;
