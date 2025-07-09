import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {

  const [setActive, active] = useState('')

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 `}
    >
      <div className="w-full flex justify-evenly items-center max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() =>{
            setActive ("");
            window.scroll(0,0)
          }}>
            <p>Mayukh <span>Ghosh</span></p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
