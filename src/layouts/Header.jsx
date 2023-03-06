import React from 'react';
import Button from '../components/Button';
import WalletIcon from '../components/icons/WalletIcon';

const navMenuData = [
  {
    title: 'Home',
    link: '#',
  },
  {
    title: 'Explore',
    link: '#',
  },
  {
    title: 'Products',
    link: '#',
  },
  {
    title: 'Activity',
    link: '#',
  },
  {
    title: 'Elements',
    link: '#',
  },
];

const Header = () => {
  return (
    <header className="h-[100px] fixed top-0 left-0 right-0 bg-bgColor shadow-lg shadow-bgColor-500/10 z-50">
      <div className="wrapper flex justify-between items-center h-full">
        <a href="/" title="logo">
          <img srcSet="/logo.png 2x" alt="logo-nft" />
        </a>
        <div className="flex items-center gap-x-[59px]">
          <ul className="flex items-center gap-x-[30px]">
            {navMenuData.map((item) => (
              <li key={item.title}>
                <a href={item.link} className="text-2xl font-normal">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <Button link="https://github.com/01Justinnguyen?tab=repositories" className="bg-primaryColor" style={{ height: '50px' }}>
            <WalletIcon></WalletIcon> Wallet
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
