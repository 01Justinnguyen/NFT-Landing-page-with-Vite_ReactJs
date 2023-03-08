import React from 'react';
import Heading from '../components/Heading';

const cardList = [
  {
    id: 1,
    cardUrl: '/Live_Acution/post_1.png',
  },
  {
    id: 2,
    cardUrl: '/Live_Acution/post_2.png',
  },
  {
    id: 3,
    cardUrl: '/Live_Acution/post_3.png',
  },
];

const LiveAcution = () => {
  return (
    <section className="liveacution">
      <div className="wrapper">
        <Heading mainHeading={'Live Acution'} subHeading={'The largest and unique Super rare NFT marketplace For crypto-collectibles'}></Heading>
        <div className="flex items-center justify-center gap-x-[30px]">
          <img className="cursor-pointer hover:opacity-80 hover:transition-opacity" src="/Live_Acution/iconLeft.svg" alt="" />
          {cardList.map((item) => (
            <img className="object-cover cursor-pointer hover:scale-105 hover:transition-all" key={item.id} srcSet={`${item.cardUrl} 2x`} alt="" />
          ))}
          <img className="cursor-pointer hover:opacity-80 hover:transition-opacity" src="/Live_Acution/iconRight.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default LiveAcution;
