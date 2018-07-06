import React from 'react';
import fbIcon from '../img/FB Icon.webp';
import igIcon from '../img/IG Icon.webp';
import scIcon from '../img/SC Icon.webp';
import tIcon from '../img/T Icon.webp';
import ytIcon from '../img/YT Icon.webp';

export default () => {
  return (
    <footer className="text-center text-light">
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/VvnZQuan/"
      >
        <img src={fbIcon} alt="" />
      </a>
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/vvnzquan/"
      >
        <img src={igIcon} alt="" />
      </a>
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://soundcloud.com/vvnzquan"
      >
        <img src={scIcon} alt="" />
      </a>
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/VvnZQuan"
      >
        <img src={tIcon} alt="" />
      </a>
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/xanandvvn"
      >
        <img src={ytIcon} alt="" />
      </a>
      <p className="cinzel">&copy; VVN </p>
    </footer>
  );
};