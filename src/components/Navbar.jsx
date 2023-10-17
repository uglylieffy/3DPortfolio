import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    // entire navigation container 
    <nav
    className={`${styles.paddingX} w-full flex 
    items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      {/* 3841 */}
      <div className='w-full flex justify-between
       items-center max-w-7xl mx-auto'>
        {/* container of navigation logo and name */}
        <Link
          to='/'
          className='flex items-center gap-2'
          // event when clicked 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        > 
          {/* navigation logo and name  */}
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Yuqi &nbsp;
            <span className='sm:block hidden'> | Code Capriccio</span>
          </p>
        </Link>

        {/* desktop navigation menu  */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                // dynamic blocl of code in checking
                // when the list link.tittle is active, it is white
                // when is not the data is in grey 
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile navigation menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
              // switching in between two images, when clicked on or off
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain cursor-pointer"
                // ----> set toggle state here <---- 
                onClick={() => setToggle(!toggle)}
              />
              <div className={`${
              // when not toggled (when it is under menu picture)
              !toggle ? "hidden" : "flex"} 
              p-6 black-gradient absolute top-20 
              right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                {/* display menu items under the rounded box */}
                <ul className="list-none flex justify-end ietms-start flex-col gap-4">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title ? "text-white" : "text-secondary"
                      }  font-poppins font-medium cursor-pointer text-[16px]`}
                      // when on onClick, collaspse menu and direct to new page 
                      onClick={() => {
                        setActive(link.title)
                        setToggle(!toggle)
                        }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar