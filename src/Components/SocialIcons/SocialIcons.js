import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function SocialIcons() {
  return (
    <div>
      <a href="https://www.facebook.com/profile.php?id=100094081966775" target="_blank" rel="noopener noreferrer">
        <FaFacebook style={{ fontSize: '2rem', margin: '0 10px', color: 'gold' }} />
      </a>
      <a href="https://www.instagram.com/gofermotorsllc/" target="_blank" rel="noopener noreferrer">
        <FaInstagram style={{ fontSize: '2rem', margin: '0 10px', color: 'gold' }} />
      </a>
    </div>
  );
}

export default SocialIcons;
