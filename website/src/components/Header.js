import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../index.css';

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
                    <li className='py-2 text-black hover:bg-green-500 hover:text-white cursor-pointer rounded-md active:bg-purple-500'>Home</li>
                    <li className='py-2 text-black hover:bg-green-500 hover:text-white cursor-pointer rounded-md active:bg-purple-500'>About</li>
                    <li className='py-2 text-black hover:bg-green-500 hover:text-white cursor-pointer rounded-md active:bg-purple-500'>Contact</li>
                  </ul>
                </div>
              )}


            </div>
            <div className='lt:hidden'>
              <div className="flex justify-between items-center h-10 md:h-12 gap-10" data-testid="search-input">
                <div id='banner-search-group' className='box-border relative w-full flex justify-center items-center'>
                  <form method='get' className='flex w-full' id='searchForm' role='search'>
                    <div className='flex flex-nowrap h-10 w-64'>
                      <div className='bg-white focus:border-blue-300 rounded border border-r-0 border-solid border-gray-400 box-border flex flex-nowrap items-center flex-auto text-sm leading-4 mb-0 focus:outline-none text-gray-800 align-middle w-48 transition ease-linear duration-200 lt:rounded-r-none'>
                        <div className='awesomeplete'>
                          <input type="text" name="searchval" id="searchval" data-testid="searchval" autocomplete="off" className="border-0 box-border text-base mb-0 focus:outline-none py-3 focus:placeholder-transparent w-64 h-full bg-transparent typeahead banner-search-input placeholder:text-gray-600 shadow-none max-h-[38px] pl-3 items-center" aria-label="Search: type a search term, and navigate through results with up and down arrows" placeholder="What are you looking for?" aria-expanded="false" aria-owns="awesomplete_list_2" role="combobox"></input>
                        </div>
                      </div>
                      <button value="Search" className="text-white rounded-r border-0 box-border text-sm py-2.5 px-4-1/2 lt:flex lt:items-center cursor-pointer bg-blue-700 lt:hover:bg-blue-800 tracking-[.02em]" type="submit"><span className="sr-only">Search WebstaurantStore</span><svg aria-hidden="true" className="fill-white" width="40" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg"><path d="M14.2745 13.1548L17.6652 16.5447L16.545 17.6649L13.155 14.2742C11.8937 15.2853 10.3248 15.8353 8.70825 15.833C4.77525 15.833 1.58325 12.641 1.58325 8.70801C1.58325 4.77501 4.77525 1.58301 8.70825 1.58301C12.6413 1.58301 15.8333 4.77501 15.8333 8.70801C15.8356 10.3246 15.2856 11.8935 14.2745 13.1548ZM12.6864 12.5674C13.6911 11.5342 14.2522 10.1492 14.2499 8.70801C14.2499 5.64584 11.7696 3.16634 8.70825 3.16634C5.64609 3.16634 3.16659 5.64584 3.16659 8.70801C3.16659 11.7694 5.64609 14.2497 8.70825 14.2497C10.1494 14.2519 11.5344 13.6908 12.5676 12.6861L12.6864 12.5674Z"></path></svg></button>
                    </div>
                  </form>
                </div >
                {/* Navbar */}
                <div className='container bg-origin-box-border block relative'>
                  <div className='flex flex-nowrap items-center justify-between h-full w-100 bg-green-900 rounded-t rounded-b'>
                    <ul className="flex m-0 font-semibold text-sm list-none text-white w-full flex-row lt:flex-nowrap lt:items-center lt:relative lt:space-y-0 min-h-10 px-1.5 py-1.5">
                      <li>
                        <a
                          className="cursor-pointer
                      flex
                      items-center
                      justify-center
                      py-2
                      px-20
                      text-lg
                      text-center
                      text-white
                      no-underline
                      antialiased
                      border-none
                      font-semibold
                      shadow-none
                      leading-4
                      whitespace-nowrap
                      category-item
                      hover:bg-green-800
                      hover:rounded"
                          href="#menu"
                          onClick={() => onChangeComponent('menu')}
                        >
                          Food Menu
                        </a>
                      </li>
                      <li>
                        <a
                          className="cursor-pointer
                      flex
                      items-center
                      justify-center
                      py-2
                      px-20
                      text-center
                      text-white
                      text-lg
                      no-underline
                      antialiased
                      border-none
                      font-semibold
                      shadow-none
                      leading-4
                      whitespace-nowrap
                      category-item
                      hover:bg-green-800
                      hover:rounded"
                          href="#about"
                          onClick={() => onChangeComponent('about')}
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="cursor-pointer
                      flex
                      items-center
                      justify-center
                      py-2
                      px-20
                      text-center
                      text-white
                      text-lg
                      no-underline
                      antialiased
                      border-none
                      font-semibold
                      shadow-none
                      leading-4
                      whitespace-nowrap
                      category-item
                      hover:bg-green-800
                      hover:rounded"
                          href="#openings"
                          onClick={() => onChangeComponent('openings')}
                        >
                          Openings
                        </a>
                      </li>
                      <li>
                        <a
                          className="cursor-pointer
                      flex
                      items-center
                      justify-center
                      py-2
                      px-20
                      text-center
                      text-white
                      text-lg
                      no-underline
                      antialiased
                      border-none
                      font-semibold
                      shadow-none
                      leading-4
                      whitespace-nowrap
                      category-item
                      hover:bg-green-800
                      hover:rounded"
                          href="#FAQ"
                          onClick={() => onChangeComponent('FAQ')}
                        >
                          FAQ
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
