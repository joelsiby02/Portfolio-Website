// MenuOverlay.jsx
import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({ navLinks, onClose }) => {
  return (
    <div className="sm:hidden absolute top-16 right-4 z-10 bg-gradient-to-b from-purple-700 to-blue-500 bg-opacity-90 rounded-lg overflow-hidden animate__animated animate__fadeInDown" style={{ transition: 'transform 1s ease' }}>
      <ul className="flex flex-col space-y-4 p-4">
        {navLinks.map((link, index) => (
          <NavLink key={index} href={link.path} text={link.title} onClick={onClose} />
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;