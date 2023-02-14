import React from 'react';
import './_header.scss';

const Header = () => {
  return (
    <div className="header">
      <img
        width="70px"
        src="data:image/jpeg;base64,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"
        alt="IMDB Logo"
      />
      <span>MOVIES NEWS</span>
    </div>
  );
};

export default Header;