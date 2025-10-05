import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();
  const { openSignIn } = useClerk();
  return (
    <div className="fixed z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
      <Link to="/" className="max-md:flex-1">
        <img src={assets.logo} alt="" className="h-auto w-36" />
      </Link>
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium 
                   max-md:text-lg z-50 flex flex-col md:flex-row items-center 
                   max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen 
                   min-md:rounded-full  bg-black/90 md:bg-white/10 
                  min-md:overflow-hidden transition-[width] duration-300 ${
                    isOpen ? 'max-md:w-full' : 'max-md:w-0'
                  }`}
      >
        <XIcon
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
        />
        <Link
          to="/"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          Home
        </Link>
        <Link
          to="/movies"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          Movies
        </Link>
        <Link
          to="/"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          Theaters
        </Link>
        <Link
          to="/"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          Releases
        </Link>
        <Link
          to="/favorite"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          Favorites
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <SearchIcon className="max-md:hidden w-6 h-6 cursor-pointer" />
        {!user ? (
          <button
            onClick={openSignIn}
            className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transtion rounded-full font-medium cursor-pointer"
          >
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<TicketPlus width={15} />}
                onClick={() => navigate('/my-bookings')}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>
      <MenuIcon
        className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
    </div>
  );
};

export default NavBar;
