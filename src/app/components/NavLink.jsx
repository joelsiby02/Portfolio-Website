// NavLink.jsx
import React from 'react';

const NavLink = ({ href, text }) => {
  return (
    <a href={href} className="text-white px-4 py-2 transition duration-300 hover:bg-black-600 hover:text-black rounded">
      {text}
    </a>
  );
};

export default NavLink;