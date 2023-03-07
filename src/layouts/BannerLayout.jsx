import React from 'react';
import Button from '../components/Button';

const totalBannerData = [
  {
    id: 1,
    total: 26,
    name: 'Artwork',
  },
  {
    id: 2,
    total: 18,
    name: 'Aucation',
  },
  {
    id: 3,
    total: 8,
    name: 'Artist',
  },
];

const BannerLayout = () => {
  return (
    <section className="banner-layout pt-[100px]">
      <div className="wrapper ct-before-after-banner">
        <div className="max-w-[738px] w-full">
          <h1 className="text-8xl leading-snug font-bold font-font2">
            Discover <br /> Collect and <br /> Sell NFT.
          </h1>
          <p className="text-3xl font-normal mt-[50px] mb-[69px] font-font1">Explore on the world’s best largest NFT marketplace</p>
          <Button className="bg-primaryGradient text-3xl h-[60px] min-w-[250px] font-font1">Explore</Button>
          <ul className="flex gap-x-[50px] mt-[50px]">
            {totalBannerData.map((item) => (
              <li className="text-center" key={item.id}>
                <p className="mb-5 text-[50px] font-normal">{item.total}K+</p>
                <span className="text-xl font-medium">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <div className="relative isolate">
            <img src="/Banner/BannerLine.svg" alt="line banner" className="absolute -z-10 -top-[60px]" />
            <img src="/Banner/BannerBadge.svg" alt="Banner Badge" className="absolute -top-[160px] right-32 rotate-[-20deg]" />
            <img src="/Banner/BannerImage.svg" alt="image banner" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerLayout;
