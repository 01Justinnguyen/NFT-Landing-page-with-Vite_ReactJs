import React from 'react';

const OurCreaterCard = () => {
  return (
    <div className="relative bg-[url('/OurCreater/borderCard.png')] h-[96px] w-full object-cover bg-no-repeat cursor-pointer hover:scale-105 hover:transition-all">
      <div className="absolute font-font1 flex items-center top-0 left-0 px-[25px] py-5">
        <img className="mr-[19px]" src="/OurCreater/avtCard.svg" alt="" />
        <div className="mr-[75px]">
          <p className="text-base mb-2">Emerson Philips</p>
          <span className="text-base">3.2 ETH</span>
        </div>
        <span className="text-xl underline leading-[30px] text-thirdColor cursor-pointer hover:opacity-90">Follow</span>
      </div>
    </div>
  );
};

export default OurCreaterCard;
