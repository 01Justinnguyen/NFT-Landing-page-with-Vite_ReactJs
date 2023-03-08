import React from 'react';
import Button from '../components/Button';
import Heading from '../components/Heading';
import OurCreaterCard from '../components/OurCreaterCard';

const listItem = 9;

const OurCreater = () => {
  return (
    <section className="mb-[200px]">
      <div className="wrapper">
        <Heading mainHeading={'Our Creater'} subHeading={'The largest and unique Super rare NFT marketplace For crypto-collectibles'}></Heading>
        <div className="grid grid-cols-[385px_385px_385px] gap-y-[46px] gap-x-[60px] mb-[100px] items-center justify-center">
          {Array.from(Array(9)).map((item, index) => (
            <OurCreaterCard key={index}></OurCreaterCard>
          ))}
        </div>
        <Button className="mx-auto border-[1px] border-thirdColor text-thirdColor w-[180px] h-[50px] text-base">Explore more</Button>
      </div>
    </section>
  );
};

export default OurCreater;
